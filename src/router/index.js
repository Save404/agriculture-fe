import Vue from 'vue'
import Router from 'vue-router'
import FarmerLogin from '@/components/FarmerLogin'
import FarmerRegister from '@/components/FarmerRegister'
import NcpRegister from '@/components/NcpRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/FarmerLogin',
      name: 'FarmerLogin',
      component: FarmerLogin
    },
    {
      path: '/FarmerRegister',
      name: 'FarmerRegister',
      component: FarmerRegister
    },
    {
      path: '/',
      name: 'NcpRegister',
      component: NcpRegister
    }
  ]
})
