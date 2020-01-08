<template>
  <div class="find-container">
    <Banner />
    <Labels />
    <RecommendList :data="recommendList" />
    <AlbumsList :data="{albumsList, songList}" />
  </div>
</template>

<script>
import {
  // getVideoLabels,
  // getVideos,
  getRecommendMusic,
  getNewAlbum,
  getRecommendNewSong
} from 'api/find'

import Banner from 'components/banner'
import Labels from './components/labels'
import RecommendList from './components/recommend-list'
import AlbumsList from './components/albums-list'
// import Recommend from './components/recommend'

export default {
  name: 'find',
  components: {
    Banner,
    Labels,
    RecommendList,
    AlbumsList
  },
  data() {
    return {
      recommendList: [],
      albumsList: [],
      songList: []
    }
  },
  created() {
    // this._getVideoLabels().then(() => {
    //   getVideos({
    //     id: 58106
    //   }).then(res => {
    //     console.log('videosRes:', res)
    //   }).catch(err => {
    //     console.error('getVideo', err.response)
    //   })
    // })
    this._getRecommendMusic()
    this._getNewAlbum()
    this._getRecommendNewSong()
  },
  methods: {
    // _getVideoLabels() {
    //   return getVideoLabels().then(res => {
    //     console.log('videoLabesRes:', res)
    //   })
    // },
    _getRecommendMusic() {
      getRecommendMusic({
        limit: 6
      }).then(res => {
        console.log('recommendMusic:', res)
        if (res.statusText === 'OK') {
          this.recommendList = res.data.result
        }
      }).catch(err => {
        alert(err.response.data.msg)
      })
    },
    _getNewAlbum() {
      return getNewAlbum({
        limit: 3
      }).then(res => {
        console.log('newAlbumRes:', res)
        if (res.statusText === 'OK') {
          this.albumsList = res.data.albums
        }
      })
    },
    _getRecommendNewSong() {
      getRecommendNewSong().then(res => {
        console.log('recommendNewSong:', res)
        const code = res.data.code
        if (code >= 200 && code < 300) {
          let i = 0
          while (i < 3) {
            this.songList.push(res.data.result[i])
            i++
          }
        } else if (code >= 400 && code < 500) {
          alert('网络错误')
        } else if (code >= 500) {
          alert(res.data.msg)
        }
      }).catch(err => {
        alert(err.response.data.msg)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.find-container {
  &/deep/.labels {
    border-bottom: 1px solid #eee;
  }
}
</style>