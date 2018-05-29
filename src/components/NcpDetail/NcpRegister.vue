<template>
  <div id="ncp-register">
    <h1>农产品发布</h1>
    <el-form :model="NcpRegisterForm" ref="NcpRegisterForm" label-width="120px">
      <el-form-item label="产品名称" prop="name_code" :rules="[{required: true,message:'产品名称不能为空',trigger:'blur'}]">
          <ncp-name @got="setName" :msg="msg"></ncp-name>
      </el-form-item>
      <el-form-item v-for="(field, index) in NcpRegisterForm.fields" :label="field.comment" :key="field.name" :prop="'fields.'+index+'.value'" :rules="field.rule">
        <el-input v-model="field.value" :placeholder=field.sample style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item class="picker" label="地区" prop="area" :rules="[{required: true, message: '地区不能为空', trigger: 'blur'}]">
          <v-distpicker :province="NcpRegisterForm.province" :city="NcpRegisterForm.city" :area="NcpRegisterForm.area" :area_code="NcpRegisterForm.area_code" ref="location" @selected="onSelected" :placeholders="NcpRegisterForm.placeholders"></v-distpicker>
      </el-form-item>
      <el-form-item class="picker" label="详细地址" prop="address" :rules="[{required: true, message: '详细地址不能为空', trigger: 'blur'}]">
          <el-input type='textarea' v-model="NcpRegisterForm.address" placeholder="详细地址"></el-input>
      </el-form-item>
      <el-form-item label="更多详细信息" style="font-weight: bold;">
        <hr>
        <hr>
        <hr>
      </el-form-item>
      <el-form-item v-for="(field, index) in NcpRegisterForm.more" :label="field.comment" :key="field.name" :prop="'more.'+index+'.value'">
        <el-input type='textarea' v-model="field.value" :placeholder=field.sample style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item class="picker" label="品质认证">
        <el-select v-model="NcpRegisterForm.qvalue">
          <el-option v-for="item in NcpRegisterForm.qualities" :key="item.value" :value="item.value" :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品供应期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="起始日期" v-model="NcpRegisterForm.perieds" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="截止日期" v-model="NcpRegisterForm.periede" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('NcpRegisterForm')">立即发布</el-button>
        <el-button @click="resetForm('NcpRegisterForm')">重置</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'
import VDistpicker from 'v-distpicker'
import NcpName from './NcpName'
export default {
  name: 'NcpRegister',
  components: {VDistpicker, NcpName},
  data() {
    return {
      msg: '',
      NcpRegisterForm: {
        name_code: '',
        province: '浙江省', 
        city: '杭州市', 
        area: '西湖区',
        area_code: '330106',
        address: '',
        perieds: '',
        periede: '',
        placeholders: {
            province: '----------- 省 ------------',
            city: '------- 市 -------',
            area: '------- 区 -------',
        },
        fields: [
          { comment: '产品特质', name: 'Feature', value: '', rule: [{required: true, message: '产品特质不能为空', trigger: 'blur'}] },
          { comment: '产品品牌', name: 'Brand', value: ''},
          { comment: '年产量', name: 'AnnualOutput', value: '', sample: '如:苹果300吨' },
          { comment: '可供应量', name: 'SupplyAmount', value: '', sample: '如：苹果300吨' },
          { comment: '参考价格', name: 'ReferencePrice', value: '', sample: '如：几元/几千克' },
        ],
        more: [
          { comment: '详情介绍', name: 'Detail', value: '' },
          { comment: '包装方式', name: 'Package', value: '' },
          { comment: '存储物流情况', name: 'DeliveryInfo', value: '', sample: '县域内运输，县域内仓储，县域内包装／从县到大城市的远程运输／全国运输等等（请如实填写)' },
          { comment: '生产过程', name: 'GrowthInfo', value: '', sample: '如：种子、机械、化肥、农药、如何控制农药残留等，请尽量详细填写' },
          { comment: '产品生长环境', name: 'GrowthSurrounding', value: '' },
          { comment: '产品种植面积', name: 'PlantArea', value: '', sample: '如:苹果300亩' },
          { comment: '批量出仓价格', name: 'BatchPrice', value: '', sample: '如：出仓100斤，xx元' },
          { comment: '仓储物流能力', name: 'DeliveryAbility', value: '' },
          { comment: '起送量', name: 'MinCount', value: '' },
          { comment: '批量物流成本', name: 'DeliveryCost', value: '' },
        ],
        qualities: [
          { label: '绿色食品认证', value: '1' },
          { label: '有机食品认证', value: '2' },
          { label: '无公害农产品认证', value: '3' },
          { label: '国家地理标志认证', value: '4' },
          { label: '其它', value: '5' }
        ],
        qvalue: '5'
      }
    }
  },
  methods: {
    setName(msg) {
      this.NcpRegisterForm.name_code = msg
      console.log('fa got '+ msg)
    },
    onSelected(data) {
      this.NcpRegisterForm.province = data.province.value
      this.NcpRegisterForm.city = data.city.value
      this.NcpRegisterForm.area = data.area.value
      this.NcpRegisterForm.area_code = data.area.code
      this.$message(this.NcpRegisterForm.area)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.NcpRegisterForm.area === this.NcpRegisterForm.placeholders.area) {
            this.$message('请将地区选择完整')
          } else {
            this.onSubmit()
          }
        } else {
          this.$message('请务必完整填写带*号的必填项')
          return false
        }
      })
    },
    onSubmit() {
      const data = {
        ncpPCode: this.NcpRegisterForm.name_code,
        ncpAreaCode: this.NcpRegisterForm.area_code,
        ncpAddress: this.NcpRegisterForm.address,
        ncpQuality: this.NcpRegisterForm.qvalue,
        ncpSupplyPeriodStart: this.NcpRegisterForm.perieds,
        ncpSupplyPeriodEnd: this.NcpRegisterForm.periede
      }
      const f = this.NcpRegisterForm.fields
      for(var i = 0; i < f.length; i++) {
        data['ncp'+f[i].name] = f[i].value 
      }
      const m = this.NcpRegisterForm.more 
      for(var i = 0; i < m.length; i++) {
        data['ncp'+m[i].name] = m[i].value 
      }/*
      for(let prop in data) {
        console.log(prop + ':' + data[prop])
      }*/
      this.$axios({
          method: 'get',
          url: '/',
          data: qs.stringify(data)
        })
        .then(function(response) {
          if (response.status === 200) {
            alert('获取数据成功')
          }
        })
        .catch(function(error) {
          alert(error)
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  left: 50%;
  transform: translateX(-60%);
}

hr:nth-child(odd) {
  visibility: hidden;
}
</style>
