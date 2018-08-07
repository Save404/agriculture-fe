<template>
  <div>
    <contract-form :type="roles[0]" :isEdit=true></contract-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContractForm from './components/ContractForm'
export default {
  components: { ContractForm },
  computed: {
    ...mapGetters([
      'roles'
    ])
  }
}
</script>
