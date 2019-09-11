<template>
  <div class="song-cover d-flex">
    <img
      class="img"
      alt="recommend-music_img"
      :src="picUrl" />
    <PlayCount
      v-if="playCount"
      class="paly-count_position"
      :count="playCount" />
  </div>
</template>

<script>
import PlayCount from '../play-count/play-count'

export default {
  name: 'song-cover',
  props: {
    picUrl: {
      type: String,
      required: true
    },
    playCount: {
      type: [String, Number],
      default: null
    }
  },
  components: {
    PlayCount
  }
}
</script>

<style lang="less" scoped>
  .song-cover {
      position: relative;

      .img {
        border-radius: 4px;
        width: 100%;
      }

      .paly-count_position {
        position: absolute;
        top: 3px;
        right: 3px;
      }
    }
</style>