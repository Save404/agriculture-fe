<template>
  <div>
    <el-table stripe :data="lists">
      <el-table-column prop="ncpName" sortable label="名称" width="150" align="center">
      </el-table-column>
      <el-table-column prop="category" label="分类" align="center" width="200"></el-table-column>
      <el-table-column prop="address" label="产地" align="center" width="200">
      </el-table-column>
      <el-table-column prop="ncpFeature" label="特点" align="center" width="150"></el-table-column>
      <el-table-column prop="ncpPublishDate" sortable label="日期" width="120" align="center">
      </el-table-column>
      <el-table-column type="expand">
        <template>
          
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'HomeMjTable',
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
          url: 'http://localhost:8080/ncp/get_all_ncp_list',
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
    }
  }
}

</script>
<style scoped>


</style>
