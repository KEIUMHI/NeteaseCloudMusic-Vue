<template>
  <div
    class="show-more"
    @click="handleClick"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'show-more',
  props: {
    label: {
      type: String,
      default: '更多'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  },
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

  &:active {
    background: rgba(119, 119, 119, 0.1);
  }
}
</style>