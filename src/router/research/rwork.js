/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:39:10
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-20 22:52:37
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/rwork',
    name: '教科研工作管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/research/rwork/view/meetPlace/veJkyMeetPlace',
        name: '会议场地管理',
        meta: {},
        icon: 'icon-fangjian',
        component: () => import('@/module/research/rwork/view/meetPlace/veJkyMeetPlace')
      },
      {
        path: '/module/research/rwork/view/meet/veJkyMeetMy',
        name: '我的会议',
        meta: {},
        icon: 'icon-wode-copy',
        component: () => import('@/module/research/rwork/view/meet/veJkyMeetMy')
      },
      {
        path: '/module/research/rwork/view/meet/veJkyMeetAdmin',
        name: '会议申请管理',
        meta: {},
        icon: 'icon-guanli1',
        component: () => import('@/module/research/rwork/view/meet/veJkyMeetAdmin')
      },
      {
        path: '/module/research/rwork/view/meet/veJkyMeetShen',
        name: '会议申请审核',
        meta: {},
        icon: 'icon-shenqing',
        component: () => import('@/module/research/rwork/view/meet/veJkyMeetShen')
      },
      {
        path: '/module/research/rwork/view/meetRemind/veJkyMeetRemind',
        name: '会议通知查询',
        meta: {},
        icon: 'icon-tongzhi',
        component: () => import('@/module/research/rwork/view/meetRemind/veJkyMeetRemind')
      },
      {
        path: '/module/research/rwork/view/meetSummary/veJkyMeetSummary',
        name: '会议纪要查询',
        meta: {},
        icon: 'icon-huiyi',
        component: () => import('@/module/research/rwork/view/meetSummary/veJkyMeetSummary')
      },
      {
        path: '/module/research/rwork/view/guide/veJkyGuide',
        name: '研究指导',
        meta: {},
        icon: 'icon-yanjiu',
        component: () => import('@/module/research/rwork/view/guide/veJkyGuide')
      },
      {
        path: '/module/research/rwork/view/resource/veJkyResource',
        name: '资源引入',
        meta: {},
        icon: 'icon-ziyuan',
        component: () => import('@/module/research/rwork/view/resource/veJkyResource')
      },
      {
        path: '/module/research/rproject/view/projectPlan/veJkyProjectPlan',
        name: '项目计划管理',
        meta: {},
        icon: 'icon-lunwentijiao',
        component: () => import('@/module/research/rproject/view/projectPlan/veJkyProjectPlan')
      },
      {
        path: '/module/research/rproject/view/projectWork/veJkyProjectWork',
        name: '项目工作管理',
        meta: {},
        icon: 'icon-gongzuo',
        component: () => import('@/module/research/rproject/view/projectWork/veJkyProjectWork')
      }
    ]
  }
];
