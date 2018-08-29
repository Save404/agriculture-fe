import qs from 'qs'
import request from '@/utils/request'

export function contractGet (type, id) {
  const query = {}
  query.type = type
  query.id = id
  return request({
    url: '/contracts',
    method: 'get',
    params: query
  })
}

export function contractAdd (contract) {
  const data = contract
  return request({
    url: '/contracts',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function contractFinish (contract) {
  return request({
    url: '/contracts',
    method: 'put',
    data: qs.stringify(contract)
  })
}

export function contractDetail (id) {
  return request({
    url: '/contracts/' + id,
    method: 'get'
  })
}

export function contractPayStatu (id, status) {
  return request({
    url: '/contracts/' + id + '/payStatu',
    method: 'put',
    data: qs.stringify({ status })
  })
}

export function contractStatu (id, status) {
  return request({
    url: '/contracts/' + id + '/statu',
    method: 'put',
    data: qs.stringify({ status })
  })
}
