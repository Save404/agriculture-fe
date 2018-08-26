<template>
  <div id="farmer-register">
    <register-header :role="'农户'"/>
    <register :form="FarmerRegisterForm" :url="url"></register>
  </div>
</template>
<script>
import Register from './components/Register'
import RegisterHeader from './components/RegisterHeader'
export default {
  name: 'FarmerRegister',
  components: { Register, RegisterHeader },
  data () {
    return {
      FarmerRegisterForm: {
        telephone: '',
        password: '',
        repassword: '',
        protocol: false
      },
      url: '/nh/nh_register'
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
