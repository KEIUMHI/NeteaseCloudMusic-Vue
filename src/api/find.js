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
// 获取推荐新音乐
export function getRecommendNewSong (query) {
  return request({
    url: 'personalized/newsong',
    method: 'get',
    params: query
  })
}
// 新碟推送
export function getNewAlbum (query) {
  return request({
    url: 'top/album',
    method: 'get',
    params: query
  })
}
// 新歌速递 type 0全部 7华语 96欧美 8日本 16韩国
export function getNewSong (query) {
  return request({
    url: 'top/song',
    method: 'get',
    params: query
  })
}
// 视频
export function getVideoLabels () {
  return request({
    url: 'video/group/list',
    method: 'get'
  })
}
