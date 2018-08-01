<template>
  <div class="nh-purchase">
    <purchase-form :type="type"></purchase-form>
  </div>
</template>
<script>
import PurchaseForm from '@/components/PurchaseForm'
export default {
  components: { PurchaseForm },
  data() {
    return {
      type: 'NH'
    }
  }
}
</script>
