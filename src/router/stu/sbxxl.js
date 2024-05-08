/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-10 21:19:38
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/sxljk',
    name: '心理健康管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/xljk/view/hqStuHealthKnowledgeType/hqStuHealthKnowledgeType',
        name: '健康知识类型',
        icon: 'icon-fangjian',
        meta: {},
        component: () => import('@/module/stu/xljk/view/hqStuHealthKnowledgeType/hqStuHealthKnowledgeType')
      },
      {
        path: '/module/stu/xljk/view/hqStuHealthKnowledge/hqStuHealthKnowledge',
        name: '心理健康知识',
        icon: 'icon-jiangbei',
        meta: {},
        component: () => import('@/module/stu/xljk/view/hqStuHealthKnowledge/hqStuHealthKnowledge')
      },
      {
        path: '/module/stu/xljk/view/hqStuHealthQuestion/hqStuHealthQuestion',
        name: '心理健康测试',
        icon: 'icon-cangku',
        meta: {},
        component: () => import('@/module/stu/xljk/view/hqStuHealthQuestion/hqStuHealthQuestion')
      },
      {
        path: '/module/stu/xljk/view/hqStuHealthActivities/hqStuHealthActivities',
        name: '心理健康活动',
        icon: 'icon-jieyong',
        meta: {},
        component: () => import('@/module/stu/xljk/view/hqStuHealthActivities/hqStuHealthActivities')
      },
      {
        path: '/module/stu/xljk/view/hqStuHealthUser/hqStuHealthUser',
        name: '心理健康记录',
        icon: 'icon-zhuanye',
        meta: {},
        component: () => import('@/module/stu/xljk/view/hqStuHealthUser/hqStuHealthUser')
      },
      {
        path: '/module/stu/xljk/view/veStuHealthAsk/veStuHealthAskMy',
        name: '我的心理咨询',
        icon: 'icon-anbao',
        meta: {},
        component: () => import('@/module/stu/xljk/view/veStuHealthAsk/veStuHealthAskMy')
      },
      {
        path: '/module/stu/xljk/view/veStuHealthAsk/veStuHealthAskAdmin',
        name: '心理咨询管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/xljk/view/veStuHealthAsk/veStuHealthAskAdmin')
      }
    ]
  }
];
