<template>
  <div class="head-back">
    <div
      class="head-back__icon"
      @click="_handleClick"
    ></div>
    <span class="head-back__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'head-back',
  props: {
    label: String
  },
  methods: {
    _handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.head-back {
  display: flex;
  padding: 20px 15px 0;

  &__icon {
    background-color: hsla(0, 0, 0, 0);
    padding-right: 10px;

    &::before {
      content: "\2190";
      font-size: 20px;
    }
  }
}
</style>