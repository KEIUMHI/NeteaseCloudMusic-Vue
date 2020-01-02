import request from '@/utils/request'

/**
 * 手机登录
 * @param {number} phone 手机号
 * @param {string} password 密码
 * @param {number} countrycode 国家码 *
 */
export function login(params) {
  return request({
    url: 'login/cellphone',
    method: 'post',
    params
  })
}

/**
 * 登录状态
 */
export function loginStatus() {
  return request({
    url: 'login/status',
    method: 'get'
  })
}