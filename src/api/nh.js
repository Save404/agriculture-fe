import qs from 'qs'
import md5 from 'js-md5'
import request from '@/utils/request'

export function nhLogin(username, password) {
  const salt = "z0fdf7f8g9o1"
  const pass = md5(("" + salt.charAt(0) + salt.charAt(2) + password + salt.charAt(5) + salt))
  const data = {}
  data.nhTelephone = username
  data.nhPassword = pass
  console.log(data)
  return request({
    url: '/nh/nh_login',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function nhGetInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function nhLogout() {
  return new Promise(resolve => {resolve()})
}

export function nhGetNcp() {
  return request({
    url: '/ncp/get_mj_all_ncp_list',
    method: 'get'
  })
}