<template>
  <el-container class="trans-header">
    <router-link :to="'/govlogin'" style="position: fixed;top: 2%;right: 2%;font-size: 1.2em;">政府人员登录</router-link>
    <el-header height="">
      <el-button class="useful" type="text" @click="transFarmer">我是农户  </el-button>
      <el-button type="text" >|</el-button>
      <el-button class="useful" type="text" @click="transMj">我是买家</el-button>
    </el-header>
  </el-container>
</template>
<script>
export default {
  name: 'TransHeader',
  methods: {
    transMj () {
      this.$router.push({name: 'mjLogin'})
      this.$message({message: '已切换至买家登录模式', type: 'success'})
    },
    transFarmer () {
      this.$router.push({name: 'nhLogin'})
      this.$message({message: '已切换至农户登录模式', type: 'success'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.el-button
  font-family sans-serif
  font-size 50px
  &.useful:hover
    font-weight bold
</style>
