<template>
  <top-navigation></top-navigation>
</template>

<script>
import TopNavigation from './HomeComponents/TopNavigation'
import SideNavigation from './HomeComponents/SideNavigation'
export default {
  name: 'Home',
  components: {TopNavigation, SideNavigation},
  data() {
    return {

    }
  }
}
</script>