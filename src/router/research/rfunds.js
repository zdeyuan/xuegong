/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:38:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-20 22:57:26
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/rfunds',
    name: '经费管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rfunds/view/fundCheckIntroduce/fundCheckIntroduce',
        name: '经费审批说明',
        meta: {},
        icon: 'icon-shuoming',
        component: () => import('@/module/research/rfunds/view/fundCheckIntroduce/fundCheckIntroduce')
      },
      {
        path: '/module/research/rfunds/view/fundType/veJkyFundType',
        name: '经费审批类型',
        meta: {},
        icon: 'icon-shenpi',
        component: () => import('@/module/research/rfunds/view/fundType/veJkyFundType')
      },
      {
        path: '/module/research/rfunds/view/fund/veJkyFundMy',
        name: '我的预算',
        meta: {},
        icon: 'icon-yusuan',
        component: () => import('@/module/research/rfunds/view/fund/veJkyFundMy')
      },
      {
        path: '/module/research/rfunds/view/fund/veJkyFundShen',
        name: '预算审批',
        meta: {},
        icon: 'icon-add-funding',
        component: () => import('@/module/research/rfunds/view/fund/veJkyFundShen')
      },
      {
        path: '/module/research/rfunds/view/fundClaim/veJkyFundClaimMy',
        name: '我的报销',
        meta: {},
        icon: 'icon-add-funding',
        component: () => import('@/module/research/rfunds/view/fundClaim/veJkyFundClaimMy')
      },
      {
        path: '/module/research/rfunds/view/fundClaim/veJkyFundClaimShen',
        name: '报销审批',
        meta: {},
        icon: 'icon-baoxiao',
        component: () => import('@/module/research/rfunds/view/fundClaim/veJkyFundClaimShen')
      },
      {
        path: '/module/research/rfunds/view/fund/veJkyFundCount',
        name: '经费统计',
        meta: {},
        icon: 'icon-tongji',
        component: () => import('@/module/research/rfunds/view/fund/veJkyFundCount')
      }
    ]
  }
];
