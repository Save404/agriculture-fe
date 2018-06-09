<template>
  <div id="Mj-register">
    <register :form="MjRegisterForm" :url="url" />
    <bottom-footer/>
  </div>
</template>
<script>
import Register from '@/components/Register'
export default {
  name: 'MjRegister',
  components: { Register },
  data() {
    return {
      MjRegisterForm: {
        telephone: '',
        password: '',
        repassword: '',
        protocol: false
      },
      url: 'http://localhost:8080/mj/mj_register'
    }
  }
}

</script>
<style scoped>
.register {
  width: 40%;
  margin-top: 15%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

</style>
