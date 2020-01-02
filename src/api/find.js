import request from '@/utils/request'

/**
 * 轮播图
 * @param {number} type 0:pc,1:android,2:iphone,3:ipad 
 */
export function getBanner(params) {
  return request({
    url: 'banner',
    method: 'get',
    params
  })
}

/**
 * 相关歌单推荐
 * @param {number} id 歌单id
 */
export function getRecommendMusic(params) {
  return request({
    url: 'personalized',
    method: 'get',
    params
  })
}

/**
 * 推荐新音乐
 */
export function getRecommendNewSong(params) {
  return request({
    url: 'personalized/newsong',
    method: 'get',
    params
  })
}

/**
 * 新碟推送
 * @param {number} limit 取出数量默认50 *
 */
export function getNewAlbum(params) {
  return request({
    url: 'top/album',
    method: 'get',
    params
  })
}

/**
 * 新歌速递
 * @param {number} type 0:全部,1:华语,7:欧美,96:日本:8,16:韩国
 */
export function getNewSong(params) {
  return request({
    url: 'top/song',
    method: 'get',
    params
  })
}

/**
 * 视频标签列表
 */
export function getVideoLabels() {
  return request({
    url: 'video/group/list',
    method: 'get'
  })
}

/**
 * 视频标签下的视频
 * @param {number} id 视频标签下的id
 */
export function getVideos(params) {
  return request({
    url: 'video/group',
    method: 'get',
    params
  })
}