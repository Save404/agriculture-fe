<template>
  <div id="ncp-single">
    <h1>农产品详情</h1>
    <el-form :model="NcpSingleForm" ref="NcpSingleForm" label-width="120px">
      <el-form-item label="产品名称" prop="name_code" :rules="[{required: true,message:'产品名称不能为空',trigger:'blur'}]">
        <ncp-name @got="setName" :msg="msg" :placeholders="NcpSingleForm.initName"></ncp-name>
      </el-form-item>
      <el-form-item class="picker" label="供应量" prop="SupplyAmount" :rules="[{required: true,message:'供应量不能为空',trigger:'blur'}]">
        <el-input v-model="NcpSingleForm.SupplyAmount" placeholder="" style="width:200px;"></el-input>
        <span style="margin: 0 10px 0 40px;">单位</span>
        <el-select v-model="NcpSingleForm.supplyUnit" placeholder="斤">
          <el-option v-for="item in unitsOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="picker" label="价格" prop="Price" :rules="[{required: true,message:'价格不能为空',trigger:'blur'}]">
        <el-input v-model="NcpSingleForm.Price" style="width:200px;"></el-input>
        <span style="margin: 0 10px 0 40px;">单位</span>
        <el-select v-model="NcpSingleForm.priceUnit">
          <el-option v-for="item in unitpOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-for="(field, index) in NcpSingleForm.fields" :label="field.comment" :key="field.name" :prop="'fields.'+index+'.value'" :rules="field.rule">
        <el-input v-model="field.value" :placeholder=field.sample style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item class="picker" label="地区" prop="area" :rules="[{required: true, message: '地区不能为空', trigger: 'blur'}]">
        <v-distpicker :province="NcpSingleForm.province" :city="NcpSingleForm.city" :area="NcpSingleForm.area" :area_code="NcpSingleForm.area_code" ref="location" @selected="onSelected" :placeholders="NcpSingleForm.placeholders"></v-distpicker>
      </el-form-item>
      <el-form-item class="picker" label="详细地址" prop="address" :rules="[{required: true, message: '详细地址不能为空', trigger: 'blur'}]">
        <el-input type='textarea' v-model="NcpSingleForm.address" placeholder="详细地址"></el-input>
      </el-form-item>
      <el-form-item label="更多详细信息" style="font-weight: bold;">
        <hr>
        <hr>
        <hr>
      </el-form-item>
      <el-form-item v-for="(field, index) in NcpSingleForm.more" :label="field.comment" :key="field.name" :prop="'more.'+index+'.value'">
        <el-input type='textarea' v-model="field.value" :placeholder=field.sample style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item class="picker" label="品质认证">
        <el-select v-model="NcpSingleForm.qvalue">
          <el-option v-for="item in NcpSingleForm.qualities" :key="item.value" :value="item.value" :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品供应期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="起始日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="NcpSingleForm.perieds" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="截止日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="NcpSingleForm.periede" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('NcpSingleForm')">保存</el-button>
        <el-button @click="resetForm('NcpSingleForm')">重置</el-button>
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
  name: 'NcpSingle',
  data() {
    return {
      id: '',
      msg: '',
      unitsOptions: [
        { value: '克', label: '克' },
        { value: '斤', label: '斤' },
        { value: '公斤', label: '公斤' },
        { value: '千克', label: '千克' },
        { value: '吨', label: '吨' },
      ],
      unitpOptions: [
        { value: '元/克', label: '元/克' },
        { value: '元/斤', label: '元/斤' },
        { value: '元/公斤', label: '元/公斤' },
        { value: '元/千克', label: '元/千克' },
        { value: '元/吨', label: '元/吨' },
      ],
      NcpSingleForm: {
        initName: {},
        name: '',
        name_code: '',
        province: '浙江省',
        city: '杭州市',
        area: '西湖区',
        area_code: '330106',
        address: '',
        SupplyAmount: '',
        supplyUnit: '斤',
        Price: '',
        priceUnit: '元/斤',
        perieds: '',
        periede: '',
        placeholders: {
          province: '----------- 省 ------------',
          city: '------- 市 -------',
          area: '------- 区 -------',
        },
        fields: [
          { comment: '产品特质', name: 'Feature', value: '', rule: [{ required: true, message: '产品特质不能为空', trigger: 'blur' }] },
          { comment: '产品品牌', name: 'Brand', value: '' },
          //{ comment: '年产量', name: 'AnnualOutput', value: '', sample: '如:苹果300吨' },
          //{ comment: '可供应量', name: 'SupplyAmount', value: '', sample: '如：苹果300吨' },
          //{ comment: '参考价格', name: 'ReferencePrice', value: '', sample: '如：几元/几千克' },
        ],
        more: [
          { comment: '详情介绍', name: 'Detail', value: '' },
          { comment: '包装方式', name: 'Package', value: '' },
          { comment: '存储物流情况', name: 'DeliveryInfo', value: '', sample: '县域内运输，县域内仓储，县域内包装／从县到大城市的远程运输／全国运输等等（请如实填写)' },
          { comment: '生产过程', name: 'GrowthInfo', value: '', sample: '如：种子、机械、化肥、农药、如何控制农药残留等，请尽量详细填写' },
          { comment: '产品生长环境', name: 'GrowthSurrounding', value: '' },
          { comment: '产品种植面积', name: 'PlantArea', value: '', sample: '如:苹果300亩' },
          //{ comment: '批量出仓价格', name: 'BatchPrice', value: '', sample: '如：出仓100斤，xx元' },
          { comment: '仓储物流能力', name: 'DeliveryAbility', value: '' },
          //{ comment: '起送量', name: 'MinCount', value: '' },
          //{ comment: '批量物流成本', name: 'DeliveryCost', value: '' },
        ],
        qualities: [
          { label: '绿色食品认证', value: '绿色食品认证' },
          { label: '有机食品认证', value: '有机食品认证' },
          { label: '无公害农产品认证', value: '无公害农产品认证' },
          { label: '国家地理标志认证', value: '国家地理标志认证' },
          { label: '其它', value: '其它' }
        ],
        qvalue: '其他'
      }
    }
  },
  components: { VDistpicker, NcpName },
  created() {
    let form = this.NcpSingleForm
    let link = 'http://localhost:8080/ncp/get_ncp/' + sessionStorage.ncpBasicId
    form.province = sessionStorage.p
    form.city = sessionStorage.c
    form.area = sessionStorage.a
    form.initName.first = sessionStorage.c1
    form.initName.second = sessionStorage.c2
    form.initName.third = sessionStorage.c3
    form.initName.last = sessionStorage.c4
    //console.log(form.initName)
    this.$axios({
        method: 'get',
        url: link,
      })
      .then(res => {
        form.address = res['ncpAddress']
        form.area_code = res['ncpAreaCode']
        form.fields[1].value = res['ncpBrand']
        form.more[6].value = res['ncpDeliveryAbility']
        form.more[2].value = res['ncpDeliveryInfo']
        form.more[0].value = res['ncpDetail']
        form.fields[0].value = res['ncpFeature']
        form.more[3].value = res['ncpGrowthInfo']
        form.more[4].value = res['ncpGrowthSurrounding']
        form.name = res['ncpName']
        form.name_code = res['ncpPCode']
        form.more[1].value = res['ncpPackage']
        form.more[5].value = res['ncpPlantArea']
        form.qvalue = res['ncpQuality']
        form.SupplyAmount = res['ncpSupplyAmount']
        form.supplyUnit = res['supplyUnit']
        form.perieds = res['ncpSupplyPeriodStart']
        form.periede = res['ncpSupplyPeriodEnd']

        form.SupplyAmount = res['ncpSupplyAmount']
        form.supplyUnit = res['supplyUnit']
        form.Price = res['ncpPrice']
        form.priceUnit = res['priceUnit']
      })
      .catch(err => {
        alert(err)
      })
    //console.log(form)
  },
  methods: {
    setName(msg) {
      this.NcpSingleForm.name = msg.name
      this.NcpSingleForm.name_code = msg.code
    },
    onSelected(data) {
      this.NcpSingleForm.province = data.province.value
      this.NcpSingleForm.city = data.city.value
      this.NcpSingleForm.area = data.area.value
      this.NcpSingleForm.area_code = data.area.code
      this.$message(this.NcpSingleForm.area)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.NcpSingleForm.area === this.NcpSingleForm.placeholders.area) {
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
      console.log(this.id)
      const data = {
        ncpName: this.NcpSingleForm.name,
        ncpPCode: this.NcpSingleForm.name_code,
        ncpAreaCode: this.NcpSingleForm.area_code,
        ncpAddress: this.NcpSingleForm.address,
        ncpQuality: this.NcpSingleForm.qvalue,
        ncpSupplyPeriodStart: this.NcpSingleForm.perieds,
        ncpSupplyPeriodEnd: this.NcpSingleForm.periede,
        ncpSupplyAmount: this.NcpSingleForm.SupplyAmount,
        supplyUnit: this.NcpSingleForm.supplyUnit,
        ncpPrice: this.NcpSingleForm.Price,
        priceUnit: this.NcpSingleForm.priceUnit
      }
      const f = this.NcpSingleForm.fields
      for (var i = 0; i < f.length; i++) {
        data['ncp' + f[i].name] = f[i].value
      }
      const m = this.NcpSingleForm.more
      for (var i = 0; i < m.length; i++) {
        data['ncp' + m[i].name] = m[i].value
      }
      const link = 'http://localhost:8080/ncp/modify_ncp/' + sessionStorage.ncpBasicId
      //console.log(link)
      this.$axios({
          method: 'post',
          url: link,
          data: qs.stringify(data)
        })
        .then(res => {
          this.$message({ message: '更新成功', type: 'success' })
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {})
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
