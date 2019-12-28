<template>
  <div class="wrap">
    <div class="tab-head">
      <div @click="_handleMenu"><i class="iconfont iconMenu"></i></div>
      <div class="options">
        <div id="nav"
             class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper">
            <div v-for="(tab, index) in tabs"
                 :key="index"
                 class="swiper-slide"
                 @click="_handleClick(index)">
              <span :style="tab === '发现' ? {
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#333'
                } : ''">{{ tab }}</span>
            </div>
            <!-- <div class="bar">
              <div class="color"></div>
            </div> -->
          </div>
        </div>
      </div>
      <div @click="_handleSearch"><i class="iconfont iconsearch"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-head',
  data() {
    return {
      tabs: [
        '我的',
        '发现',
        '云村',
        '视频'
      ]
    }
  },
  methods: {
    _handleClick(index) {
      this.$emit('change', index)
      console.log(`click tab Index:${index}`)
    },
    _handleMenu() {
      console.log('click menu.')
    },
    _handleSearch() {
      console.log('click search.')
    }
  },
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/variables.less";

.tab-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.more,
.search {
  width: 20%;
}

.options {
  display: flex;
  justify-content: space-around;
  width: 60%;

  #nav {
    width: 100%;

    .swiper-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25%;
      font-size: @font-size-medium;
      text-align: center;
      color: #999;
    }
  }
}
</style>