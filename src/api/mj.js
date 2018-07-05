import qs from 'qs'
import md5 from 'js-md5'
import request from '@/utils/request'

export function mjLogin(telephone, password) {
  const salt = "z0fdf7f8g9o1"
  const pass = md5(("" + salt.charAt(0) + salt.charAt(2) + password + salt.charAt(5) + salt))
  const data = {}
  data.mjTelephone = telephone
  data.mjPassword = pass
  //console.log(data)
  return request({
    url: '/mj/mj_login',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mjRegister(telephone, password, repassword) {
  const data = {}
  data.mjTelephone = telephone
  data.mjPassword = password
  data.rePassword = repassword
  return request({
    url: '/mj/mj_register',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function mjGetDetail(/* token */) {  // get方法?? 后端获取买家信息bug?
  return request({
    url: '/mj/get_mj_detail',
    method: 'get',
    /*params: {token} */
  })
}

export function mjAddDetail(detailObj) {
  return request({
    url: '/mj/add_mj_detail',
    method: 'post',
    data: qs.stringify(detailObj)
  })
}

export function mjLogout() {
  return new Promise(resolve => {resolve()})
}

/*
export function mjGetInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
*/