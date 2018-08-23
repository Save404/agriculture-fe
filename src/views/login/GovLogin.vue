<template>
  <div id="gov-login">
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
