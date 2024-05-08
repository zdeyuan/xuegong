/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-06 23:13:26
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/lrc',
    name: '日常管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/base/view/veHqUser/veHqUser',
        name: '人员管理',
        icon: 'icon-bumen1 i2',
        meta: {},
        component: () => import('@/module/logistics/base/view/veHqUser/veHqUser')
      },
      {
        path: '/module/logistics/base/view/veHqYiliao/veHqYiliao',
        name: '医疗记录',
        icon: 'icon-yiliao',
        meta: {},
        component: () => import('@/module/logistics/base/view/veHqYiliao/veHqYiliao')
      },
      {
        path: '/module/logistics/base/view/veHqAnbao/veHqAnbao',
        name: '安保记录',
        icon: 'icon-anbao',
        meta: {},
        component: () => import('@/module/logistics/base/view/veHqAnbao/veHqAnbao')
      }
    ]
  }
];
