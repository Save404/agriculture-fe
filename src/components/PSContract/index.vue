<template>
  <div class="pscontract-form">
    <h1 style="text-align: center;">农产品购销合同书</h1>
    <el-form :model="contractForm" ref="contractForm">
      <el-form-item>
        <MDinput name="name" v-model="contractForm.contractId" required :maxlength="100">
          项目全称
        </MDinput>
      </el-form-item>
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
          <el-input size="mini" v-model="contractForm.contractId" placeholder=""></el-input>
          购销合同。其条款如下：
        </p>
      </el-form-item>
      <el-form-item label="第一条 甲乙双方的责任">
        <br>
        <p>一、乙方所供应的产品，必须达到卫生要求和质量标准，如出现产品质量问题，甲方无条件退货或换货。</p>
        <p>二、乙方按甲方所需产品，提供保质、保量、安全的产品。甲方应该按双方约定的数量全部收购。</p>
        <p>三、产品数量合计
          <el-input size="mini" v-model="contractForm.purchaseQuantity"></el-input>吨，每吨
          <el-input size="mini" v-model="contractForm.purchasePrice"></el-input>元，以上金额合计
          <el-input size="mini" v-model="contractForm.purchasePrice"></el-input>元。</p>
      </el-form-item>
      <el-form-item label="第二条 违约责任">
        <br>
        <p>乙方违反合同，应向甲方支付违约金
          <el-input size="mini" v-model="contractForm.salesLiquidatedDamages"></el-input>元；甲方违反合同，应向乙方支付违约金
          <el-input size="mini" v-model="contractForm.purchasesLiquidatedDamages"></el-input>元。</p>
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
        <el-input type="textarea" v-model="contractForm.other" placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <p>一、本合同自甲乙双方签字或盖章后生效</p>
        <p>二、本合同一式多份，甲乙双方、中介方、市场监管部门各执一份。</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import MDinput from '@/components/MDinput'
export default {
  components: { MDinput },
  data() {
    return {
      contractForm: {
        alipayAccount: '',
        contractId: '',
        createTime: '',
        mjBasicId: '',
        ncpBasicId: '',
        nhBasicId: '',
        prePayment: '',
        purchasePrice: '',
        purchaseQuantity: '',
        purchaseUnit: '',
        purchaserName: '',
        purchasesLiquidatedDamages: '',
        receivingAddress: '',
        salesLiquidatedDamages: '',
        salesName: '',
        statu: '',
        other: '',
        d1: '',
        d2: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}

</script>
<style>
.pscontract-form {
  padding: 10px 45px 20px 50px;
}

.el-input {
  width: 100px;
}

</style>
