<template>
  <div class="contract-list">
    <el-table :data="lists" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="250">
        <template slot-scope="scope">
          <span>{{scope.row.contractId}}</span>
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
          <el-button type="success" v-if="scope.row.statu">签订成功</el-button>
          <el-button type="info" v-else>签订中</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { contractGet } from '@/api/contract'
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
    contractGet(this.roles[0].toLowerCase(), this.basicId)
      .then(res => {
        this.lists = res.list
      })
      .catch(err => {

      })
    console.log(this.roles[0].toLowerCase(), this.basicId)
  },
  methods: {
    transDate(date) {
      const d = new Date(date)
      return d.toISOString().substr(0, 10)
    }
  }
}

</script>
<style scoped>
.contract-list {
  padding: 20px;
}
</style>
