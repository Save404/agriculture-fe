<template>
  <div id="gov-login">
    <h1 class="gov-header">政府人员登录</h1>
    <login-for-gov :form="govLoginForm" :url="url"></login-for-gov>
  </div>
</template>
<script>
import LoginForGov from './components/LoginForGov'
export default {
  name: 'GovLogin',
  components: { LoginForGov },
  data () {
    return {
      url: '/gov/login',
      govLoginForm: {
        account: '',
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
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.gov-header {
  position: absolute;
  padding: 50px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
