<template>
  <div class="purchase-list">
    <el-table :data="list">
      <el-table-column align="center" label="标题" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="内容" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.content}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="联系电话" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.telephone}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="goDetail(scope.row.purchasesId)">详情</el-button>
          <router-link :to="'/purchase/edit/'+scope.row.purchasesId">
            <el-button size="mini" type="warning">修改</el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="goDelete(scope.row.purchasesId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination :current-page="listQuery.pageNum" :page-sizes="[10,20,30,40,50]" :page-size="listQuery.pageSize" :total="total" background layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { purchaseGet, purchaseModify, purchaseDelete } from '@/api/purchase'
export default {
  data() {
    return {
      list: [],
      listQuery: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'basicId',
      'phone',
      'roles'
    ])
  },
  methods: {
    getList() {
      purchaseGet(this.basicId, this.roles[0])
        .then(res => {
          this.list = res.list
          this.listQuery.pageNum = res.pageNum
          this.listQuery.pageSize = res.pageSize
          this.total = res.total
        })
        .catch(err => {})
    },
    goDetail(id) {

    },
    goDelete(id) {
      console.log(id, this.roles[0])
      purchaseDelete(id, this.roles[0])
        .then(res => {
          this.$message({ type: 'success', message: '删除成功' })
          this.getList()
        })
        .catch(err => {
          alert(err)
        })
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val
      this.getList()
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.purchase {
  &-list {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.pagination-container {
  text-align: center;
}
</style>
