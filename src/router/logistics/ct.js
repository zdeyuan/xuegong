/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-05 15:20:08
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/lct',
    name: '餐厅管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/ct/view/veHqCanting/veHqCanting',
        name: '餐厅管理',
        icon: 'icon-canting-tianchong',
        meta: {},
        component: () => import('@/module/logistics/ct/view/veHqCanting/veHqCanting')
      },
      {
        path: '/module/logistics/ct/view/veHqChuangkou/veHqChuangkou',
        name: '窗口管理',
        icon: 'icon--addressbookdirectoryphonephonebookt',
        meta: {},
        component: () => import('@/module/logistics/ct/view/veHqChuangkou/veHqChuangkou')
      }
    ]
  }
];
