import Vue from 'vue'
import Router from 'vue-router'
import FarmerLogin from '@/components/FarmerLogin'
import FarmerRegister from '@/components/FarmerRegister'
import NcpRegister from '@/components/NcpRegister'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'FarmerLogin',
      component: FarmerLogin
    },
    {
      path: '/FarmerRegister',
      name: 'FarmerRegister',
      component: FarmerRegister
    },
    {
      path: '/NcpRegister',
      name: 'NcpRegister',
      component: NcpRegister
    }
  ]
})
