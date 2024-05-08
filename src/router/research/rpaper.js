/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:36:57
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-20 13:06:47
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/rpaper',
    name: '论文管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rpaper/view/paper/veJkyPaper',
        name: '论文管理',
        meta: {},
        icon: 'icon-lunwentijiao',
        component: () => import('@/module/research/rpaper/view/paper/veJkyPaper')
      },
      {
        path: '/module/research/rpaper/view/paper/veJkyPaperCount',
        name: '按部门统计',
        meta: {},
        icon: 'icon-bumen',
        component: () => import('@/module/research/rpaper/view/paper/veJkyPaperCount')
      }
    ]
  }
];
