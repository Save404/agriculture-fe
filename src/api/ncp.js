import qs from 'qs'
import request from '@/utils/request'

export function ncpAdd(ncpObj) { // 农产品添加
  return request({
    url: '/ncp/add_ncp',
    method: 'post',
    data: qs.stringify(ncpObj)
  })
}

export function ncpDelete(ncpId) { // 农产品删除
  return request({
    url: '/ncp/delete_ncp/' + ncpId,
    method: 'post'
  })
}

export function ncpModify(ncpObj, ncpId) { // 农产品修改
  return request({
    url: '/ncp/modify_ncp' + ncpId,
    method: 'post',
    data: qs.stringify(ncpObj)
  })
}

export function ncpOnOff(ncpId) { // 农产品上下架
  return request({
    url: '/ncp/on_sell/' + ncpId,
    method: 'post'
  })
}

export function ncpGetSingle(ncpId) { // 获取单个农产品详细信息
  return request({
    url: '/ncp/get_ncp/' + ncpId,
    method: 'get'
  })
}

export function ncpNhGet() { // 农户获取个人农产品列表
  return request({
    url: '/ncp/get_ncp_list',
    method: 'get'
  })
}

export function ncpMjGet() {  // 买家获取所有农产品列表
  return request({
    url: '/ncp/get_mj_all_ncp_list',
    method: 'get'
  })
}