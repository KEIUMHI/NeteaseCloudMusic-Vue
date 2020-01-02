<template>
  <div
    class="play-count d-flex j-a-center"
    :style="styles"
  >
    <i class="iconfont iconplay"></i>{{ count | formatCount }}
  </div>
</template>

<script>
export default {
  name: 'play-count',
  filters: {
    formatCount(count) {
      if (count > 100000000) { // 大于一亿
        return `${(count / 100000000).toFixed(1)}亿`
      } else if (count > 100000) { // 大于十万
        return `${parseInt(count / 10000, 10)}万`
      } else { // 不然就是数字
        return count
      }
    }
  },
  props: {
    count: {
      type: Number,
      required: true,
      default: 0
    },
    styles: {
      type: Object,
      default: () => {
        return {
          fontSize: '10px',
          color: '#fff',
          iconSize: '12px'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/variables.less";

.paly-count {
  font-size: @font-size-small-s;
  color: #fff;
}

.iconfont {
  font-size: @font-size-small;
}
</style>