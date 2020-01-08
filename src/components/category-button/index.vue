<template>
  <div
    class="category-button"
    @click="_handleClick"
  >
    <div class="icon">
      <svg-icon :icon-class="iconClass"></svg-icon>
    </div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'category-button',
  props: {
    id: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true,
      default: '每日推荐'
    },
    iconClass: {
      type: String,
      required: true
    }
  },
  methods: {
    _handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";
.category-button {
  display: inline-block;
  text-align: center;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin: 0 auto;
  color: #fff;
  background-color: #d44439;
  &:active {
    color: hsl(0, 0, 90%);
  }
}

.label {
  margin-top: 8px;
  font-size: @font-size-small;
  color: #777;
}
</style>

