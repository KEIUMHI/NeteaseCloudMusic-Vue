<template>
  <div class="banner">
    <div class="swiper-container banner">
      <div class="swiper-wrapper">
        <div
          v-for="(banner, index) in banners" :key="index"
          class="swiper-slide">
          <div class="image-wrapper">
            <img
              class="banner-image"
              alt="banner_image"
              :src="banner.imageUrl" />
            <BannerTitle
              v-if="banner.typeTitle"
              class="banner-title"
              :title="banner.typeTitle"
              :type-color="banner.titleColor" />
          </div>
        </div>
      </div>
      <div
        class="swiper-pagination banner-pagination"
        ></div>
    </div>
  </div>
</template>

<script>
import { getBanner } from '@/api/find'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
// COMPONENTS
import BannerTitle from './components/banner-title/banner-title'

export default {
  name: 'banner',
  data () {
    return {
      banners: []
    }
  },
  beforeMount () {
    this._getBanner().then(() => {
      this._initBanner()
    })
  },
  methods: {
    _getBanner () {
      return getBanner({
        type: 0
      }).then(res => {
        console.log('bannerRes:',  res)
        if (res.statusText === 'OK') {
          this.banners = res.data.banners
        }
      }).catch(err => {
        console.log(err)
      })
    },
    _initBanner () {
      // eslint-disable-next-line
      let bannerSwiper = new Swiper('.banner', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.banner-pagination',
        }
      })
    }
  },
  components: {
    BannerTitle
  }
}
</script>

<style lang="less" scoped>

  .banner {
    width: 100vw;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .image-wrapper {
    display: flex;
    position: relative;
    overflow: hidden;

    .banner-title {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .banner-image {
    border-radius: 5px;
    width: calc(100vw - 28px);
  }
</style>