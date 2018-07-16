<template>
  <div id="mj-detail">
    <el-form :model="MjDetailForm" ref="MjDetailForm" label-width="140px">
      <el-form-item class="picker" label="姓名" prop="name" :rules="[{required: true,message:'姓名不能为空',trigger:'blur'}]">
        <el-input v-model="MjDetailForm.name" placeholder="真实姓名" style="width:120px;"></el-input>
        <span style="margin: 0 10px 0 40px;">性别</span>
        <el-radio-group v-model="MjDetailForm.sex">
          <el-radio border label="男"></el-radio>
          <el-radio border label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="picker" label="地区" prop="area" :rules="[{required: true, message: '地区不能为空', trigger: 'blur'}]">
        <v-distpicker :province="MjDetailForm.province" :city="MjDetailForm.city" :area="MjDetailForm.area" :area_code="MjDetailForm.area_code" ref="location" @selected="onSelected" :placeholders="MjDetailForm.placeholders"></v-distpicker>
      </el-form-item>
      <el-form-item v-for="(field, index) in MjDetailForm.more" :label="field.comment" :key="index" :prop="'more.'+index+'.value'" :rules="[{required:true, message: field.comment+'为必填项', trigger: 'blur'}]">
        <el-input :type="field.type" v-model="field.value" :placeholder="field.sample"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('MjDetailForm')">保存</el-button>
        <el-button @click="goBack">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import { mjGetDetail, mjAddDetail } from '@/api/mj'
export default {
  name: 'MjDetail',
  data() {
    return {
      MjDetailForm: {
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
      let form = this.MjDetailForm
      mjGetDetail()
        .then(res => {
          if (res !== null) {
            const list = res
            //console.log(list) //created钩子请求后返回的数据
            form.name = list['mjRealName']
            form.sex = list['mjSex']
            form.province = list['nameP']
            form.city = list['nameC']
            form.area = list['nameA']
            form.area_code = list['mjACode']
            let more = form.more
            for (let i = 0; i < more.length; i++) {
              more[i].value = list['mj' + more[i].name]
            }
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    onSelected(data) {
      this.MjDetailForm.province = data.province.value
      this.MjDetailForm.city = data.city.value
      this.MjDetailForm.area = data.area.value
      this.MjDetailForm.area_code = data.area.code
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
        mjRealName: this.MjDetailForm.name,
        mjSex: this.MjDetailForm.sex,
        mjACode: this.MjDetailForm.area_code
      }
      const m = this.MjDetailForm.more
      for (var i = 0; i < m.length; i++) {
        data['mj' + m[i].name] = m[i].value
      }
      //console.log(data) //查看更新个人资料后post的数据
      mjAddDetail(data)
        .then(res => {
          this.$message({ message: '更新买家个人资料成功', type: 'success' })
          //this.$router.push({ name: 'Home' })
        })
        .catch(err => {})
    },
    goBack() {
      this.$router.back()
    }
  }
}

</script>
<style scoped>
#mj-detail {
  padding-top: 5%;
}
.el-form {
  position: absolute;
  width: 700px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
