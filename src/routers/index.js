import Vue from 'vue'
import Router from 'vue-router'

import mineRouter from './mine'
import findRouter from './find'
import cloudRouter from './cloud'
import videosRouter from './videos'


Vue.use(Router)

export default new Router ({
  mode: 'history',
  path: process.env.BASE_URL,
  routes: [
    mineRouter,
    findRouter,
    cloudRouter,
    videosRouter,
    { // 设定重定向页面为 find
      path: '/*',
      redirect: '/find'
    }
  ]
})