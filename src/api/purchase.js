import qs from 'qs'
import request from '@/utils/request'

export function purchaseGet(type) {
  return request({
    url: '/purchases',
    method: 'get',
    params: type
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

export function purchaseDelete(argument) {

}

export function purchaseDetail(argument) {
  // body...
}

export function purchaseModify() {

}
