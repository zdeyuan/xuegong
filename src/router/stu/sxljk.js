/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-10 21:22:32
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/sbx',
    name: '保险理赔管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/bxxl/view/veStuInsuranceKnowledgeType/veStuInsuranceKnowledgeType',
        name: '保险知识类型管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceKnowledgeType/veStuInsuranceKnowledgeType')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceKnowledge/veStuInsuranceKnowledge',
        name: '保险知识管理',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceKnowledge/veStuInsuranceKnowledge')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceType/veStuInsuranceType',
        name: '保险类型管理',
        icon: 'icon-tiaobodan',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceType/veStuInsuranceType')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceRecord/veStuInsuranceRecord',
        name: '保险记录管理',
        icon: 'icon-bumen1',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceRecord/veStuInsuranceRecord')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceClaims/veStuInsuranceClaims',
        name: '学生理赔管理',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceClaims/veStuInsuranceClaims')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceAsk/veStuInsuranceAskMy',
        name: '我的保险咨询',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceAsk/veStuInsuranceAskMy')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceAsk/veStuInsuranceAskAdmin',
        name: '保险咨询信息',
        icon: 'icon-changdi',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceAsk/veStuInsuranceAskAdmin')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceAudit/veStuInsuranceAuditApply',
        name: '保险申请',
        icon: 'icon-wupin',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceAudit/veStuInsuranceAuditApply')
      },
      {
        path: '/module/stu/bxxl/view/veStuInsuranceAudit/veStuInsuranceAuditShen',
        name: '保险缴费审核',
        icon: 'icon-tiaobodan',
        meta: {},
        component: () => import('@/module/stu/bxxl/view/veStuInsuranceAudit/veStuInsuranceAuditShen')
      }
    ]
  }
];
