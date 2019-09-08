<template>
  <div id="app">

    <div class="tab-header">
      <tab-head />
    </div>
    
    <div
      id="page"
      class="swiper-container"
      style="touch-aciton: none;">
      <div class="swiper-wrapper">
        <div class="swiper-slide slidepage"><Mine /></div>
        <div class="swiper-slide slidepage"><Find /></div>
        <div class="swiper-slide slidepage"><Cloud /></div>
        <div class="swiper-slide slidepage"><Videos /></div>
      </div>
  </div>

</div>
</template>

<script>
import TabHead from '@/components/tab-head/tab-head'
import Mine from './views/mine/index'
import Find from './views/find/index'
import Cloud from './views/cloud/index'
import Videos from './views/videos/index'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'

export default {
  name: 'app',
  data () {
    return {
      // bar: null,
      navSum: 0,
      navSlideWidth: 0,
      clientWidth: 0,
      navWidth: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      const _this = this
      // let barwidth = 36 //导航粉色条的长度px
      let tSpeed = 300 //切换速度300ms
      let navSwiper = new Swiper('#nav', {
        slidesPerView: 4, // 设置slider容器能够同时显示的slides数量(carousel模式)
        freeMode: true,
        on: {
          init: function() {
            _this.navSlideWidth = this.slides.eq(0).css('width') //导航字数需要统一,每个导航宽度一致
            // _this.bar = this.$el.find('.bar')
            // _this.bar.css('width', _this.navSlideWidth)
            // _this.bar.transition(tSpeed)
            _this.navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置
  
            _this.clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
            _this.navWidth = this.width
            // for (let i = 0; i < this.slides.length; i++) {
            //   _this.navWidth += parseInt(this.slides.eq(i).css('width'))
            // }
  
            // let topBar = this.$el.parents('body').find('#top') //页头
  
          },
  
        },
      });
      // eslint-disable-next-line
      let pageSwiper = new Swiper('#page', {
        watchSlidesProgress: true, // 允许 watch SlidesProgress
        resistanceRatio: 0,
        initialSlide : 1, // 设置起始页
        on: {
          touchMove: function() {
            // let progress = this.progress
            // _this.bar.transition(0)
            // _this.bar.transform('translateX(' + _this.navSum * progress + 'px)')
            //粉色255,72,145灰色51,51,51
            for (let i = 0; i < this.slides.length; i++) {
              let slideProgress = this.slides[i].progress
              if (Math.abs(slideProgress) < 1) {
                let r = Math.floor((51 - 153) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 153)
                let g = Math.floor((51 - 153) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 153)
                let b = Math.floor((51 - 153) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 153)
                navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
                let size = Math.floor((16 - 14) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 14)
                navSwiper.slides.eq(i).find('span').css('font-size', size + 'px')
              }
            }
          },
          transitionStart: function() {
            let activeIndex = this.activeIndex
            // let activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft
            //释放时导航粉色条移动过渡
            // _this.bar.transition(tSpeed)
            // _this.bar.transform('translateX(' + activeSlidePosition + 'px)')
            //释放时文字变色过渡
            navSwiper.slides.eq(activeIndex).find('span').transition(tSpeed)
            navSwiper.slides.eq(activeIndex).find('span').css('color', 'rgba(51,51,51,1)')
            navSwiper.slides.eq(activeIndex).find('span').css('font-size', '16px')
            navSwiper.slides.eq(activeIndex).find('span').css('font-weight', 'bold')
            if (activeIndex > 0) {
              navSwiper.slides.eq(activeIndex - 1).find('span').transition(tSpeed)
              navSwiper.slides.eq(activeIndex - 1).find('span').css('color', '#999')
              navSwiper.slides.eq(activeIndex - 1).find('span').css('font-size', '14px')
              navSwiper.slides.eq(activeIndex - 1).find('span').css('font-weight', 'normal')
            }
            if (activeIndex < this.slides.length) {
              navSwiper.slides.eq(activeIndex + 1).find('span').transition(tSpeed)
              navSwiper.slides.eq(activeIndex + 1).find('span').css('color', '#999')
              navSwiper.slides.eq(activeIndex + 1).find('span').css('font-size', '14px')
              navSwiper.slides.eq(activeIndex + 1).find('span').css('font-weight', 'normal')
            }
            //导航居中
            let navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离
  
            navSwiper.setTransition(tSpeed)
            if (navActiveSlideLeft < (_this.clientWidth - parseInt(_this.navSlideWidth)) / 2) {
              navSwiper.setTranslate(0)
            } else if (navActiveSlideLeft > _this.navWidth - (parseInt(_this.navSlideWidth) + _this.clientWidth) / 2) {
              navSwiper.setTranslate(_this.clientWidth - _this.navWidth)
            } else {
              navSwiper.setTranslate((_this.clientWidth - parseInt(_this.navSlideWidth)) / 2 - navActiveSlideLeft)
            }
  
          },
        }
      })
    })
  },
  methods: {
  },
  components: {
    TabHead,
    Mine,
    Find,
    Cloud,
    Videos
  }
}
</script>

<style lang="less">
  @import "~@/assets/style/variables.less";
  .tab-header {
    margin: 8px 0 0 0;
  }
</style>
