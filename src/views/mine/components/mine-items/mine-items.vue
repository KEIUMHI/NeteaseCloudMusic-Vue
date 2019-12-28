<template>
  <div class="mine-items">
    <MineItem v-for="mineItem in mineItems"
              :id="mineItem.id"
              :key="mineItem.id"
              :name="mineItem.nm"
              :icon="mineItem.icon" />
  </div>
</template>

<script>
// import MineItem from './mine-item'

export default {
  name: 'mine-items',
  data() {
    return {
      mineItems: [{
        id: 1,
        nm: '本地音乐',
        icon: ''
      }, {
        id: 2,
        nm: '最近播放',
        icon: ''
      }]
    }
  }
}
</script>

<style lang="less" scoped>
</style>