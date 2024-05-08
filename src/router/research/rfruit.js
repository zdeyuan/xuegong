/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:38:47
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-25 23:18:20
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/rfruit',
    name: '科研成果管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rproject/view/gain/veJkyGainKy',
        name: '成果管理',
        meta: {},
        icon: 'icon-chengguo',
        component: () => import('@/module/research/rproject/view/gain/veJkyGainKy')
      },
      {
        path: '/module/research/rproject/view/gain/veJkyGainCount',
        name: '成果统计',
        meta: {},
        icon: 'icon-chengguo1',
        component: () => import('@/module/research/rproject/view/gain/veJkyGainCount')
      }
    ]
  },
  {
    path: '/rreport',
    name: '科研业绩上报',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rpaper/view/report/veJkyReportMy',
        name: '业绩上报',
        meta: {},
        icon: 'icon-chengguo',
        component: () => import('@/module/research/rpaper/view/report/veJkyReportMy')
      },
      {
        path: '/module/research/rpaper/view/report/veJkyReportAdmin',
        name: '上报管理',
        meta: {},
        icon: 'icon-chengguo1',
        component: () => import('@/module/research/rpaper/view/report/veJkyReportAdmin')
      },
      {
        path: '/module/research/rpaper/view/report/userInfo',
        name: '个人信息',
        meta: {},
        icon: 'icon-renyuan',
        component: () => import('@/module/research/rpaper/view/report/userInfo')
      }
    ]
  }
];
