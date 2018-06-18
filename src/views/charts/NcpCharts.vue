<template>
  <div>
    <mix-chart></mix-chart>
    <el-button type="primary" @click="goBack()" style="position: absolute;right: 0;z-index: 0;">返回</el-button>
  </div>
</template>
<script>
import keyboard from './keyboard'
import lineChart from './line'
import mixChart from './mixChart'
export default {
  name: 'NcpCharts',
  components: { keyboard, lineChart, mixChart },
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}

</script>
