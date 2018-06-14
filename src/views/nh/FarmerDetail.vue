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
      <el-form-item class="picker" label="地区" prop="area" :rules="[{required: true, message: '地区不能为空', trigger: 'blur'}]">
        <v-distpicker :province="FarmerDetailForm.province" :city="FarmerDetailForm.city" :area="FarmerDetailForm.area" :area_code="FarmerDetailForm.area_code" ref="location" @selected="onSelected" :placeholders="FarmerDetailForm.placeholders"></v-distpicker>
      </el-form-item>
      <el-form-item v-for="(field, index) in FarmerDetailForm.more" :label="field.comment" :key="index" :prop="'more.'+index+'.value'" :rules="[{required:true, message: field.comment+'为必填项', trigger: 'blur'}]">
        <el-input :type="field.type" v-model="field.value" :placeholder="field.sample"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('FarmerDetailForm')">保存</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
import VDistpicker from 'v-distpicker'
export default {
  name: 'FarmerDetail',
  data() {
    return {
      FarmerDetailForm: {
        province: '浙江省',
        city: '杭州市',
        area: '西湖区',
        area_code: '330106',
        name: '',
        sex: '男',
        more: [
          { comment: '籍贯', name: 'Origin', value: '' },
          { comment: '民族', name: 'Nation', value: '' },
          { comment: '身份证', name: 'IdCard', value: '' },
          { comment: '政治面貌', name: 'Politics', value: '' },
          { comment: '供货单位地址', name: 'GhdwAddress', value: '' },
          //{ comment: '供货地区编码', name: 'GhdwAreaCode', value: '' },
          { comment: '供货单位联系方式', name: 'GhdwPhone', value: '', sample: '座机或手机' }
        ]
      }
    }
  },
  components: { VDistpicker },
  created() {
    this.init()
  },
  methods: {
    init() {
      let form = this.FarmerDetailForm
      this.$axios({
          method: 'get',
          url: 'http://localhost:8080/nh/get_nh_detail'
        })
        .then(res => {
          const list = res
          form.name = list['nhRealName']
          form.sex = list['nhSex']
          form.province = list['nameP']
          form.city = list['nameC']
          form.area = list['nameA']
          form.area_code = list['nhGhdwAreaCode']
          let more = form.more
          for (let i = 0; i < more.length; i++) {
            more[i].value = list['nh' + more[i].name]
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    onSelected(data) {
      this.FarmerDetailForm.province = data.province.value
      this.FarmerDetailForm.city = data.city.value
      this.FarmerDetailForm.area = data.area.value
      this.FarmerDetailForm.area_code = data.area.code
      //this.$message(this.FarmerDetailForm.area)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 是否确认更新资料的消息弹框
          this.$confirm('确认更新个人资料?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(() => {
            this.onSubmit()
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消更新'
            });
          });
        } else {
          this.$message('请务必完整填写带*号的必填项')
          return false
        }
      })
    },
    onSubmit() {
      const data = {
        nhRealName: this.FarmerDetailForm.name,
        nhSex: this.FarmerDetailForm.sex,
        nhGhdwAreaCode: this.FarmerDetailForm.area_code
      }
      const m = this.FarmerDetailForm.more
      for (var i = 0; i < m.length; i++) {
        data['nh' + m[i].name] = m[i].value
      }
      // console.log(data) //查看更新个人资料后post的数据
      this.$axios({
          method: 'post',
          url: 'http://localhost:8080/nh/add_nh_detail',
          data: qs.stringify(data)
        })
        .then(res => {
          this.$message({ message: '更新农户个人资料成功', type: 'success' })
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          this.$message(err)
        })
    },
    goBack() {
      this.$router.back()
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
