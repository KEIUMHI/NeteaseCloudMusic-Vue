import Vue from 'vue'
import Router from 'vue-router'
import { loginStatus } from '@/api/login'

import loginRouter from './login/login'
import phonePasswordRouter from './phone-password/phone-password'
import appMainRouter from './app-main/app-main'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  path: process.env.BASE_URL,
  routes: [
    loginRouter,
    phonePasswordRouter,
    appMainRouter
  ]
})
/**
 * 全局前置路由守卫
 * 判断是否已登陆
 * 没有登陆则跳转到登陆页
 */
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (from.name === 'login' && to.name === 'phone-password') {
      next()
    } else {
      loginStatus().then(res => {
        console.log(res)
        next()
      }).catch(err => {
        console.error('loginStatusError:', err.response)
        next({
          name: 'login'
        })
      })
    }
  } else {
    next()
  }
})

export default router