<template>
  <div class="ncp-name">
    <el-select v-model="value1" @change="getSecond" :placeholder="placeholders.first">
      <el-option :value="placeholders.first">{{placeholders.first}}</el-option>
      <el-option v-for="(item, index) in first" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="value2" @change="getThird" :placeholder="placeholders.second">
      <el-option :value="placeholders.second">{{placeholders.second}}</el-option>
      <el-option v-for="(item, index) in second" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="value3" @change="getLast" :placeholder="placeholders.third">
      <el-option :value="placeholders.third">{{placeholders.third}}</el-option>
      <el-option v-for="(item, index) in third" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select v-model="value4" @change="getAll":placeholder="placeholders.last">
      <el-option :value="placeholders.last">{{placeholders.last}}</el-option>
      <el-option v-for="(item, index) in last" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'ncp-name',
  props: {
    placeholders: {
      type: Object,
      default() {
        return {
          first: '第一分类',
          second: '第二分类',
          third: '第三分类',
          last: '产品名称'
        }
      }
    }
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      first: [
        {value:'0100000000000', label:'粮食'},
        {value:'0200000000000', label:'油料'},
        {value:'0300000000000', label:'糖料'},
        {value:'0400000000000', label:'蔬菜'},
        {value:'0500000000000', label:'水果'},
        {value:'0600000000000', label:'畜禽及肉类'},
        {value:'0700000000000', label:'蛋类'},
        {value:'0800000000000', label:'奶类'},
        {value:'0900000000000', label:'水产品'},
        {value:'1000000000000', label:'棉麻类'},
        {value:'1100000000000', label:'其他农产品'}
      ],
      second: [],
      third: [],
      last: []
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/',
    })
    .then(function(response) {
      if(response.status === 200) {
        console.log('get first and created')
      }
    })
    .catch(function(error) {
      alert(error)
    })
  },
  methods: {
    getSecond() {
      this.$emit('got', this.value1)
      this.$axios({
        method: 'get',
        url: '/',
        data: qs.stringify(this.value1)
      })
      .then(function(response) {
        if(response.status === 200) {
        //this.second = response.data
      }
      })
      .catch(function(error) {
        alert(error)
      })
      this.$message('Got second')
    },
    getThird() {
      this.$emit('got', this.value2)
      this.$axios({
      method: 'get',
      url: '/',
      })
      .then(function(response) {
        if(response.status === 200) {
        //this.third = response.data
      }
      })
      .catch(function(error) {
        alert(error)
      })
      this.$message('Got third')
    },
    getLast() {
      this.$emit('got', this.value3)
      this.$axios({
      method: 'get',
      url: '/',
      })
      .then(function(response) {
        if(response.status === 200) {
        //this.last = response.data
      }
      })
      .catch(function(error) {
        alert(error)
      })
      this.$message('Got last')
    },
    getAll() {
      if(this.value4 !== '产品名称') {
        this.$emit('got', this.value4)
        this.$message('Got all')
      } else {
        this.$message('产品名称不能为空')
      }
    }
  }
}
</script>

<style scoped>
.el-select {
  width: 24%;
}
</style>
