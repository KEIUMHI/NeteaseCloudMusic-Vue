import request from '@/utils/request'
// 获取轮播
export function getBanner (query) {
  return request({
    url: 'banner',
    method: 'get',
    params: query
  })
}
// 获取推荐音乐
export function getRecommendMusic (query) {
  return request({
    url: 'personalized',
    method: 'get',
    params: query
  })
}

