import qs from 'qs'
import md5 from 'js-md5'
import request from '@/utils/request'

export function nhLogin(telephone, password) {
  const salt = "z0fdf7f8g9o1"
  const pass = md5(("" + salt.charAt(0) + salt.charAt(2) + password + salt.charAt(5) + salt))
  const data = {}
  data.nhTelephone = telephone
  data.nhPassword = pass
  //console.log(data)
  return request({
    url: '/nh/nh_login',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function nhRegister(telephone, password, repassword) {
  const data = {}
  data.nhTelephone = telephone
  data.nhPassword = password
  data.rePassword = repassword
  return request({
    url: '/nh/nh_register',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function nhGetDetail(/* token */) {  // get方法?? 后端获取农户信息bug
  return request({
    url: '/nh/get_nh_detail',
    method: 'get',
    /*params: {token} */
  })
}

export function nhAddDetail(detailObj) {
  return request({
    url: '/nh/add_nh_detail',
    method: 'post',
    data: qs.stringify(detailObj)
  })
}
