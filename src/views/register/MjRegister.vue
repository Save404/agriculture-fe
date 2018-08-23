<template>
  <div id="Mj-register">
    <register :form="MjRegisterForm" :url="url"></register>
  </div>
</template>
<script>
import Register from './components/Register'
export default {
  name: 'MjRegister',
  components: { Register },
  data () {
    return {
      MjRegisterForm: {
        telephone: '',
        password: '',
        repassword: '',
        protocol: false
      },
      url: '/mj/mj_register'
    }
  }
}

</script>
<style scoped>
* {
  text-align: center;
}
.register {
  width: 40%;
  margin-top: 13%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

</style>
