<template>
  <div>
    <el-table stripe :data="lists">
      <el-table-column prop="ncpName" sortable label="名称" min-width="80" align="center">
      </el-table-column>
      <el-table-column prop="category" label="分类" align="center" min-width="80"></el-table-column>
      <el-table-column prop="address" label="产地" align="center" min-width="80">
      </el-table-column>
      <el-table-column prop="ncpFeature" label="特点" align="center" min-width="80"></el-table-column>
      <el-table-column prop="ncpPublishDate" sortable label="日期" min-width="100" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="getNcpSingle(scope.row.ncpBasicId, scope.row.c1Name, scope.row.c2Name, scope.row.c3Name, scope.row.ncpName, scope.row.nameP, scope.row.nameC, scope.row.nameA)">详情</el-button>
          <el-button size="mini" type="danger" @click="deleteNcp(scope.row.ncpBasicId)">删除</el-button>
          <el-button size="mini" type="primary" @click="sellNcp(scope.row.ncpBasicId)">上架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'HomeNhTable',
  data() {
    return {
      lists: []
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
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
    },
    getInfo() {
      this.$axios({
          method: 'get',
          url: 'http://localhost:8080/ncp/get_ncp_list',
        })
        .then(res => {
          this.dealLists(res)
        })
        .catch(err => {
          this.$message(err)
        })
    },
    getNcpSingle(choicedItem, c1, c2, c3, c4, p, c, a) {
      //console.log(c1, c2, c3, c4, p, c, a)
      sessionStorage.setItem("c1", c1)
      sessionStorage.setItem("c2", c2)
      sessionStorage.setItem("c3", c3)
      sessionStorage.setItem("c4", c4)
      sessionStorage.setItem("p", p)
      sessionStorage.setItem("c", c)
      sessionStorage.setItem("a", a)
      this.$store.commit('choiceBasicId', choicedItem)
      this.$router.push({ name: 'NcpSingle' })
    },
    deleteNcp(id) {
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/ncp/delete_ncp/' + id,
      })
      .then(res => {
        this.$message({message:'删除农产品成功', type: 'success'})
        this.$router.go(0)
      })
      .catch(err => {
        this.$message(err)
      })
    },
    sellNcp(id) {
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/ncp/on_sell/' + id,
      })
      .then(res => {
        this.$message({message:'发布农产品成功', type: 'success'})
        this.$router.push({name: 'Home'})
      })
      .catch(err => {})
    }
  }
}

</script>
<style scoped>


</style>
