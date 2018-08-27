import qs from 'qs'
import request from '@/utils/request'

export function noticeGet (id, type) {
  return request({
    url: '/notice',
    method: 'get',
    params: { id, type }
  })
}

export function noticeAdd (noticeTitle, noticeContent, noticeLevel) {
  return request({
    url: '/gov/notice/add',
    method: 'post',
    data: qs.stringify({ noticeTitle, noticeContent, noticeLevel })
  })
}

export function noticeDelete (id) {
  return request({
    url: '/notice/delete' + id,
    method: 'delete'
  })
}

export function noticeDetail (id) {
  return request({
    url: '/notice/content' + id,
    method: 'get'
  })
}

export function noticeModify (id, noticeTitle, noticeContent, noticeLevel) {
  return request({
    url: '/notice/update/' + id,
    method: 'put',
    data: qs.stringify({noticeTitle, noticeContent, noticeLevel})
  })
}
