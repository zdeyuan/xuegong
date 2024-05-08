/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-06 23:13:57
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/lctfk',
    name: '餐厅检查反馈管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/ct/view/veHqItem/veHqItem',
        name: '检查项目管理',
        icon: 'icon-guanli1',
        meta: {},
        component: () => import('@/module/logistics/ct/view/veHqItem/veHqItem')
      },
      {
        path: '/module/logistics/ct/view/veHqCheck/veHqCheck',
        name: '录入反馈数据',
        icon: 'icon-shenqing',
        meta: {},
        component: () => import('@/module/logistics/ct/view/veHqCheck/veHqCheck')
      }
    ]
  }
];
