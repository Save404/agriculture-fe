<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{phone}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    <el-table :data="list">
        <el-table-column>
        </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { purchaseGet } from '@/api/purchase'
export default {
  name: 'dashboard',
  data() {
    return {
      list: []
    }
  },
  created() {
    purchaseGet(this.roles[0])
      .then(res => {
        console.log(res)
      })
      .catch(err => {

      })
  },
  computed: {
    ...mapGetters([
      'phone',
      'roles'
    ])
  }
}

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

</style>
