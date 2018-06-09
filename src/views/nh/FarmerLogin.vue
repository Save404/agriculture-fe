<template>
  <div id="farmer-login">
    <trans-header/>
    <login :form="FarmerLoginForm" :url="url" />
    <bottom-footer/>
  </div>
</template>
<script>
import TransHeader from '@/components/TransHeader'
import Login from '@/components/Login'
export default {
  name: 'FarmerLogin',
  components: { TransHeader, Login },
  data() {
    return {
      url: 'http://localhost:8080/nh/nh_login',
      FarmerLoginForm: {
        telephone: '',
        password: ''
      }
    }
  }
}

</script>
<style scoped>
.login {
  width: 40%;
  margin-top: 70px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.trans-header {
  position: relative;
  padding-top: 70px;
}

</style>
