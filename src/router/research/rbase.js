/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-20 12:58:22
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/rbase',
    name: '基础管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rbase/view/organize/veJkyOrganize',
        name: '教科研组管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/research/rbase/view/organize/veJkyOrganize')
      },
      {
        path: '/module/research/rbase/view/level/levelList',
        name: '项目级别管理',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/research/rbase/view/level/levelList')
      },
      {
        path: '/module/research/rbase/view/category/veJkyCategory',
        name: '项目类型管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/research/rbase/view/category/veJkyCategory')
      },
      {
        path: '/module/research/rbase/view/user/veJkyUser',
        name: '人员管理',
        icon: 'icon-renyuan',
        meta: {},
        component: () => import('@/module/research/rbase/view/user/veJkyUser')
      },
      {
        path: '/module/research/rbase/view/admin/veJkyAdmin',
        name: '经费审核人',
        icon: 'icon-zujian',
        meta: {},
        component: () => import('@/module/research/rbase/view/admin/veJkyAdmin')
      }
    ]
  }
];
