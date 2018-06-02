import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import FarmerLogin from '@/components/LoginAndRegister/FarmerLogin'
import FarmerRegister from '@/components/LoginAndRegister/FarmerRegister'
import FarmerDetail from '@/components/LoginAndRegister/FarmerDetail'
import MjLogin from '@/components/LoginAndRegister/MjLogin'
import MjRegister from '@/components/LoginAndRegister/MjRegister'
import NcpRegister from '@/components/NcpDetail/NcpRegister'

import NcpSingle from '@/components/NcpDetail/NcpSingle'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'FarmerLogin',
      component: FarmerLogin,
      meta: {
        title: '农户登录'
      }
    },
    {
      path: '/FarmerRegister',
      name: 'FarmerRegister',
      component: FarmerRegister,
      meta: {
        title: '农户注册'
      }
    },
    {
      path: '/FarmerDetail',
      name: 'FarmerDetail',
      component: FarmerDetail,
      meta: {
        title: '个人资料设置(农户)'
      }
    },
    {
      path: '/MjLogin',
      name: 'MjLogin',
      component: MjLogin,
      meta: {
        title: '买家登录'
      }
    },
    {
      path: '/MjRegister',
      name: 'MjRegister',
      component: MjRegister,
      meta: {
        title: '买家注册'
      }
    },
    {
      path: '/NcpSingle',
      name: 'NcpSingle',
      component: NcpSingle,
      meta: {
        title: '农产品详情'
      }
    },
    {
      path: '/NcpRegister',
      name: 'NcpRegister',
      component: NcpRegister,
      meta: {
        title: '农产品发布'
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    }
  ]
})
