<template>
  <div width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['粮食','油料', '糖料']">
      <el-submenu v-for="(fir, index) in first" :index="fir.label" :key="index">
        <template slot="title"><i class="el-icon-menu"></i>{{fir.label}}</template>
        <el-menu-item-group>
          <template slot="title">{{fir.label}}</template>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import data from '@/assets/data.json'
export default {
  name: 'HomeAside',
  data() {
    return {
      all: data,
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
      ]
    }
  }
}

</script>
<style scoped>


</style>
