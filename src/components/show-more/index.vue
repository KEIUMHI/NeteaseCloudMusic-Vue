<template>
  <div
    :class="['show-more', 'd-flex', 'j-a-center', {active: isActive}]"
    @mouseover="_handleMouseDown"
    @mouseout="_handleMouseUp"
  >
    <i
      v-if="iconName"
      :class="['iconfont', iconName]"
    ></i>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'show-more',
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
    _handleMouseDown() {
      console.log('click 歌单广场, on mouse down. active: ' + this.isActive)
      this.isActive = !this.isActive
    },
    _handleMouseUp() {
      console.log('click 歌单广场, on mouse up. active: ' + this.isActive)
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";
.show-more {
  padding: 4px 8px;
  border: 1px solid #eee;
  border-radius: 15px;
  font-size: @font-size-small-s;
  color: #777;

  &.active {
    background: rgba(119, 119, 119, 0.1);
  }
}
</style>