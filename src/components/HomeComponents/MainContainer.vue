<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>粮食类</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>油料类</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>糖料类</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px" height="40px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="goDetail">
          <el-button type="info">{{user}}</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">查看个人资料</el-dropdown-item>
            <el-dropdown-item command="b">修改个人资料</el-dropdown-item>
            <el-dropdown-item command="c">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <pie></pie>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="200" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="200" align="center">
          </el-table-column>
          <el-table-column prop="address" label="地址" align="center">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Pie from '../Charts/Pie'
export default {
  data() {
    const item = {
      date: '2018-05-27',
      name: 'ZYSzys',
      address: '浙江农林大学'
    };
    return {
      user: sessionStorage.user,
      tableData: Array(5).fill(item)
    }
  },
  components: {Pie},
  methods: {
    goDetail(command) {
      if (command === 'b') {
        this.$router.push({ name: 'FarmerDetail' })
      } else if (command === 'c') {
        this.$store.commit('logout')
        this.$router.push({ name: 'FarmerLogin' })
      } else {
        this.$message('Clicked')
      }
    }
  }
}

</script>
<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 40px;
}

.el-aside {
  color: #333;
}

.el-table-column {
  width: 1000px;
}

</style>
