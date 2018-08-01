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
      //content: content,
      html: '',
      postForm: {
        author: '17367077526',
        telephone: '17367077526',
        content: '',
        basicId: '',//document.cookie.split(';')[5].split('=')[1],
        title: '',
        display_time: '',
        importance: 0,
        content_short: '',
      },
      rules: {},
      contentShortLength: '',
    }
  },
  methods: {
    releasePurchase() {
      addPurchase('NH', this.postForm)
    }
  }
}
</script>
