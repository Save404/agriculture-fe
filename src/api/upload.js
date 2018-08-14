import qs from 'qs'
import request from '@/utils/request'

export function uploadImage (imgs) {
  const data = {}
  data.images = imgs
  console.log(data)
  return request({
    url: '/upload/images',
    method: 'post',
    data: qs.stringify(data)
  })
}
