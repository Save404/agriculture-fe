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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { purchaseGet } from '@/api/purchase'
export default {
  data () {
    return {
      list: []
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
    ])
  },
  methods: {
    getList () {
      purchaseGet(this.basicId, this.roles[0])
        .then(res => {
          this.list = res.list
        })
    },
    goDetail (id) {

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
