import Vue from 'vue'
import Router from 'vue-router'

import mineRouter from './mine'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  path: process.env.BASE_URL,
  routes: [
    mineRouter
  ]
})