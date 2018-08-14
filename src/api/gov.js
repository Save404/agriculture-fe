import qs from 'qs'
import request from '@/utils/request'

export function govLogin (id, password) {
  // const salt = "z0fdf7f8g9o1"
  // const pass = md5(("" + salt.charAt(0) + salt.charAt(2) + password + salt.charAt(5) + salt))
  const data = {}
  data.govId = id
  data.govPassword = password
  // console.log(data)
  return request({
    url: '/gov/login',
    method: 'post',
    data: qs.stringify(data)
  })
}
