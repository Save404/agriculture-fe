import qs from 'qs'
import request from '@/utils/request'

export function govLogin (govId, govPassword) {
  // const salt = "z0fdf7f8g9o1"
  // const pass = md5(("" + salt.charAt(0) + salt.charAt(2) + password + salt.charAt(5) + salt))

  return request({
    url: '/gov/login',
    method: 'post',
    data: qs.stringify({ govId, govPassword })
  })
}

export function govPost (noticeTitle, noticeContent, noticeLevel) {
  return request({
    url: '/gov/post/add',
    method: 'post',
    data: qs.stringify({ noticeTitle, noticeContent, noticeLevel })
  })
}
