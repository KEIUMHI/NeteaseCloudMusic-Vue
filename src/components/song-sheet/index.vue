<template>
  <div class="song-sheet">
    <SongCover
      :img="img"
      :count="count"
    />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
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
    img: {
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