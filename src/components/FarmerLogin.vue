<template>
  <div id="farmer-login">
    <el-form :model="FarmerLoginForm" :rules="rules" ref="FarmerLoginForm" label-width="80px">
      <el-form-item label="手机号码" prop="telephone">
        <el-input v-model="FarmerLoginForm.telephone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input type="password" v-model="FarmerLoginForm.password" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('FarmerLoginForm')">立即登录</el-button>
      <el-button @click="resetForm('FarmerLoginForm')">取消</el-button>
      <br>
      <br>
      <el-button type="success" @click="goRegister">无账号，去注册</el-button>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
import md5 from 'js-md5'
export default {
  name: 'FarmerLogin',
  data() {
    return {
      FarmerLoginForm: {
        telephone: '',
        password: ''
      },
      rules: {
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 20, message: '请输入6-20位密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('Validation passed')
          this.onSubmit()
        } else {
          alert('Invalid!')
          return false
        }
      })
    },
    onSubmit() {
      axios({
          method: 'post',
          url: 'http://localhost:8080/login//nh_login',
          data: {
            nhTelephone: this.FarmerLoginForm.telephone,
            nhPassword: md5(this.FarmerLoginForm.password)
          }
        })
        .then(function(response) {
          if (response.status === 200) {
            alert('Axios Succeed!')
            console.log(response)
          }
        })
        .catch(function(error) {
          alert('Axios Failed')
          console.log(error)
        })
    },
    goRegister() {
      this.$router.push({ name: 'FarmerRegister' })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style scoped>
#farmer-login {
  margin-top: 15%;
  margin-right: 25%;
  margin-left: 25%;
}

div el-form-item:after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  width: 0;
  visibility: hidden;
}

</style>
