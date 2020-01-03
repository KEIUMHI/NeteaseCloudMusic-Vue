<template>
  <div class="song-sheet">
    <SongCover
      :pic-url="picUrl"
      :count="count"
    />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
// COMPONENTS
import SongCover from '../song-cover'

export default {
  name: 'song-sheet',
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
    count: {
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
@import "~common/less/variables.less";
.song-sheet {
  // 28是两边padding之和、20是剩余的留白宽度之和
  width: calc((100vw - 28px - 20px) / 3);
}

.name {
  font-size: @font-size-small-s;
  color: #444;
}
</style>