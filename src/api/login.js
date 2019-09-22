import request from '@/utils/request'

// 登陆
export function login (query) {
  return request({
    url: 'login/cellphone',
    method: 'post',
    params: query
  })
}
// 登陆状态 判断是否已登陆
export function loginStatus () {
  return request({
    url: 'login/status',
    method: 'get'
  })
}