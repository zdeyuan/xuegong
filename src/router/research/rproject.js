/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:39:04
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-20 22:53:56
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/rproject',
    name: '项目管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rproject/view/project/veJkyProjectBase',
        name: '项目基本信息',
        meta: {},
        icon: 'icon-guanli',
        component: () => import('@/module/research/rproject/view/project/veJkyProjectBase')
      },
      {
        path: '/module/research/rproject/view/project/veJkyProjectShen',
        name: '项目信息审核',
        meta: {},
        icon: 'icon-xiangmu1',
        component: () => import('@/module/research/rproject/view/project/veJkyProjectShen')
      },
      {
        path: '/module/research/rproject/view/project/veJkyProjectUser',
        name: '项目人员管理',
        meta: {},
        icon: 'icon-qunzu',
        component: () => import('@/module/research/rproject/view/project/veJkyProjectUser')
      },
      {
        path: '/module/research/rproject/view/gain/veJkyGain',
        name: '成果管理',
        meta: {},
        icon: 'icon-chengguo',
        component: () => import('@/module/research/rproject/view/gain/veJkyGain')
      },
      {
        path: '/module/research/rproject/view/project/veJkyProjectCount',
        name: '项目统计',
        meta: {},
        icon: 'icon-tongji1',
        component: () => import('@/module/research/rproject/view/project/veJkyProjectCount')
      },
      {
        path: '/module/research/rproject/view/project/veJkyProjectMy',
        name: '我的项目',
        meta: {},
        icon: 'icon-xiangmu1',
        component: () => import('@/module/research/rproject/view/project/veJkyProjectMy')
      }
    ]
  }
];
