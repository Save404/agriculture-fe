<template>
  <div class="purchase-edit">
    <purchase-form :type="roles[0]" :isEdit=true></purchase-form>
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
  data() {
    return {

    }
  }
}
</script>
