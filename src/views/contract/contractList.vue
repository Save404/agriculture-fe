<template>
  <div class="contract-list">

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getContract } from '@/api/contract'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'basicId',
      'roles'
    ])
  },
  created() {
    getContract('nh', this.basicId)
    console.log(this.roles[0], this.basicId)
  }
}
</script>
