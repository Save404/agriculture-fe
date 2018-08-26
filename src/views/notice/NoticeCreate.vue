<template>
  <div class="notice-create">
    <notice-form :type="roles[0]"></notice-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import NoticeForm from './components/NoticeForm'
export default {
  components: { NoticeForm },
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
