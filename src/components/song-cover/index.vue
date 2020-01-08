<template>
  <div class="song-cover">
    <img
      class="img"
      alt="recommend-music_img"
      :src="img"
    />
    <CounterPlay
      v-if="count"
      class="paly-count_position"
      :count="count"
    />
  </div>
</template>

<script>
import CounterPlay from '../counter-play'

export default {
  name: 'song-cover',
  components: {
    CounterPlay
  },
  props: {
    img: {
      type: String,
      required: true
    },
    count: {
      type: [String, Number],
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.song-cover {
  display: flex;
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