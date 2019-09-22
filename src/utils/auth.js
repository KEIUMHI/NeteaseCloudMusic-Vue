import Cookies from 'js-cookie'

// 设置 Cookies
export function setCookies (key, data) {
  return Cookies.set(key, data)
}

// 获取 Cookies
export function getCookies (key) {
  return Cookies.get(key)
}

// 移除 Cookies
export function removeCookies (key) {
  return Cookies.remove(key)
}