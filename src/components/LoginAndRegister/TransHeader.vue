<template>
  <el-container class="trans-header">
    <el-header height="">
      <el-button type="text" @click="transFarmer">我是农户  </el-button>
      <el-button type="text" >|</el-button>
      <el-button type="text" @click="transMj">我是买家</el-button>
    </el-header>
  </el-container>
</template>
<script>
export default {
  methods: {
    transMj() {
      this.$router.push({name: 'MjLogin'})
    },
    transFarmer() {
      this.$router.push({name: 'FarmerLogin'})
    }
  }
}
</script>

<style scoped>
.el-button {
  font-family: sans-serif;
  font-size: 50px;
}
</style>
