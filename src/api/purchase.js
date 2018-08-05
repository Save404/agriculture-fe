import qs from 'qs'
import request from '@/utils/request'

export function purchaseGet(type) {
  const query = {}
  query.type = type
  return request({
    url: '/purchases',
    method: 'get',
    params: query
  })
}

export function purchaseAdd(type, purchases) {
  const data = purchases
  data.type = type
  //data.purchases = purchases
  console.log(data)
  return request({
    url: '/purchases',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function purchaseDelete(id, type) {
  return request({
    method: 'delete',
    url: '/purchases',
    params: {id, type}
  })
}

export function purchaseDetail(id, type) {
  return request({
    method: 'get',
    url: '/purchases',
    params: {id, type}
  })
}

export function purchaseModify(id, type, purchase) {
  return request({
    method: 'put',
    url: '/purchases',
    params: {id, type, purchase}
  })
}
