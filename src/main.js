import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

Vue.filter('setWH', (url, arg) => {
  return `${url}?param=wyh`.replace(/wyh/, arg)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
