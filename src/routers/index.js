import Vue from 'vue'
import Router from 'vue-router'

import loginRouter from './login/login'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  path: process.env.BASE_URL,
  routes: [
    loginRouter
  ]
})