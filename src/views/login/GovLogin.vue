<template>
  <div id="gov-login">
    <login-container :form="GovLoginForm" :url="url"></login-container>
  </div>
</template>
<script>
import LoginContainer from './components/LoginContainer'
export default {
  name: 'GovLogin',
  components: { LoginContainer },
  data() {
    return {
      url: '/gov/login',
      GovLoginForm: {
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
