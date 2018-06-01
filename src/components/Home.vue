<template>
  <div id="Home">
    <div class="container">
      <main-container></main-container>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
import MainContainer from './HomeComponents/MainContainer'
import BottomFooter from './HomeComponents/BottomFooter'
export default {
  name: 'Home',
  components: { MainContainer, BottomFooter },
  data() {
    return {

    }
  }
}

</script>
<style scoped>
#Home {
  width: 100%;
  height: 100%;
}
.container {
  margin: 0;
  height: 100%;
}
.bottom-footer {
  position: relative;
}
</style>
