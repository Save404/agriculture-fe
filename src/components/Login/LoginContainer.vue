<template>
  <div class="login">
    <el-form :model="form" ref="form" :rules="rules" label-width="80px">
      <el-form-item label="手机号码" prop="telephone">
        <el-input v-model="form.telephone" placeholder="请输入11位手机号码"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">立即登录</el-button>
      <el-button @click="resetForm('form')">取消</el-button>
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
import { nhLogin } from '@/api/nh'
import { mjLogin } from '@/api/mj'
export default {
  name: 'LoginContainer',
  props: ['form', 'url'],
  data() {
    return {
      salt: "z0fdf7f8g9o1",
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
        if (valid) { // 如果规则校验通过就进行下一步登录
          //this.$message('Validation passed') 
          this.onSubmit()
        } else {
          this.$message('请检查手机号码或密码格式');
          return false
        }
      })
    },
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (!valid) {
          this.loading = true
          this.$store.dispatch('Login', this.form).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onSubmit() {
      //const password = md5(("" + this.salt.charAt(0) + this.salt.charAt(2) + this.form.password + this.salt.charAt(5) + this.salt))
      //const data = {}
      //const user = {}
      if (this.url.includes('nh')) {
        this.loading = true
        this.$store.dispatch('NhLogin', this.form).then(() => {
          this.loading = false
          this.$router.push({ path: '/' })
        }).catch(() => {
          this.loading = false
        })/*
        nhLogin(this.form.telephone, this.form.password)
        data.nhTelephone = this.form.telephone
        data.nhPassword = password
        user.type = 'nh'*/
      } else if (this.url.includes('mj')) {
        this.loading = true
        this.$store.dispatch('MjLogin', this.form).then(() => {
          this.loading = false
          this.$router.push({ path: '/' })
        }).catch(() => {
          this.loading = false
        })
        /*
        data.mjTelephone = this.form.telephone
        data.mjPassword = password
        user.type = 'mj'*/
      }
      user.user = this.form.telephone
      this.$axios({
          method: 'post',
          url: this.url,
          data: qs.stringify(data)
        })
        .then(res => {
          this.$store.commit('login', user)
          this.$message({ message: '登录成功', type: 'success' })
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {})
    },
    resetPassword() {
      this.$message('重置密码！！')
    },
    goRegister() {
      if (this.url.includes('nh')) {
        this.$router.push({ name: 'FarmerRegister' })
      } else {
        this.$router.push({ name: 'MjRegister' })
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style scoped>
.el-form-item {
  transform: translateX(-40px);
}

</style>
