import Vue from 'vue'
import Router from 'vue-router'

import loginRouter from './login/login'
import appMainRouter from './app-main/app-main'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  path: process.env.BASE_URL,
  routes: [
    loginRouter,
    appMainRouter
  ]
})