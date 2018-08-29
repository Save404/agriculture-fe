<template>
  <div class="notice-list">
    <el-table :data="list">
      <el-table-column align="center" label="标题">
        <template slot-scope="scope">
          <span>{{scope.row.noticeTitle}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="摘要">
        <template slot-scope="scope">
          <span>{{listContent(scope.row.noticeContent)}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="重要程度">
        <template slot-scope="scope">
          <span>{{scope.row.noticeLevel}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="部门">
        <template slot-scope="scope">
          <span>{{scope.row.departmentName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="200">
        <template slot-scope="scope">
          <router-link :to="'/notice/detail/'+scope.row.noticeId">
            <el-button size="mini">详情</el-button>
          </router-link>
          <span v-if="isGov">
            <router-link :to="'/notice/edit/'+scope.row.noticeId">
              <el-button size="mini" type="warning">修改</el-button>
            </router-link>
            <el-button size="mini" type="danger" @click="goDelete(scope.row.noticeId)">删除</el-button>
          </span>
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
import { noticeGet, noticeDelete } from '@/api/notice'
export default {
  data () {
    return {
      list: [],
      listQuery: {
        pageNum: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  created () {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'basicId',
      'phone',
      'roles'
    ]),
    isGov () {
      return this.roles.includes('GOV')
    }
  },
  methods: {
    getList () {
      noticeGet(this.basicId, this.roles[0].toLowerCase())
        .then(res => {
          this.list = res.list
          this.listQuery.pageNum = res.pageNum
          this.listQuery.pageSize = res.pageSize
          this.total = res.total
        })
    },
    goDelete (id) {
      console.log(id, this.roles[0])
      noticeDelete(id)
        .then(res => {
          this.$message({ type: 'success', message: '删除成功' })
          this.getList()
        })
        .catch(err => {
          alert(err)
        })
    },
    handleSizeChange (val) {
      this.listQuery.pageSize = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.listQuery.pageNum = val
      this.getList()
    },
    listContent (cnt) {
      return cnt.replace('<p>', '').replace('</p>', '')
    }
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.notice {
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
