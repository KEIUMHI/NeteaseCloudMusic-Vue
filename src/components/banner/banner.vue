<template>
  <div class="banner">
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div
          v-for="(banner, index) in banners" :key="index"
          class="swiper-slide">
          <img
            alt="banner_image"
            :src="banner.imageUrl | setWH('375y140')" /></div>
      </div>
      <div class="swiper-pagination banner-pagination"></div>
    </div>
  </div>
</template>

<script>
import { getBanner } from '@/api/find'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'banner',
  data () {
    return {
      banners: []
    }
  },
  mounted () {
    this._getBanner().then(() => {
      this._initBanner()
    })
    // this.$nextTick(() => {
    //   // eslint-disable-next-line
    //   let bannerSwiper = new Swiper('.banner', {
    //     autoPlay: true,
    //     delay: 3000,
    //     pagination: {
    //       el: '.banner-pagination'
    //     }
    //   })
    // })
  },
  methods: {
    _getBanner () {
      return getBanner({
        type: 0
      }).then(res => {
        console.log(res)
        if (res.statusText === 'OK') {
          this.banners = res.data.banners
        }
      }).catch(err => {
        console.log(err)
      })
    },
    _initBanner () {
      let bannerSwiper = new Swiper('.banner', {
        autoPlay: true,
        delay: 3000,
        pagination: {
          el: '.banner-pagination'
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>

  .banner {
    width: 100vw;
    height: 120px;
  }

  .swiper-slide {
    border-radius: 15px;
  }
</style>