<template>
  <div class="wrap">
    <div class="recommend">

      <BoxShowHead
        title="推荐歌单"
        more="歌单广场"
      />
      <div class="recommend-music-container">
        <BoxShow
          v-for="recommendMusic in recommendMusicList"
          :id="recommendMusic.id"
          :key="recommendMusic.id"
          :name="recommendMusic.name"
          :pic-url="recommendMusic.picUrl"
          :play-count="recommendMusic.playCount"
        />
      </div>

      <BoxShowHead
        :button-switch="true"
        switch-name-main="新碟"
        switch-name-sed="新歌"
        :more="currentSwitch === 0 ? '更多新碟' : '新歌推荐'"
        @change="_handleSwitchChange"
      />
      <div class="music-new-switch-container">
        <BoxShow
          v-for="(newMusic, index) in newMusicList"
          :id="newMusic.id"
          :key="index"
          :name="newMusic.name"
          :pic-url="currentSwitch === 0 ? newMusic.picUrl : newMusic.song.album.picUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRecommendMusic,
  getNewAlbum,
  getRecommendNewSong
} from '@/api/find'
// COMPONENTS
import BoxShow from '@/components/box-show/box-show'
import BoxShowHead from '@/components/box-show-head/box-show-head'

export default {
  name: 'recommend',
  components: {
    BoxShow,
    BoxShowHead
  },
  data() {
    return {
      recommendMusicList: [],
      newMusicList: [],
      currentSwitch: 0
    }
  },
  beforeMount() {
    this._getRecommendMusic()
    this._getNewAlbum()
    this._getRecommendNewSong()
  },
  methods: {
    _getRecommendMusic() {
      getRecommendMusic({
        limit: 6
      }).then(res => {
        console.log('recommendMusic:', res)
        if (res.statusText === 'OK') {
          this.recommendMusicList = res.data.result
        }
      }).catch(err => {
        console.log(err)
      })
    },
    _getNewAlbum() {
      return getNewAlbum({
        limit: 3 * 10
      }).then(res => {
        console.log('newAlbumRes:', res)
        if (res.statusText === 'OK') {
          this.newMusicList = res.data.albums
          window.localStorage.setItem('NEW_ALBUM', JSON.stringify(res.data.albums))
        }
      })
    },
    _getRecommendNewSong() {
      getRecommendNewSong().then(res => {
        console.log('recommendNewSong:', res)
        if (res.statusText === 'OK') {
          let list = []
          for (let i = 0; i < 3; i++) {
            list.push(res.data.result[i])
          }
          window.localStorage.setItem('RECOMMEND_NEW_SONG', JSON.stringify(list))
        }
      })
    },
    _handleSwitchChange(currentSwitch) {
      this.currentSwitch = currentSwitch
      if (currentSwitch === 0) {
        this.newMusicList = JSON.parse(window.localStorage.getItem('NEW_ALBUM'))
      } else if (currentSwitch === 1) {
        // this._getRecommendNewSong()
        this.newMusicList = JSON.parse(window.localStorage.getItem('RECOMMEND_NEW_SONG'))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.recommend-music-container,
.music-new-switch-container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
</style>