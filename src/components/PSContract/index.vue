<template>
  <div class="pscontract-form">
    <el-form :model="contractForm" ref="contractForm" label-width="80px">
        <el-form-item label="支付宝">
            <el-input v-model="contractForm.alipayAccount"></el-input>
        </el-form-item>
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
export default {
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
