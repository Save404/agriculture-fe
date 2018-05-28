import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import FarmerLogin from '@/components/LoginAndRegister/FarmerLogin'
import FarmerRegister from '@/components/LoginAndRegister/FarmerRegister'
import FarmerDetail from '@/components/LoginAndRegister/FarmerDetail'
import MjLogin from '@/components/LoginAndRegister/MjLogin'
import MjRegister from '@/components/LoginAndRegister/MjRegister'
import NcpRegister from '@/components/NcpDetail/NcpRegister'

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
      path: '/FarmerDetail',
      name: 'FarmerDetail',
      component: FarmerDetail
    },
    {
      path: '/MjLogin',
      name: 'MjLogin',
      component: MjLogin
    },
    {
      path: '/MjRegister',
      name: 'MjRegister',
      component: MjRegister
    },
    {
      path: '/NcpRegister',
      name: 'NcpRegister',
      component: NcpRegister
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
