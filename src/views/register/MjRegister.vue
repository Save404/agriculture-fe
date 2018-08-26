<template>
  <div id="Mj-register">
    <register-header :role="'买家'"/>
    <register :form="MjRegisterForm" :url="url"></register>
  </div>
</template>
<script>
import Register from './components/Register'
import RegisterHeader from './components/RegisterHeader'
export default {
  name: 'MjRegister',
  components: { Register, RegisterHeader },
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
