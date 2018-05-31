<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px" height="40px">
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
          <el-dropdown-item command="a">查看个人资料</el-dropdown-item>
          <el-dropdown-item command="b">修改个人资料</el-dropdown-item>
          <el-dropdown-item command="c">查看个人农产品</el-dropdown-item>
          <el-dropdown-item command="d">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
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
      <el-main>
        <el-table stripe :data="lists">
          <el-table-column prop="ncpName" label="名称" width="150" align="center">
          </el-table-column>
          <el-table-column prop="date" label="日期" width="150" align="center">
          </el-table-column>
          <el-table-column prop="address" label="产地" align="center">
          </el-table-column>
          <el-table-column prop="feature" label="特点" align="center"></el-table-column>
          <el-table-column prop="brand" label="品牌" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="getInfo">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    const item = {
      date: '2018-05-27',
      name: 'ZYSzys',
      address: '浙江农林大学'
    };
    return {
      user: sessionStorage.user,
      lists: [],
      tableData: [{
        name: '西瓜',
        date: '2018-05-27',
        address: '浙江农林大学',
        feature: '果皮薄，剖面好，质地细腻',
        brand: '玉麟'
      }, {
        name: '香蕉',
        date: '2018-05-27',
        address: '浙江农林大学',
        feature: '果皮薄，剖面好，质地细腻',
        brand: 'zafu'
      }, {
        name: '梨',
        date: '2018-05-27',
        address: '浙江农林大学',
        feature: '果皮薄，剖面好，质地细腻',
        brand: 'zafu'
      }]
    }
  },
  created() {
    //this.getInfo()
    //console.log(this.lists)
  },
  methods: {
    goDetail(command) {
      if (command === 'b') {
        this.$router.push({ name: 'FarmerDetail' })
      } else if (command === 'd') {
        this.$store.commit('logout')
        this.$router.push({ name: 'FarmerLogin' })
      } else if (command === 'c') {
        this.$message('Clicked')
        this.getInfo()
      }
    },
    publishNcp() {
      this.$router.push({ name: 'NcpRegister' })
    },
    getInfo() {
      let lists = this.lists
      this.$axios({
          method: 'get',
          url: 'http://localhost:8080/ncp/get_ncp_list',
        })
        .then(function(response) {
          //console.log(response.data.data instanceof Array)
          for (let i in response.data.data) {
            lists.push(response.data.data[i])
          }
          /*
                  console.log(lists)
                  for (let i in lists) {
                    for (let j in lists[i]) {
                      console.log(j+lists[i][j])
                    }
                  }*/
        })
        .catch(function(error) {
          alert(error)
        })
    }
  }
}

</script>
<style scoped>
.el-container {
  margin: 0;
  padding: 0;
}

.el-header {
  margin: 0;
  padding: 0;
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
