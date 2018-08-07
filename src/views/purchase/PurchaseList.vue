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
          <el-button size="mini" type="warning" @click="goModify(scope.row.purchasesId)">修改</el-button>
          <el-button size="mini" type="danger" @click="goDelete(scope.row.purchasesId)">删除</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { purchaseGet, purchaseModify, purchaseDelete } from '@/api/purchase'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    purchaseGet(this.roles[0])
      .then(res => {
        this.list = res.list
      })
      .catch(err => {

      })
  },
  computed: {
    ...mapGetters([
      'phone',
      'roles'
    ])
  },
  methods: {
    goDetail(id) {

    },
    goModify(id) {

    },
    goDelete(id) {
      console.log(id, this.roles[0])
      purchaseDelete(id, 'MJ')
        .then(res => {
          this.$message({type: 'success', message: '删除成功'})
        })
        .catch(err => {
          alert(err)
        })
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

</style>
