/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-04-05 11:39:53
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/lbx',
    name: '报修管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/bx/view/veHqBaoxiu/baoxiuApply',
        name: '报修登记',
        icon: 'icon-weixiu',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqBaoxiu/baoxiuApply')
      },
      {
        path: '/module/logistics/bx/view/veHqBaoxiu/baoxiuAudit',
        name: '报修管理',
        icon: 'icon-guanli1',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqBaoxiu/baoxiuAudit')
      },
      {
        path: '/module/logistics/bx/view/veHqBaoxiu/baoxiuMy',
        name: '报修任务',
        icon: 'icon-guanli1',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqBaoxiu/baoxiuMy')
      }
    ]
  },
  {
    path: '/lwx',
    name: '维修管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/ct/view/veHqWeixiu/veHqWeixiuDj',
        name: '维修登记',
        icon: 'icon-weixiu',
        meta: {},
        component: () => import('@/module/logistics/ct/view/veHqWeixiu/veHqWeixiuDj')
      },
      {
        path: '/module/logistics/wx/view/veHqWeixiu/veHqWeixiu',
        name: '维修管理',
        icon: 'icon-guanli1',
        meta: {},
        component: () => import('@/module/logistics/ct/view/veHqWeixiu/veHqWeixiu')
      }
    ]
  }
];
