<template>
  <div id="farmer-login">
    <trans-header></trans-header>
    <login-container :form="FarmerLoginForm" :url="url"></login-container>
  </div>
</template>
<script>
import TransHeader from './components/TransHeader'
import LoginContainer from './components/LoginContainer'
export default {
  name: 'FarmerLogin',
  components: { TransHeader, LoginContainer },
  data () {
    return {
      url: '/nh/nh_login',
      FarmerLoginForm: {
        telephone: '',
        password: ''
      }
    }
  }
}

</script>
<style scoped>
* {
  text-align: center;
}

.login-form {
  height: 100%;
  width: 100%;
}

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
