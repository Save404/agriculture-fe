<template>
  <div style="text-align: right; font-size: 12px" height="40px">
    <span style="float: left; font-size: 15px;margin-left: 20px;">您好，欢迎来到zafu-DA</span>
    <ncp-name v-if="usertype === 'mj'" style="float: left;" @got="setName" :msg="msg"></ncp-name>
    <el-button  v-if="usertype === 'mj'" style="float: left;" type="primary" @click="ncpSearch">查询</el-button>
    <el-dropdown @command="goCharts">
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">统计</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button v-if="usertype === 'nh'" type="success" size="medium" @click="publishNcp">发布农产品</el-button>
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
import NcpName from '../ncp/NcpName'
export default {
  name: 'HomeHeader',
  components: {NcpName},
  data() {
    return {
      user: sessionStorage.user,
      usertype: sessionStorage.usertype,
      filterName: '',
      filterCode: '',
      msg: ''
    }
  },
  methods: {
    publishNcp() {
      this.$router.push({ name: 'NcpRegister' })
    },
    goCharts(command) {
      if (command === 'a') {
        this.$router.push({ name: 'NcpCharts' })
      }
    },
    goDetail(command) {
      if (command === 'a') {
        this.$router.push({ name: 'FarmerDetail' })
      } else if (command === 'b') {
        this.$store.commit('logout')
        this.$router.push({ name: 'FarmerLogin' })
      }
    },
    setName(msg) {
      this.filterName = msg.name
      this.filterCode = msg.code
      //this.$message(msg.name+msg.code)
    },
    ncpSearch() {
      this.$emit('search', {code: this.filterCode})
    }
  }
}

</script>
<style scoped>


</style>
