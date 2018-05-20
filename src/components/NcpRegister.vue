<template>
  <div id="ncp-register">
    <h1>农产品发布</h1>
    <el-form :model="NcpRegisterForm" ref="NcpRegisterForm" label-width="120px">
      <el-form-item 
        v-for="(field, index) in NcpRegisterForm.fields" 
        :label="field.comment"
        :key="field.name"
        :prop="'fields.'+index+'.value'"
        :rules="{required: true, message: field.comment+'不能为空', trigger: 'blur'}"
      >
        <el-input v-model="field.value" :placeholder=field.sample style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="NcpRegisterForm.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="NcpRegisterForm.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="更多详细信息" style="font-weight: bold;">
        <hr><hr><hr>
      </el-form-item>
      
      <el-form-item 
        v-for="(field, index) in NcpRegisterForm.more" 
        :label="field.comment"
        :key="field.name"
        :prop="'more.'+index+'.value'"
      >
        <el-input type='textarea' v-model="field.value" :placeholder=field.sample style="width: 100%;"></el-input>
      </el-form-item>
      <el-form-item label="品质认证">
        <el-select v-model="NcpRegisterForm.qvalue">
          <el-option v-for="item in NcpRegisterForm.qualities" :key="item.value" :value="item.value" :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'NcpRegister',
  data() {
    return {
      NcpRegisterForm: {
        date1: '',
        date2: '',
        fields: [
          {comment: '名称', name: 'name', value: ''},
          {comment: '种类编号', name: 'code', value: ''},
          {comment: '地区', name: 'area_code', value: ''},
          {comment: '详细地址', name: 'address', value: ''},
          {comment: '产品特质', name: 'feature', value: ''},
          {comment: '年产量', name: 'output', value: '', sample: '如:苹果300吨'},
          {comment: '可供应量', name: 'amount', value: '', sample: '如：苹果300吨'},
          {comment: '参考价格', name: 'reference_price', value: '', sample: '如：几元/几千克'},
        ],
        more: [
          {comment: '详情介绍', name: 'detail', value: ''},
          {comment: '包装方式', name: 'package', value: ''},
          {comment: '存储物流情况', name: 'delivery_info', value: '', sample: '县域内运输，县域内仓储，县域内包装／从县到大城市的远程运输／全国运输等等（请如实填写)'},
          {comment: '生产过程', name: 'growth_info', value: '', sample: '如：种子、机械、化肥、农药、如何控制农药残留等，请尽量详细填写'},
          {comment: '产品生长环境', name: 'growth_surrounding', value: ''},
          {comment: '产品种植面积', name: 'plant_area', value: '', sample: '如:苹果300亩'},
          {comment: '批量出仓价格', name: 'batch_price', value: '', sample: '如：出仓100斤，xx元'},
          {comment: '产品供应期', name: 'supply_peried', value: '', sample: '几月份—几月份'},
          {comment: '仓储物流能力', name: 'delivery_ability', value: ''},
          {comment: '起送量', name: 'min_count', value: ''},
          {comment: '批量物流成本', name: 'delivery_cost', value: ''},
        ],
        qualities: [
          {label: '绿色食品认证', value: '1'},
          {label: '有机食品认证', value: '2'},
          {label: '无公害农产品认证', value: '3'},
          {label: '国家地理标志认证', value: '4'},
          {label: '其它', value: '5'}
        ],
        qvalue: ''
      }
    }
  },
  methods: {
    onSubmit() {

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