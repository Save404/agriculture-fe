import qs from 'qs'
import request from '@/utils/request'

export function purchaseGet (id, type) {
  const query = {}
  query.id = id
  query.type = type
  return request({
    url: '/purchases',
    method: 'get',
    params: query
  })
}

export function purchaseAdd (type, purchases) {
  const data = purchases
  data.type = type
  // data.purchases = purchases
  console.log(data)
  return request({
    url: '/purchases',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function purchaseDelete (id, type) {
  return request({
    url: '/purchases/' + id,
    method: 'delete',
    params: { type }
  })
}

export function purchaseDetail (id, type) {
  return request({
    url: '/purchases/' + id,
    method: 'get',
    params: { type }
  })
}

export function purchaseModify (id, type, purchases) {
  const data = purchases
  data.type = type
  return request({
    url: '/purchases/' + id,
    method: 'put',
    data: qs.stringify(data)
  })
}
