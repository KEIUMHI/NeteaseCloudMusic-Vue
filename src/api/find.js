import request from '@/utils/request'
// 获取轮播
export function getBanner (params) {
  return request({
    url: 'banner',
    method: 'get',
    params
  })
}
// 获取推荐音乐
export function getRecommendMusic (params) {
  return request({
    url: 'personalized',
    method: 'get',
    params
  })
}
// 获取推荐新音乐
export function getRecommendNewSong (params) {
  return request({
    url: 'personalized/newsong',
    method: 'get',
    params
  })
}
// 新碟推送
export function getNewAlbum (params) {
  return request({
    url: 'top/album',
    method: 'get',
    params
  })
}
// 新歌速递 type 0全部 7华语 96欧美 8日本 16韩国
export function getNewSong (params) {
  return request({
    url: 'top/song',
    method: 'get',
    params
  })
}
// 视频标签
export function getVideoLabels () {
  return request({
    url: 'video/group/list',
    method: 'get'
  })
}
// 视频标签下的视频
export function getVideos (params) {
  return request({
    url: 'video/group',
    method: 'get',
    params
  })
}
