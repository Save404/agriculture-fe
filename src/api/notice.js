import qs from 'qs'
import request from '@/utils/request'

export function noticeAdd (noticeTitle, noticeContent, noticeLevel) {
  return request({
    url: '/gov/post/add',
    method: 'post',
    data: qs.stringify({ noticeTitle, noticeContent, noticeLevel })
  })
}
