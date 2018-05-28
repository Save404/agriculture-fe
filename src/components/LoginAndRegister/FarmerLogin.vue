<template>
  <div id="farmer-login">
    <el-form :model="FarmerLoginForm" :rules="rules" ref="FarmerLoginForm" label-width="80px">
      <el-form-item label="手机号码" prop="telephone">
        <el-input v-model="FarmerLoginForm.telephone" placeholder="请输入11位手机号码"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input type="password" v-model="FarmerLoginForm.password" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('FarmerLoginForm')">立即登录</el-button>
      <el-button @click="resetForm('FarmerLoginForm')">取消</el-button>
      <br>
      <br>
      <el-button type="info" @click="resetPassword">忘记密码</el-button>
      <el-button type="success" @click="goRegister">无账号，去注册</el-button>
    </el-form>
  </div>
</template>
<script>
import md5 from 'js-md5'
import qs from 'qs'
export default {
  name: 'FarmerLogin',
  data() {
    return {
      salt: "z0fdf7f8g9o1",
      FarmerLoginForm: {
        telephone: '',
        password: ''
      },
      rules: {
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur' }
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
          //this.$message('Validation passed')
          this.onSubmit()
        } else {
          this.$message('密码错误');
          return false
        }
      })
    },
    onSubmit() {
      let password = md5(("" + this.salt.charAt(0) + this.salt.charAt(2) + this.FarmerLoginForm.password + this.salt.charAt(5) + this.salt))
      const data = {
        'nhTelephone': this.FarmerLoginForm.telephone,
        'nhPassword': password
      }
      let router = this.$router
      let store = this.$store
      let message = this.$message
      this.$axios({
          method: 'post',
          url: 'http://localhost:8080/nh/nh_login',
          data: qs.stringify(data)
        })
        .then(function(response) {
          if (response.status === 200) {
            //message('Axios Succeed!')
            console.log(response)
            if(response.data.code === 0) {
              store.commit('login', data.nhTelephone)
              message('登录成功')
              router.push({ name: 'Home' })
            } else {
              message(response.data.msg)
            }
          }
        })
        .catch(function(error) {
          message('Axios Failed')
          console.log(error)
        })
    },
    resetPassword() {
      this.$message('重置密码！！')
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
  width: 40%;
  margin-top: 15%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

el-form-item {
  transform: translateX(-100px); 
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
