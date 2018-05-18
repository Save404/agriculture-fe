<template>
  <div id="farmer-register">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="手机号码">
          <el-input v-model="form.telephone" minlength="11" maxlength="11" placeholder="您的手机号码" clearable></el-input>
      </el-form-item>
      <div class="tips"></div>
      <el-form-item label="设置密码">
          <el-input v-model="form.password" minlenth="6" maxlength="20" type="password" placeholder="建议至少使用两种字符组合" clearable></el-input>
      </el-form-item>
      <div class="tips"></div>
      <el-form-item label="确认密码">
          <el-input v-model="form.repassword" minlenth="6" maxlength="20" type="password" placeholder="请再次输入密码" clearable></el-input>
      </el-form-item>
      <div class="tips"></div>
      <el-button type="primary" @click="onSubmit">注册</el-button>
      <el-button @click="">取消</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FarmerRegister',
  data() {
    return {
      form: {
        telephone: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    onSubmit() {
      axios({
        method: 'get',
        url: '/',
        data: {
          nhTelephone: this.telephone,
          nhPassword: this.password,
          rePassword: this.rePassword
        }
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log('Succeed!')
          console.log(response)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
#farmer-register {
  margin-top: 15%;
  margin-right: 25%;
  margin-left: 25%;
}
</style>