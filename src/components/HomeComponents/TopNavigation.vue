<template>
  <el-header id="top-navigation" height="40px">
    <span>您好，欢迎来到zafu-DA</span>
    <el-button type="success" size="medium" @click="publishNcp">发布农产品</el-button>
  </el-header>
</template>

<script>
export default {
  methods: {
    publishNcp() {
      this.$router.push({name: 'NcpRegister'})
    }
  }
}
</script>

<style scoped>
#top-navigation {
  width: 100%;
  background-color: #dcdcdc;
  text-align: left;
}
span {
  left: 0;
  position: relative;
  top: 30%;
}
.el-button {
  position: relative;
  top: -15px;
  margin-left: 90%;
}
</style>