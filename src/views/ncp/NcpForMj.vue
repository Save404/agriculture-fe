<template>
  <div>
    <el-table stripe :data="lists" style="width: 100%;">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="mjtable-expand">
            <!--
            <el-form-item v-for="(item, index) in lists[0]" v-if="props.row[index] !== ''" :key="index" :label="index">
              <span>{{props.row[index]}}</span>
            </el-form-item>-->
            <el-form-item label="名称">
              <span>{{props.row.ncpName}}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{props.row.category}}</span>
            </el-form-item>
            <el-form-item label="产地">
              <span>{{props.row.address}}</span>
            </el-form-item>
            <el-form-item label="特点">
              <span>{{props.row.ncpFeature}}</span>
            </el-form-item>
            <el-form-item label="日期">
              <span>{{props.row.ncpPublishDate}}</span>
            </el-form-item>
            <el-form-item label="单价">
              <span>{{props.row.price}}</span>
            </el-form-item>
            <el-form-item label="总量">
              <span>{{props.row.total}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="ncpName" sortable label="名称" min-width="80" align="center">
      </el-table-column>
      <el-table-column prop="category" label="分类" align="center" min-width="80"></el-table-column>
      <el-table-column prop="address" label="产地" align="center" min-width="80">
      </el-table-column>
      <el-table-column prop="ncpFeature" label="特点" align="center" min-width="80"></el-table-column>
      <el-table-column prop="ncpPublishDate" sortable label="日期" min-width="100" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="goContract(scope.row.nhBasicId, scope.row.ncpBasicId, scope.row.ncpName, scope.row.supplyUnit)">签订合同</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { ncpMjGet } from '@/api/ncp'
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
        for (let j in item) {
          if (item[j] === null) {
            item[j] = ''
          }
          //console.log(item[j])
        }
        item['ncpPublishDate'] = new Date(parseInt(item['ncpPublishDate']))
        item['ncpPublishDate'] = item['ncpPublishDate'].toISOString().substr(0, 10)
        item['category'] = item['c1Name'] + '/' + item['c2Name'] + '/' + item['c3Name']
        item['address'] = item['nameP'] + item['nameC'] + item['nameA']
        item['price'] = item['ncpPrice'] + item['priceUnit']
        item['total'] = item['ncpSupplyAmount'] + item['supplyUnit']
        this.lists.push(item)
      }
    },
    getInfo() {
      ncpMjGet()
        .then(res => {
          //console.log(res)
          this.dealLists(res)
        })
        .catch(err => {})
    },
    goContract(nh, ncp, name, unit) {
      sessionStorage.setItem("nhBasicId", nh)
      sessionStorage.setItem("ncpBasicId", ncp)
      sessionStorage.setItem("ncpName", name)
      sessionStorage.setItem("unit", unit)
      this.$router.push({ name: 'contractCreate' })
    }
  }
}

</script>
<style scoped>
.mjtable-expand {
  font-size: 0;
  text-align: left;
}

.mjtable-expand .el-form-item {
  margin-left: 50px;
  margin-right: 0;
  margin-bottom: 0;
  width: 25%;
}

.mjtable-expand label {
  width: 90px;
  font-weight: bold;
  color: red;
}

</style>
