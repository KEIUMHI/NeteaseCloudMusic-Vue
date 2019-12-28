<template>
  <div class="mine-item">
    <div class="icon"></div>
    <div class="name-wrapper">
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine-item',
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.mine-item {
  padding: 15px 0;
}

.icon {
  margin: 0 20px;
  width: 30px;
}

.name-wrapper {
  border-bottom: 1px solid #777;
}
</style>