import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true
axios.defaults.headers['conten-type'] = 'application/x-www-form-urlencoded'

axios.interceptors.response.use(res => {
  console.log(res) //打印返回数据，便于调试
  if (res.data.code !== undefined) {
    if (res.data.code !== 0) {
      Message.error(res.data.msg)
      return Promise.reject(res.data.msg)
    } else {
      return res.data.data
    }
  } else {
    return res.data
  }
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axios
