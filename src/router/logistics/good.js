/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-05-19 22:20:25
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/lgood',
    name: '办公物品管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/good/view/veHqWupin/veHqWupin',
        name: '物品管理',
        icon: 'icon-wupin',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqWupin/veHqWupin')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/churuJy',
        name: '借用查询',
        icon: 'icon-jieyong',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/churuJy')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/churuLy',
        name: '领用查询',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/churuLy')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/churuBf',
        name: '报废查询',
        icon: 'icon-baofei',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/churuBf')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/churuDb',
        name: '调拨查询',
        icon: 'icon-tiaobodan',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/churuDb')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/churuKc',
        name: '库存查询',
        icon: 'icon-cangku ku2',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/churuKc')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/rukuApply',
        name: '申请记录',
        icon: 'icon-cangku ku2',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/rukuApply')
      },
      {
        path: '/module/logistics/good/view/veHqChuruku/rukuShen',
        name: '物品审批',
        icon: 'icon-cangku ku2',
        meta: {},
        component: () => import('@/module/logistics/good/view/veHqChuruku/rukuShen')
      }
    ]
  },
  {
    path: '/ldhp',
    name: '低耗品管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/logistics/bx/view/veHqHaopin/veHqHaopin',
        name: '低耗品管理',
        icon: 'icon-wupin',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqHaopin/veHqHaopin')
      },
      {
        path: '/module/logistics/bx/view/veHqHaopinCr/haopinChuku',
        name: '领用查询',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqHaopinCr/haopinChuku')
      },
      {
        path: '/module/logistics/bx/view/veHqHaopinCr/haopinRuku',
        name: '入库查询',
        icon: 'icon-baofei',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqHaopinCr/haopinRuku')
      },
      {
        path: '/module/logistics/bx/view/veHqHaopinCr/haopinCount',
        name: '低耗品统计',
        icon: 'icon-cangku ku2',
        meta: {},
        component: () => import('@/module/logistics/bx/view/veHqHaopinCr/haopinCount')
      }
    ]
  }
];
