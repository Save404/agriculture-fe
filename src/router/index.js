import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [{
    path: '/nhlogin',
    name: 'nhLogin',
    component: () =>
      import ('@/views/nh/NhLogin'),
    hidden: true
  },
  {
    path: '/mjlogin',
    name: 'mjLogin',
    component: () =>
      import ('@/views/mj/MjLogin'),
    hidden: true
  },
  {
    path: '/nhregister',
    name: 'nhRegister',
    component: () =>
      import ('@/views/nh/NhRegister'),
    hidden: true
  },
  {
    path: '/mjregister',
    name: 'mjRegister',
    component: () =>
      import ('@/views/mj/MjRegister'),
    hidden: true
  },
  {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () =>
        import ('@/views/dashboard/index'),
      name: 'dashboard',
      meta: { title: '首页', icon: 'dashboard', noCache: true }
    }]
  },
  {
    path: '/nh',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'contract',
      name: 'PSContract',
      component: () =>
        import ('@/views/contract/index'),
      meta: { title: '合同签订', icon: 'edit', roles: ['NH'] }
    }]
  },
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{
    path: '/nh',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'detail',
      name: 'nhDetail',
      component: () =>
        import ('@/views/nh/NhDetail'),
      meta: { title: '个人资料', icon: 'user', roles: ['NH'] }
    }]
  },
  {
    path: '/mj',
    component: Layout,
    meta: { roles: ['MJ'] },
    children: [{
      path: 'detail',
      name: 'mjDetail',
      component: () =>
        import ('@/views/mj/MjDetail'),
      meta: { title: '个人资料', icon: 'user', roles: ['MJ'] }
    }]
  },
  {
    path: '/ncp',
    component: Layout,
    meta: { roles: ['MJ'] },
    children: [{
      path: 'ncpformj',
      name: 'NcpForMj',
      component: () =>
        import ('@/views/ncp/NcpForMj'),
      meta: { title: '农产品列表', icon: 'table', roles: ['MJ'] }
    }]
  },
  {
    path: '/ncp',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'ncpfornh',
      name: 'NcpForNh',
      component: () =>
        import ('@/views/ncp/NcpForNh'),
      meta: { title: '个人农产品', icon: 'table', roles: ['NH'] }
    }]
  },
  {
    path: '/ncp',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'ncpregister',
      name: 'ncpRegister',
      component: () =>
        import ('@/views/ncp/NcpRegister'),
      meta: { title: '农产品登记', icon: 'form', roles: ['NH'] }
    }]
  },
  {
    path: '/ncp',
    component: Layout,
    hidden: true,
    meta: { roles: ['NH'] },
    children: [{
      path: 'ncpsingle',
      name: 'ncpSingle',
      component: () =>
        import ('@/views/ncp/NcpSingle'),
      meta: { title: '农产品修改', icon: 'form', roles: ['NH'] }
    }]
  },
  {
    path: '/nh',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'purchase',
      name: 'nhPurchase',
      component: () =>
        import ('@/views/nh/NhPurchase'),
      meta: { title: '原料求购', icon: 'eye', roles: ['NH'] }
    }]
  },
  {
    path: '/nh',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'create',
      name: 'createArticle',
      component: () =>
        import ('@/views/agriculturalCondition/create'),
      meta: { title: '农情上报', icon: 'edit', roles: ['NH'] }
    }]
  },
  {
    path: '/mj',
    component: Layout,
    meta: { roles: ['MJ'] },
    children: [{
      path: 'purchase',
      name: 'mjPurchase',
      component: () =>
        import ('@/views/mj/MjPurchase'),
      meta: { title: '农产品求购', icon: 'eye', roles: ['MJ'] }
    }]
  },
  /*{
    path: '/nh',
    component: Layout,
    meta: { roles: ['NH'] },
    children: [{
      path: 'contract',
      name: 'PSContract',
      component: () =>
        import ('@/views/contract/index'),
      meta: { title: '合同签订', icon: 'edit', roles: ['NH'] }
    }]
  },*/
  { path: '*', redirect: '/404', hidden: true }
]
