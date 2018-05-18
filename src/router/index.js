import Vue from 'vue'
import Router from 'vue-router'
import FarmerLogin from '@/components/FarmerLogin'
import FarmerRegister from '@/components/FarmerRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: FarmerLogin
    },
    {
      path: '/FarmerRegister',
      name: 'FarmerRegister',
      component: FarmerRegister
    }
  ]
})
