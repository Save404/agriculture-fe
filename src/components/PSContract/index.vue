<template>
  <div class="pscontract-form">
    <h2>农产品购销合同书</h2>
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
              收购方
            </MDinput>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <MDinput name="name" v-model="contractForm.salesName" required :maxlength="100">
              供货方
            </MDinput>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item v-for="(item, index) in contractForm" :label="index" :key="index">
        <el-input v-model="contractForm[index]"></el-input>
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
        statu: ''
      }
    }
  }
}

</script>
