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
          <el-button v-if="scope.row.ncpStatus == 0" size="mini" type="primary" @click="onOffNcp(scope.row.ncpBasicId, scope.row.ncpStatus)">上架</el-button>
          <el-button v-else size="mini" type="warning" @click="onOffNcp(scope.row.ncpBasicId, scope.row.ncpStatus)">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ncpNhGet, ncpDelete, ncpOnOff } from '@/api/ncp'
export default {
  name: 'HomeNhTable',
  data () {
    return {
      lists: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    dealLists (data) {
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
    getInfo () {
      ncpNhGet()
        .then(res => {
          this.dealLists(res)
        })
    },
    getNcpSingle (choicedItem, c1, c2, c3, c4, p, c, a) {
      // console.log(c1, c2, c3, c4, p, c, a)
      sessionStorage.setItem('c1', c1)
      sessionStorage.setItem('c2', c2)
      sessionStorage.setItem('c3', c3)
      sessionStorage.setItem('c4', c4)
      sessionStorage.setItem('p', p)
      sessionStorage.setItem('c', c)
      sessionStorage.setItem('a', a)
      sessionStorage.setItem('ncpBasicId', choicedItem)
      // this.$store.commit('choiceBasicId', choicedItem)
      this.$router.push({ name: 'ncpSingle' })
    },
    deleteNcp (id) {
      this.$confirm('确认删除此农产品吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ncpDelete(id)
          .then(res => {
            this.$message({ message: '删除农产品成功', type: 'success' })
            this.reload()
          })
          .catch(err => {
            this.$message(err)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    onOffNcp (id, status) {
      ncpOnOff(id)
        .then(res => {
          let msg = '上下架农产品成功'
          if (status === 0) {
            msg = '上架农产品成功'
          } else {
            msg = '下架农产品成功'
          }
          this.$message({ message: msg, type: 'success' })
          this.getInfo()
        })
    }
  }
}

</script>
<style scoped>

</style>
