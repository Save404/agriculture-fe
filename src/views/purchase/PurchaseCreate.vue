<template>
  <div class="purchase-create">
    <purchase-form :type="roles[0]"></purchase-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PurchaseForm from './components/PurchaseForm'
export default {
  components: { PurchaseForm },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  data () {
    return {

    }
  }
}
</script>
