<template>
  <div class="register">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="手机号码" prop="telephone">
        <el-input v-model="form.telephone" placeholder="您的手机号码" clearable></el-input>
      </el-form-item>
      <el-form-item label="设置密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="建议至少使用两种字符组合" clearable></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input v-model="form.repassword" type="password" placeholder="请再次输入密码" clearable></el-input>
      </el-form-item>
      <el-form-item class="picker" label="" prop="protocol">
        <el-checkbox v-model="form.protocol" label="阅读并同意">
          <a href="#">《用户注册协议》</a>
          <a href="#">《隐私政策》</a>
        </el-checkbox>
      </el-form-item>
      <el-button type="primary" @click="submitForm('form')">立即注册</el-button>
      <el-button @click="resetForm('form')">取消</el-button>
      <br>
      <br>
      <el-button type="success" @click="goLogin">已有账号，去登录</el-button>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  name: 'register-form',
  props: ['form', 'url'],
  data() {
    var repass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      rules: {
        telephone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 20, message: '请输入6-20位密码', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { validator: repass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      console.log(formName)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.protocol === true) {
            //alert('Validation passed')
            this.onSubmit()
          } else {
            this.$message('请阅读协议并同意');
          }
        } else {
          this.$message('密码错误');
          return false
        }
      })
    },
    onSubmit() {
      const data = {}
      if (this.url.includes('nh')) {
        data.nhTelephone = this.form.telephone
        data.nhPassword = this.form.password
        data.rePassword = this.form.repassword
      } else if (this.url.includes('mj')) {
        data.mjTelephone = this.form.telephone
        data.mjPassword = this.form.password
        data.rePassword = this.form.repassword
      }
      this.$axios({
          method: 'post',
          url: this.url,
          data: qs.stringify(data)
        })
        .then(res => {
          //this.$store.commit('login', data.nhTelephone)
          this.$message({ message: '注册成功', type: 'success' })
          this.goLogin()
        })
        .catch(err => {})
    },
    goLogin() {
      if (this.url.includes('nh')) {
        this.$router.push({ name: 'FarmerLogin' })
      } else if (this.url.includes('mj')) {
        this.$router.push({ name: 'MjLogin' })
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
