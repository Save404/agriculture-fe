<template>
  <div class="contract-list">
    <el-table :data="lists" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="标题" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="日期">
        <template slot-scope="scope">
          <span>{{transDate(scope.row.createTime)}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="收购者">
        <template slot-scope="scope">
          <span>{{scope.row.purchaserName}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-button size="small" type="success" v-if="scope.row.statu">签订成功</el-button>
          <el-button size="small" type="info" v-else-if="scope.row.salesName === null">签订中</el-button>
          <el-button size="small" type="primary" v-else>待支付</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <router-link :to="'/contract/edit/'+scope.row.contractId">
            <el-button size="small" type="primary">详情</el-button>
          </router-link>
          <el-button size="small" v-if="roles[0] === 'MJ'" type="warning" plain @click="goPay(scope.row.contractId)" :disabled="!!scope.row.statu">支付</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { contractGet, contractPayStatu, contractStatu } from '@/api/contract'
export default {
  data() {
    return {
      lists: []
    }
  },
  computed: {
    ...mapGetters([
      'basicId',
      'roles'
    ])
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      contractGet(this.roles[0].toLowerCase(), this.basicId)
      .then(res => {
        this.lists = res.list
      })
    },
    transDate(date) {
      const d = new Date(date)
      return d.toISOString().substr(0, 10)
    },
    goPay(id) {
      contractPayStatu(id, 'finish')
        .then(() => {
          this.$message({ type: 'success', message: '支付成功' })
          contractStatu(id, 'finish')
            .then(() => {
              this.$notify({
                title: '成功',
                message: '合同完成',
                type: 'success'
              });
              this.getList()
            })
        })
    }
  }
}

</script>
<style scoped>
.contract-list {
  padding: 20px;
}

</style>
