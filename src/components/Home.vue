<template>
  <div id="Home">
    <top-navigation></top-navigation>
    <div class="container">
      <main-container></main-container>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>
<script>
import TopNavigation from './HomeComponents/TopNavigation'
import MainContainer from './HomeComponents/MainContainer'
import BottomFooter from './HomeComponents/BottomFooter'
export default {
  name: 'Home',
  components: { TopNavigation, MainContainer, BottomFooter },
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
}
.bottom-footer {
  position: relative;
}
</style>
