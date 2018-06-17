<template>
  <el-container id="home">
    <el-header height="40px">
      <home-header></home-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <home-aside></home-aside>
      </el-aside>
      <el-main height="">
        <template v-if="usertype === 'nh'">
          <home-nh-table></home-nh-table>
        </template>
        <template v-else>
          <home-mj-table></home-mj-table>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HomeHeader from './HomeHeader'
import HomeAside from './HomeAside'
import HomeNhTable from './HomeNhTable'
import HomeMjTable from './HomeMjTable'
export default {
  name: 'Home',
  components: { HomeHeader, HomeAside, HomeNhTable, HomeMjTable },
  data() {
    return {
      usertype: sessionStorage.usertype
    }
  }
}

</script>
<style scoped>
#Home {
  width: 100%;
  height: 100%;
}

.el-container {
  margin: 0;
  height: 100%;
}

.bottom-footer {
  position: relative;
}

.el-header {
  margin: 0;
  padding: 0;
  background-color: #B3C0D1;
  color: #333;
  line-height: 40px;
  width: 100%;
}

.el-aside {
  color: #333;
}

.el-table-column {
  width: 1000px;
}
#home {
  background-image: url('../../assets/agri.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
