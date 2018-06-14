import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import FarmerLogin from '@/views/nh/FarmerLogin'
import FarmerRegister from '@/views/nh/FarmerRegister'
import FarmerDetail from '@/views/nh/FarmerDetail'
import MjLogin from '@/views/mj/MjLogin'
import MjRegister from '@/views/mj/MjRegister'

import NcpRegister from '@/views/ncp/NcpRegister'
import NcpSingle from '@/views/ncp/NcpSingle'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'FarmerLogin',
      component: FarmerLogin,
      meta: {
        title: '农户登录'
      }
    },
    {
      path: '/nh/register',
      name: 'FarmerRegister',
      component: FarmerRegister,
      meta: {
        title: '农户注册'
      }
    },
    {
      path: '/nh',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/nh/detail',
      name: 'FarmerDetail',
      component: FarmerDetail,
      meta: {
        title: '个人资料设置(农户)'
      }
    },

    {
      path: '/nh/ncpregister',
      name: 'NcpRegister',
      component: NcpRegister,
      meta: {
        title: '农产品发布'
      }
    },
    {
      path: '/nh/ncpsingle',
      name: 'NcpSingle',
      component: NcpSingle,
      meta: {
        title: '农产品详情'
      }
    },
    {
      path: '/mj/login',
      name: 'MjLogin',
      component: MjLogin,
      meta: {
        title: '买家登录'
      }
    },
    {
      path: '/mj/register',
      name: 'MjRegister',
      component: MjRegister,
      meta: {
        title: '买家注册'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    if (!sessionStorage.user) {
      if (to.path === '/' || to.path === '/nh/register' || to.path === '/mj/login' || to.path === '/mj/register') {
        next()
      } else {
        next({ path: '/' })
      }
    } else {
      next()
    }
  } else {
    next({ path: '/' })
  }
})

export default router
