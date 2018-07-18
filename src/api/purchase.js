import qs from 'qs'
import request from '@/utils/request'

export function addPurchase(type, purchases) {
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

export function deletePurchase(argument) {

}
