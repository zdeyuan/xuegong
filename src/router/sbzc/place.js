/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-26 21:38:46
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/place',
    name: '场地管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/sbzc/place/view/veSbzcCdInfo/veSbzcCdInfo',
        name: '场地日常管理',
        icon: 'icon-changdi ic',
        meta: {},
        component: () => import('@/module/sbzc/place/view/veSbzcCdInfo/veSbzcCdInfo')
      },
      {
        path: '/module/sbzc/place/view/veSbzcCdCategory/veSbzcCdCategory',
        name: '场地类别管理',
        icon: 'icon-gengduo it',
        meta: {},
        component: () => import('@/module/sbzc/place/view/veSbzcCdCategory/veSbzcCdCategory')
      },
      {
        path: '/module/sbzc/place/view/veSbzcCdApply/veSbzcCdApply',
        name: '场地借用管理',
        icon: 'icon-lingqu ic',
        meta: {},
        component: () => import('@/module/sbzc/place/view/veSbzcCdApply/veSbzcCdApply')
      },
      {
        path: '/module/sbzc/place/view/veSbzcCdRevert/veSbzcCdRevert',
        name: '场地归还管理',
        icon: 'icon-jieyong il',
        meta: {},
        component: () => import('@/module/sbzc/place/view/veSbzcCdRevert/veSbzcCdRevert')
      }
    ]
  }
];
