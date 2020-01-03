<template>
  <div class="recommend">

    <base-title-bar>
      <template #start>
        <div class="recommend__title">推荐歌单</div>
      </template>
      <template #end>
        <ShowMore label="歌单广场" />
      </template>
    </base-title-bar>
    <div class="recommend__list">
      <SongSheet
        v-for="recommendMusic in recommendList"
        :id="recommendMusic.id"
        :key="recommendMusic.id"
        :name="recommendMusic.name"
        :pic-url="recommendMusic.picUrl"
        :count="recommendMusic.playCount"
      />
    </div>

    <base-title-bar>
      <template #start>
        <div class="recommend__title-double">
          <span
            :class="['title-double-item', {cur: !cur}]"
            @click="_handleTitleChange(0)"
          >新碟</span>
          <span
            :class="['title-double-item', {cur}]"
            @click="_handleTitleChange(1)"
          >新歌</span>
        </div>
      </template>
      <template #end>
        <ShowMore label="更多新碟" />
      </template>
    </base-title-bar>
    <div class="recommend__list">
      <SongSheet
        v-for="(item, index) in curList"
        :id="item.id"
        :key="index"
        :name="item.name"
        :pic-url="item.picUrl || item.song.album.picUrl || ''"
      />
    </div>
  </div>
</template>

<script>
import {
  getRecommendMusic,
  getNewAlbum,
  getRecommendNewSong
} from 'api/find'

import BaseTitleBar from 'base/base-title-bar'
import SongSheet from 'components/song-sheet'
import ShowMore from 'components/show-more'

export default {
  name: 'recommend',
  components: {
    SongSheet,
    BaseTitleBar,
    ShowMore
  },
  data() {
    return {
      recommendList: [],
      newAlbumsList: [],
      newSongList: [],
      curList: [],
      cur: 0
    }
  },
  created() {
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
          this.newAlbumsList = res.data.albums
          window.localStorage.setItem('NEW_ALBUM', JSON.stringify(res.data.albums))
        }
      })
    },
    _getRecommendNewSong() {
      getRecommendNewSong().then(res => {
        console.log('recommendNewSong:', res)
        const code = res.data.code
        let list = []
        if (code >= 200 && code < 300) {
          let i = 0
          while (i < 3) {
            list.push(res.data.result[i])
            i++
          }
          window.localStorage.setItem('RECOMMEND_NEW_SONG', JSON.stringify(list))
        } else if (code >= 400 && code < 500) {
          alert('网络错误')
        } else if (code >= 500) {
          alert(res.data.msg)
        }
      }).catch(err => {
        alert(err.response.data.msg)
      })
    },
    _handleTitleChange(i) {
      this.cur = i
      this.curList = !i
        ? JSON.parse(window.localStorage.getItem('NEW_ALBUM'))
        : JSON.parse(window.localStorage.getItem('RECOMMEND_NEW_SONG'))
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";
@import "~common/less/mixin.less";

.recommend {
  .container;

  &__list {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }

  &__title-double {
    position: relative;
    .title-double-item {
      font-size: @font-size-small;
      color: #777;

      &.cur {
        font-size: @font-size-medium;
        font-weight: 500;
        color: @color-text-black;
      }

      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }

    &::before {
      content: "|";
      position: absolute;
      top: 0;
      left: 50%;
    }
  }
}
</style>