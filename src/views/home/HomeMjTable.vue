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
          <el-button size="mini" type="primary" @click="contactNh">联系商家</el-button>
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
      this.$axios({
          method: 'get',
          url: 'http://localhost:8080/ncp/get_mj_all_ncp_list',
        })
        .then(res => {
          //console.log(res)
          this.dealLists(res)
        })
        .catch(err => {})
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
    },
    contactNh() {
      this.$alert('商家联系电话为: 17367077526', '您好')
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
