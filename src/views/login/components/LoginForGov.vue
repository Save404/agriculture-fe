<template>
  <div class="login-for-gov">
    <el-form :model="form" ref="govLoginForm" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    form: Object,
    url: String
  },
  data () {
    return {

    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('GovLogin', this.form)
        .then(() => {
          this.$router.push({ path: '/' })
        })
    }
  }
}

</script>
<style>
.login-for-gov {
  padding: 20% 30% 20% 30%;
}
</style>
