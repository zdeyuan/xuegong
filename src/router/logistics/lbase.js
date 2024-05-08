/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-06 23:04:21
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/lbase',
    name: '基础设置',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/base/view/veHqBgwpfl/veHqBgwpfl',
        name: '办公物品分类',
        icon: 'icon-gongzuo',
        meta: {},
        component: () => import('@/module/logistics/base/view/veHqBgwpfl/veHqBgwpfl')
      },
      {
        path: '/module/logistics/base/view/veHqCangku/veHqCangku',
        name: '仓库管理',
        icon: 'icon-cangku',
        meta: {},
        component: () => import('@/module/logistics/base/view/veHqCangku/veHqCangku')
      }
    ]
  }
];
