<template>
  <div class="play-count">
    <i class="iconfont iconplay"></i>{{ count | formatCount }}
  </div>
</template>

<script>
export default {
  name: 'counter-play',
  filters: {
    formatCount(count) {
      if (count > 100000000) { // 大于一亿
        return `${(count / 100000000).toFixed(1)}亿`
      } else if (count > 100000) { // 大于十万
        return `${parseInt(count / 10000, 10)}万`
      } else { // 默认
        return count
      }
    }
  },
  props: {
    count: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";

.play-count {
  font-size: @font-size-small-s;
  color: #fff;
}

.iconfont {
  font-size: @font-size-small;
}
</style>