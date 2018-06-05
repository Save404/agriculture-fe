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

const router = new Router({
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
      path: '/ml/register',
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
  }
  if (to.path === '/' || sessionStorage.user) {
    next()
  } else {
    if (!sessionStorage.user && (to.path === '/nh' || to.path === '/nh/ncpregister' || to.path === '/nh/ncpsingle' || to.path === '/nh/detail')) {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

export default router
