<template>
  <div id="app">
    <tab-head />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import TabHead from '@/components/tab-head/tab-head'

export default {
  name: 'app',
  components: {
    TabHead
  }
}
</script>

<style>
</style>
