<template>
  <div id="farmer-register">
    <register :form="FarmerRegisterForm" :url="url" />
    <bottom-footer/>
  </div>
</template>
<script>
import Register from '@/components/Register'
export default {
  name: 'FarmerRegister',
  components: { Register },
  data() {
    return {
      FarmerRegisterForm: {
        telephone: '',
        password: '',
        repassword: '',
        protocol: false
      },
      url: 'http://localhost:8080/nh/nh_register'
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
