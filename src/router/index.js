import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/Layout'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;

Vue.use(Router)

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
      import('@/views/login/NhLogin'),
  hidden: true
},
{
  path: '/mjlogin',
  name: 'mjLogin',
  component: () =>
      import('@/views/login/MjLogin'),
  hidden: true
},
{
  path: '/govlogin',
  name: 'govLogin',
  component: () =>
      import('@/views/login/GovLogin'),
  hidden: true
},
{
  path: '/nhregister',
  name: 'nhRegister',
  component: () =>
      import('@/views/register/NhRegister'),
  hidden: true
},
{
  path: '/mjregister',
  name: 'mjRegister',
  component: () =>
      import('@/views/register/MjRegister'),
  hidden: true
},
{
  path: '/404',
  component: () =>
      import('@/views/404'),
  hidden: true
},
{
  path: '',
  component: Layout,
  redirect: 'dashboard',
  children: [{
    path: 'dashboard',
    component: () =>
        import('@/views/dashboard/index'),
    name: 'dashboard',
    meta: { title: '首页', icon: 'dashboard', noCache: true }
  }]
}
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
        import('@/views/detail/NhDetail'),
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
        import('@/views/detail/MjDetail'),
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
        import('@/views/ncp/NcpForMj'),
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
        import('@/views/ncp/NcpForNh'),
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
        import('@/views/ncp/NcpRegister'),
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
        import('@/views/ncp/NcpSingle'),
    meta: { title: '农产品修改', icon: 'form', roles: ['NH'] }
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
        import('@/views/agriculturalCondition/create'),
    meta: { title: '农情上报', icon: 'edit', roles: ['NH'] }
  }]
},
{
  path: '/purchase',
  component: Layout,
  meta: {
    title: '产品求购',
    icon: 'example',
    roles: ['NH', 'MJ']
  },
  children: [{
    path: 'create',
    name: 'purchaseCreate',
    component: () =>
          import('@/views/purchase/PurchaseCreate'),
    meta: { title: '创建求购', icon: 'edit', roles: ['NH', 'MJ'] }
  },
  {
    path: 'list',
    name: 'purchaseList',
    component: () =>
          import('@/views/purchase/PurchaseList'),
    meta: { title: '个人列表', icon: 'list', roles: ['NH', 'MJ'] }
  },
  {
    path: 'all',
    name: 'purchaseAllList',
    component: () =>
          import('@/views/purchase/PurchaseAllList'),
    meta: { title: '所有列表', icon: 'list', roles: ['NH'] }
  },
  {
    path: 'edit/:id',
    name: 'purchaseEdit',
    hidden: true,
    component: () =>
          import('@/views/purchase/PurchaseEdit'),
    meta: { title: '编辑求购信息', icon: 'edit', roles: ['NH', 'MJ'] }
  }
  ]
},
{
  path: '/contract',
  component: Layout,
  hidden: true,
  meta: { roles: ['NH', 'MJ'] },
  children: [{
    path: 'create',
    name: 'contractCreate',
    component: () =>
          import('@/views/contract/ContractCreate'),
    meta: { title: '合同创建', icon: 'edit', roles: ['NH', 'MJ'] }
  },
  {
    path: 'edit/:id',
    name: 'contractEdit',
    component: () =>
          import('@/views/contract/ContractEdit'),
    meta: { title: '合同编辑', icon: 'edit', roles: ['NH', 'MJ'] }
  }
  ]
},
{
  path: '/contract',
  component: Layout,
  meta: { roles: ['NH', 'MJ'] },
  children: [{
    path: 'list',
    name: 'contractList',
    component: () =>
        import('@/views/contract/ContractList'),
    meta: { title: '合同列表', icon: 'table', roles: ['NH', 'MJ'] }
  }]
},
{
  path: '/notice',
  component: Layout,
  meta: { title: '公告', icon: 'example', roles: ['GOV', 'NH', 'MJ'] },
  children: [{
    path: 'create',
    name: 'noticeCreate',
    component: () =>
        import('@/views/notice/NoticeCreate'),
    meta: { title: '发布公告', icon: 'edit', roles: ['GOV'] }
  },
  {
    path: 'list',
    name: 'noticeList',
    component: () =>
        import('@/views/notice/NoticeList'),
    meta: { title: '公告列表', icon: 'list', roles: ['GOV', 'NH', 'MJ'] }
  },
  {
    path: 'detail/:id',
    name: 'noticeDetail',
    hidden: true,
    component: () =>
        import('@/views/notice/NoticeDetail'),
    meta: { title: '公告详情', icon: 'eye', roles: ['GOV', 'NH', 'MJ'] }
  },
  {
    path: 'edit/:id',
    name: 'noticeEdit',
    hidden: true,
    component: () =>
        import('@/views/notice/NoticeEdit'),
    meta: { title: '公告编辑', icon: 'edit', roles: ['GOV', 'NH', 'MJ'] }
  }]
},
{ path: '*', redirect: '/404', hidden: true }
]
