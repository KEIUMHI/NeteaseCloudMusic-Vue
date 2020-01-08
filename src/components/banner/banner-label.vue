<template>
  <div :class="['banner-title', color]">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'banner-label',
  props: {
    title: {
      type: String,
      default: '独家'
    },
    color: {
      type: String,
      default: 'red' // 十六进制、rgba、colorName
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";

.banner-title {
  padding: 4px 5px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 5px;
  font-size: @font-size-small-s;
  color: #fff;
  opacity: 0.88;

  &.red {
    background: @color-primary;
  }

  &.blue {
    background: #0984e3;
  }
}
</style>