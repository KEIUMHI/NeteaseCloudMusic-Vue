<template>
  <div class="box-show">
    <SongCover :pic-url="picUrl"
               :play-count="playCount" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
// COMPONENTS
import SongCover from '../song-cover/song-cover'

export default {
  name: 'box-show',
  components: {
    SongCover
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    picUrl: {
      type: String,
      required: true
    },
    copywriter: {
      type: String,
      default: null
    },
    playCount: {
      type: [String, Number],
      default: null
    },
    styles: {
      type: Object,
      default: () => {
        return {
          width: '100px',
          heigth: '100px'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/variables.less";
.box-show {
  // 28是两边padding之和、20是剩余的留白宽度之和
  width: calc((100vw - 28px - 20px) / 3);
}

.name {
  font-size: @font-size-small-m;
  color: @color-font-default;
}
</style>