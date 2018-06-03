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
          <el-dropdown-item command="a">编辑个人资料</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
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
          <el-table-column prop="ncpName" sortable label="名称" width="150" align="center">
          </el-table-column>
          <el-table-column prop="category" label="分类" align="center" width="200"></el-table-column>
          <el-table-column prop="address" label="产地" align="center" width="200">
          </el-table-column>
          <el-table-column prop="ncpFeature" label="特点" align="center" width="150"></el-table-column>
          <el-table-column prop="ncpPublishDate" sortable label="日期" width="120" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center" width="250">
            <template slot-scope="scope">
              <el-button size="mini" @click="getNcpSingle(scope.row.ncpBasicId, scope.row.c1Name, scope.row.c2Name, scope.row.c3Name, scope.row.ncpName, scope.row.nameP, scope.row.nameC, scope.row.nameA)">详情</el-button>
              <el-button size="mini" type="danger" @click="">删除</el-button>
              <el-button size="mini" type="primary" @click="">发布</el-button>
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
    return {
      user: sessionStorage.user,
      lists: []
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    goDetail(command) {
      if (command === 'a') {
        this.$router.push({ name: 'FarmerDetail' })
      } else if (command === 'b') {
        this.$store.commit('logout')
        this.$router.push({ name: 'FarmerLogin' })
      }
    },
    publishNcp() {
      this.$router.push({ name: 'NcpRegister' })
    },
    dealLists(data) {
      this.lists.length = 0
      for (let i in data) {
        let item = data[i]
        item['ncpPublishDate'] = new Date(parseInt(item['ncpPublishDate']))
        item['ncpPublishDate'] = item['ncpPublishDate'].toISOString().substr(0, 10)
        item['category'] = item['c1Name'] + '/' + item['c2Name'] + '/' + item['c3Name']
        item['address'] = item['nameP'] + item['nameC'] + item['nameA']
        this.lists.push(item)
      }
      console.log(this.lists)
    },
    getInfo() {
      let dealLists = this.dealLists
      this.$axios({
          method: 'get',
          url: 'http://localhost:8080/ncp/get_ncp_list',
        })
        .then(function(response) {
          //console.log(response.data.data)
          dealLists(response.data.data)
        })
        .catch(function(error) {
          alert(error)
        })
    },
    getNcpSingle(choicedItem, c1, c2, c3, c4, p, c, a) {
      console.log(choicedItem, c1, c2, c3, c4, p, c, a)
      this.$store.commit('choiceBasicId', choicedItem, c1, c2, c3, c4, p, c, a)
      this.$router.push({ name: 'NcpSingle' })
      //this.$message('next')
    }
  }
}

</script>
<style scoped>
.el-container {
  height: 100%;
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
