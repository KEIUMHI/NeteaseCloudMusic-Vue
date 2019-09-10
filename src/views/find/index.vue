<template>
  <div class="find-container">
    <Banner />

    <div class="wrap">
      <Labels />
    </div>

    <hr style="margin: 0; border: .5px solid #eee;" />

    <Recommend />
  </div>
</template>

<script>
// COMPONENTS
import Banner from '@/components/banner/banner'
import Labels from './components/labels/labels'
import Recommend from './components/recommend/recommend'

export default {
  name: 'find',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Banner,
    Labels,
    Recommend
  }
}
</script>

<style lang="less" scoped>

</style>