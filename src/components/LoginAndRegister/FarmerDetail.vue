<template>
  <div id="farmer-detail">
    <h1>农户详细信息</h1>
    <el-form :model="FarmerDetailForm" ref="FarmerDetailForm" label-width="140px">
      <el-form-item class="picker" label="姓名" prop="name" :rules="[{required: true,message:'姓名不能为空',trigger:'blur'}]">
        <el-input v-model="FarmerDetailForm.name" placeholder="真实姓名" style="width:120px;"></el-input>
        <span style="margin: 0 10px 0 40px;">性别</span>
        <el-radio-group v-model="FarmerDetailForm.sex">
          <el-radio border label="男"></el-radio>
          <el-radio border label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-for="(field, index) in FarmerDetailForm.more" :label="field.comment" :key="index" :prop="'more.'+index+'.value'" :rules="[{required:true, message: field.comment+'为必填项', trigger: 'blur'}]">
        <el-input :type="field.type" v-model="field.value" :placeholder="field.sample"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('FarmerDetailForm')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data() {
    return {
      FarmerDetailForm: {
        name: '',
        sex: '男',
        more: [
          { comment: '籍贯', name: 'Origin', value: '' },
          { comment: '民族', name: 'Nation', value: '' },
          { comment: '身份证', name: 'IdCard', value: '' },
          { comment: '政治面貌', name: 'Politics', value: '' },
          { comment: '供货单位地址', name: 'GhdwAddress', value: '' },
          { comment: '供货地区编码', name: 'GhdwAreaCode', value: '' },
          { comment: '供货单位联系方式', name: 'GhdwPhone', value: '', sample: '座机或手机' },
          { comment: '支付密码', name: 'PayPassword', value: '', type: 'password' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onSubmit()
        } else {
          this.$message('请务必完整填写带*号的必填项')
          return false
        }
      })
    },
    onSubmit() {
      const data = {
        nhRealName: this.FarmerDetailForm.name,
        nhSex: this.FarmerDetailForm.sex
      }
      const m = this.FarmerDetailForm.more
      for (var i = 0; i < m.length; i++) {
        data['nh' + m[i].name] = m[i].value
      }
      console.log(data)
      let router = this.$router
      let message = this.$message
      this.$axios({
          method: 'post',
          url: 'http://localhost:8080/nh/add_nh_detail',
          data: qs.stringify(data)
        })
        .then(function(response) {
          console.log(response)
          if (response.data.code === 0) {
            message('更新农户个人资料成功')
            router.push({name: 'Home'})
          } else {
            message(response.data.msg)
          }
        })
        .catch(function(error) {
          message(error)
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style scoped>
.el-form {
  position: absolute;
  width: 500px;
  left: 50%;
  transform: translateX(-60%);
}

</style>
