<template>
<div class="wrap">
  <div class="recommend">

    <div>this is head title content.</div>

    <div class="recommend-music-container">
      <BoxShow
        v-for="recommendMusic in recommendMusicList" :key="recommendMusic.id"
        :id="recommendMusic.id"
        :name="recommendMusic.name"
        :pic-url="recommendMusic.picUrl"
        :play-count="recommendMusic.playCount"
      />
    </div>

  </div>
</div>
</template>

<script>
import { getRecommendMusic } from '@/api/find'
// COMPONENTS
import BoxShow from '@/components/box-show/box-show'

export default {
  name: 'recommend',
  data () {
    return {
      recommendMusicList: []
    }
  },
  beforeMount () {
    this._getRecommendMusic()
  },
  methods: {
    _getRecommendMusic () {
      getRecommendMusic({
        limit: 6
      }).then(res => {
        console.log('recommendMusic:', res)
        if (res.statusText === 'OK') {
          this.recommendMusicList = res.data.result
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    BoxShow
  }
}
</script>

<style lang="less" scoped>
  .recommend-music-container {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }
</style>