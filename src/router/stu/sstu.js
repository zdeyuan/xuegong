/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-10 21:23:06
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/scheck',
    name: '考勤管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/stu/view/veStuCheckType/veStuCheckType',
        name: '考勤类型',
        icon: 'icon-fangjian1',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuCheckType/veStuCheckType')
      },
      {
        path: '/module/stu/stu/view/veStuCheck/veStuCheck',
        name: '考勤管理',
        icon: 'icon-louceng',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuCheck/veStuCheck')
      },
      {
        path: '/module/stu/stu/view/veStuLeave/veStuLeave',
        name: '请假审批',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuLeave/veStuLeave')
      },
      {
        path: '/module/stu/stu/view/veStuCheck/veStuCheckBj',
        name: '班级考勤',
        icon: 'icon-leibie',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuCheck/veStuCheckBj')
      },
      {
        path: '/module/stu/stu/view/veStuCheck/veStuCheckKt',
        name: '课堂考勤',
        icon: 'icon-jiancha',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuCheck/veStuCheckKt')
      }
    ]
  },

  {
    path: '/sreward',
    name: '奖惩管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/stu/view/veStuRewardType/veStuRewardType',
        name: '奖励类型',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuRewardType/veStuRewardType')
      },
      {
        path: '/module/stu/stu/view/veStuPunishType/veStuPunishType',
        name: '惩罚类型',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuPunishType/veStuPunishType')
      },
      {
        path: '/module/stu/stu/view/veStuReward/veStuReward',
        name: '奖励管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuReward/veStuReward')
      },
      {
        path: '/module/stu/stu/view/veStuPunish/veStuPunish',
        name: '惩罚管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuPunish/veStuPunish')
      }
    ]
  },
  {
    path: '/sjxj',
    name: '奖助学金管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/stu/view/veStuScholarshipType/veStuScholarshipType',
        name: '奖学金类型',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuScholarshipType/veStuScholarshipType')
      },
      {
        path: '/module/stu/stu/view/veStuStipendType/veStuStipendType',
        name: '助学金类型',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuStipendType/veStuStipendType')
      },
      {
        path: '/module/stu/stu/view/veStuScholarship/veStuScholarship',
        name: '奖学金管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuScholarship/veStuScholarship')
      },
      {
        path: '/module/stu/stu/view/veStuStipend/veStuStipendMy',
        name: '助学金管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuStipend/veStuStipendMy')
      },
      {
        path: '/module/stu/stu/view/veStuStipend/veStuStipendShen',
        name: '助学金审核',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/stu/view/veStuStipend/veStuStipendShen')
      }
    ]
  },
  {
    path: '/knsgl',
    name: '困难生管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/base/view/veBaseStudent/stuKns',
        name: '困难生管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/base/view/veBaseStudent/stuKns')
      },
      {
        path: '/module/stu/base/view/veBaseStudent/stuKnsCount',
        name: '困难生统计',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/base/view/veBaseStudent/stuKnsCount')
      }
    ]
  },
  {
    path: '/qgjxgl',
    name: '勤工俭学管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/stu/view/hqStuPosition/hqStuPosition',
        name: '职位管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/stu/view/hqStuPosition/hqStuPosition')
      },
      {
        path: '/module/stu/stu/view/hqStuPositionApply/positionApply',
        name: '勤工俭学',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/stu/view/hqStuPositionApply/positionApply')
      },
      {
        path: '/module/stu/stu/view/hqStuPositionApply/positionShen',
        name: '职位申请审批',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/stu/view/hqStuPositionApply/positionShen')
      }
    ]
  }
];
