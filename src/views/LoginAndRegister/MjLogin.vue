<template>
  <div id="Mj-login">
    <trans-header/>
    <login :form="MjLoginForm" :url="url" />
    <bottom-footer/>
  </div>
</template>
<script>
import TransHeader from './TransHeader'
import Login from '@/components/Login'
export default {
  name: 'MjLogin',
  components: { TransHeader, Login },
  data() {
    return {
      url: 'http://localhost:8080/mj/mj_login',
      MjLoginForm: {
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
