import request from '@/utils/request'

// 登陆
export function login (query) {
  return request({
    url: 'login/cellphone',
    method: 'get',
    params: query
  })
}