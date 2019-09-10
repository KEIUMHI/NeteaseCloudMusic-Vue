<template>
  <div class="box-show">
    <div class="img_bg-container d-flex">
      <img
        class="img"
        alt="recommend-music_img"
        :src="picUrl" />
        <PlayCount
          v-if="playCount"
          class="paly-count_position"
          :count="playCount"
        />
    </div>
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
// COMPONENTS
import PlayCount from '../play-count/play-count'

export default {
  name: 'box-show',
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
  },
  components: {
    PlayCount
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .box-show {
    width: calc((100vw - 28px - 20px) / 3);

    .img_bg-container {
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
  }

  .name {
    font-size: @font-size-mini-l;
    color: @color-font-default;
  }
</style>