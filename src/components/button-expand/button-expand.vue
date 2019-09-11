<template>
  <div
    class="button-expand d-flex j-a-center"
    :class="{ active: isActive }"
    @mouseover="_handleMouseDown"
    @mouseout="_handleMouseUp">
    <i v-if="iconName" :class="['iconfont', iconName]"></i>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'button-expand',
  props: {
    content: {
      type: String,
      default: '更多'
    },
    iconName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    _handleMouseDown () {
      console.log('click 歌单广场, on mouse down.' + 'active: ' + this.isActive)
      this.isActive = !this.isActive
    },
    _handleMouseUp () {
      console.log('click 歌单广场, on mouse up.' + 'active: ' + this.isActive)
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .button-expand {
    padding: 4px 8px;
    border: 1px solid #eee;
    border-radius: 15px;
    font-size: @font-size-small-b;
    color: @color-font-secondary;

    &.active {
      background: rgba(119, 119, 119, .1);
    }
  }
</style>