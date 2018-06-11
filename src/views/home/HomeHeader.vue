<template>
  <div style="text-align: right; font-size: 12px" height="40px">
    <span style="float: left; font-size: 15px">您好，欢迎来到zafu-DA</span>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button type="success" size="medium" @click="publishNcp">发布农产品</el-button>
    <el-dropdown @command="goDetail">
      <el-button type="info">{{user}}</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">编辑个人资料</el-dropdown-item>
        <el-dropdown-item command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      user: sessionStorage.user
    }
  },
  methods: {
    publishNcp() {
      this.$router.push({ name: 'NcpRegister' })
    },
    goDetail(command) {
      if (command === 'a') {
        this.$router.push({ name: 'FarmerDetail' })
      } else if (command === 'b') {
        this.$store.commit('logout')
        this.$router.push({ name: 'FarmerLogin' })
      }
    }
  }
}

</script>
<style scoped>


</style>
