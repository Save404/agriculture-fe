// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

//import axios from 'axios'

import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import './assets/global.css'

import BottomFooter from './components/HomeComponents/BottomFooter'

import './util/axios'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.component('bottom-footer', BottomFooter)
Vue.config.productionTip = false
/*
axios.defaults.withCredentials = true
axios.defaults.headers['conten-type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios
*/
router.beforeEach((to, from, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  if(to.path === '/' || sessionStorage.user) {
    next()
  } else {
    if(!store.state.user && (to.path === '/Home' || to.path === '/NcpRegister')) {
      next({path:'/'})
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
