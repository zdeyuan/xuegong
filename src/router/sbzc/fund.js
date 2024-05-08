/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-26 21:36:50
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/fund',
    name: '资产管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/sbzc/fund/view/veSbzcZcAsset/veSbzcZcAsset',
        name: '固定资产管理',
        icon: 'icon-wupin il',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcAsset/veSbzcZcAsset')
      },
      {
        path: '/module/sbzc/fund/view/veSbzcZcApply/veSbzcZcApply',
        name: '资产借领查询',
        icon: 'icon-lingqu lc',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcApply/veSbzcZcApply')
      },
      {
        path: '/module/sbzc/fund/view/veSbzcZcRevert/veSbzcZcRevert',
        name: '资产归还查询',
        icon: 'icon-jieyong il',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcRevert/veSbzcZcRevert')
      },
      {
        path: '/module/sbzc/fund/view/veSbzcZcRetire/veSbzcZcRetire',
        name: '资产报废查询',
        icon: 'icon-baofei it',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcRetire/veSbzcZcRetire')
      },
      {
        path: '/module/sbzc/fund/view/veSbzcZcAllocate/veSbzcZcAllocate',
        name: '资产调拨查询',
        icon: 'icon-tiaobodan il',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcAllocate/veSbzcZcAllocate')
      },
      {
        path: '/module/sbzc/fund/view/veSbzcZcMaintain/veSbzcZcMaintain',
        name: '资产维修查询',
        icon: 'icon-weixiu il ',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcMaintain/veSbzcZcMaintain')
      },
      {
        path: '/module/sbzc/fund/view/veSbzcZcCategory/veSbzcZcCategory',
        name: '资产分类设置',
        icon: 'icon-shenqing it',
        meta: {},
        component: () => import('@/module/sbzc/fund/view/veSbzcZcCategory/veSbzcZcCategory')
      }
    ]
  }
];
