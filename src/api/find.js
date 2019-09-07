import request from '@/utils/request'

export function getBanner (query) {
  return request({
    url: 'banner',
    method: 'get',
    prams: query
  })
}


