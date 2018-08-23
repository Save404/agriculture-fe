<template>
  <div class="pscontract-form">
    <h1 style="text-align: center;">{{contractForm.title}}</h1>
    <el-form :model="contractForm" ref="contractForm">
      <el-row :gutter="0">
        <el-col :span="12">
          <el-form-item>
            <MDinput name="name" v-model="contractForm.purchaserName" required :maxlength="100">
              收购方(以下简称甲方)
            </MDinput>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <MDinput name="name" v-model="contractForm.salesName" required :maxlength="100">
              供货方(以下简称乙方)
            </MDinput>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <p>
          为了保护甲乙双方合法权益，提高双方的经济效益，明确法律责任，依据《中华人民共和国合同法》、《中华人民农产品质量安全法》和相关法律法规，经甲乙双方在平等自愿、互惠互利、诚实守信的原则上，签订
          <el-input size="mini" v-model="contractForm.title" placeholder=""></el-input> 购销合同。其条款如下：
        </p>
      </el-form-item>
      <el-form-item label="第一条 甲乙双方的责任">
        <br>
        <p>一、乙方所供应的产品，必须达到卫生要求和质量标准，如出现产品质量问题，甲方无条件退货或换货。</p>
        <p>二、乙方按甲方所需产品，提供保质、保量、安全的产品。甲方应该按双方约定的数量全部收购。</p>
        <p>三、产品数量合计
          <el-input size="mini" v-model="contractForm.purchaseQuantity"></el-input> {{contractForm.purchaseUnit}}，每{{contractForm.purchaseUnit}}
          <el-input size="mini" v-model="contractForm.perPrice"></el-input> 元，以上金额合计 <span style="font-weight: bold;color: red;">{{calculateTotal}}</span> 元。预付金为
          <el-input v-model="contractForm.prePayment" size="mini"></el-input> 元。</p>
      </el-form-item>
      <el-form-item label="第二条 违约责任">
        <br>
        <p>乙方违反合同，应向甲方支付违约金
          <el-input size="mini" v-model="contractForm.salesLiquidatedDamages"></el-input> 元；甲方违反合同，应向乙方支付违约金
          <el-input size="mini" v-model="contractForm.purchasesLiquidatedDamages"></el-input> 元。</p>
      </el-form-item>
      <el-form-item label="第三条 协议期限">
        <br>
        <p>本合同期限自
          <el-date-picker size="small" type="date" v-model="contractForm.d1" placeholder="选择日期时间"></el-date-picker>
          至
          <el-date-picker size="small" type="date" v-model="contractForm.d2" placeholder="选择日期时间"></el-date-picker>
          ，期届满，双方本着真诚合作及供需平衡的情况，在本合同结束前，再签订新合同书。
        </p>
      </el-form-item>
      <el-form-item label="第四条 补充内容">
        <br>
        <el-row :gutter="0">
          <el-col :span="12">
            支付宝账户:
            <el-input size="mini" v-model="contractForm.alipayAccount" style="width: 200px;"></el-input>
          </el-col>
          <el-col :span="12">
            收货地址:
            <el-input size="mini" v-model="contractForm.receivingAddress" style="width: 200px;"></el-input>
          </el-col>
        </el-row>
        <el-input type="textarea" v-model="contractForm.other" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <p>一、本合同自甲乙双方签字或盖章后生效。</p>
        <p>二、本合同一式多份，甲乙双方、中介方、市场监管部门各执一份。</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{msg}}</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MDinput from '@/components/MDinput'
import { contractAdd, contractFinish, contractDetail } from '@/api/contract'
export default {
  components: { MDinput },
  props: {
    type: String,
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '立即创建',
      contractForm: {
        title: sessionStorage.getItem('ncpName') + '购销合同书',
        alipayAccount: '',
        contractId: '',
        createTime: '',
        mjBasicId: '',
        ncpBasicId: sessionStorage.getItem('ncpBasicId'),
        nhBasicId: sessionStorage.getItem('nhBasicId'),
        prePayment: '',
        purchasePrice: 0,
        purchaseQuantity: '',
        purchaseUnit: sessionStorage.getItem('unit'),
        purchaserName: '',
        purchasesLiquidatedDamages: '',
        receivingAddress: '',
        salesLiquidatedDamages: '',
        salesName: '',
        statu: 0,
        other: '',
        d1: '',
        d2: '',
        perPrice: ''
      }
    }
  },
  created () {
    if (this.isEdit) {
      this.msg = '保存'
      const id = this.$route.params.id
      contractDetail(id)
        .then(res => {
          for (const item in this.contractForm) {
            if (res[item]) {
              this.contractForm[item] = res[item]
            }
          }
        })
    }
  },
  computed: {
    ...mapGetters([
      'basicId'
    ]),
    calculateTotal () {
      return this.contractForm.perPrice * this.contractForm.purchaseQuantity
    }
  },
  methods: {
    onSubmit () {
      if (this.type === 'MJ') {
        this.contractForm.mjBasicId = this.basicId
        this.contractForm.purchasePrice = this.calculateTotal
        console.log(this.contractForm)
        contractAdd(this.contractForm)
          .then(res => {
            this.$message({ message: '合同创建成功', type: 'success' })
            this.$router.push({ name: 'contractList' })
          })
        console.log('submit!')
      } else {
        contractFinish(this.contractForm)
          .then(res => {
            this.$message({ message: '填写完成', type: 'success' })
            this.$router.push({ name: 'contractList' })
          })
      }
    }
  }
}

</script>
<style scoped>
.pscontract-form {
  padding: 10px 45px 20px 50px;
}

.el-input {
  width: 100px;
}

</style>
