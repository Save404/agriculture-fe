import qs from 'qs'
import request from '@/utils/request'

export function addContract(contract) {
  const data = contract
  return request({
    method: 'post',
    url: '/contracts',
    data: qs.stringify(data)
  })
}
