import Vue from 'vue'
import Router from 'vue-router'
import {
  loginStatus
} from 'api/login'

import loginRouter from './login/index'
import checkingRouter from './checking/index'
import indexRouter from './index/index'
import rankRouter from './rank/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  path: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/index'
    },
    loginRouter,
    checkingRouter,
    indexRouter,
    rankRouter
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'checking') {
    if (from.name === 'login') {
      next()
      return
    }
    loginStatus().then(res => {
      console.log('loginStatus', res)
      next()
    }).catch(err => {
      console.error('loginStatusError:', err.response)
      next({
        name: 'login'
      })
    })
  } else {
    next()
  }
})

export default router