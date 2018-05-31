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
    <el-select v-model="value4" @change="getAll" :placeholder="placeholders.last">
      <el-option :value="placeholders.last">{{placeholders.last}}</el-option>
      <el-option v-for="(item, index) in last" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>
<script>
import qs from 'qs'
import data from '../../assets/data.json'
export default {
  name: 'ncp-name',
  props: {
    placeholders: {
      type: Object,
      default () {
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
      total: data,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      first: [
        { value: '0100000000000', label: '粮食' },
        { value: '0200000000000', label: '油料' },
        { value: '0300000000000', label: '糖料' },
        { value: '0400000000000', label: '蔬菜' },
        { value: '0500000000000', label: '水果' },
        { value: '0600000000000', label: '畜禽及肉类' },
        { value: '0700000000000', label: '蛋类' },
        { value: '0800000000000', label: '奶类' },
        { value: '0900000000000', label: '水产品' },
        { value: '1000000000000', label: '棉麻类' },
        { value: '1100000000000', label: '其他农产品' }
      ],
      second: [],
      third: [],
      last: []
    }
  },
  created() {
    //console.log(this.total)
  },
  methods: {
    getSecond() {
      this.second.length = 0
      let id = this.value1
      for (let i in this.total) {
        if (i.substr(0, 2) === id.substr(0, 2) && i.substr(4) === id.substr(4) && i !== id) {
          this.second.push({ value: i, label: this.total[i] })
        }
      }
      //this.$message('Got second')
    },
    getThird() {
      this.third.length = 0
      let id = this.value2
      for (let i in this.total) {
        if (i.substr(0, 4) === id.substr(0, 4) && i.substr(6) === id.substr(6) && i !== id) {
          this.third.push({ value: i, label: this.total[i] })
        }
      }
      this.$message('Got third')
    },
    getLast() {
      this.last.length = 0
      let id = this.value3
      for (let i in this.total) {
        if (i.substr(0, 6) === id.substr(0, 6) && i.substr(8) === id.substr(8) && i !== id) {
          this.last.push({ value: i, label: this.total[i] })
        }
      }
      this.$message('Got last')
    },
    getAll() {
      if (this.value4 !== '产品名称') {
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
