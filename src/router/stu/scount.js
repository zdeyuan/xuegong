/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-10 21:20:23
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/scount',
    name: '统计管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/base/view/studentCount',
        name: '学生信息统计',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/base/view/studentCount')
      },
      // {
      //   path: '/module/stu/stu/view/checkCount',
      //   name: '考勤统计',
      //   icon: 'icon-baofei',
      //   meta: {},
      //   component: () => import('@/module/stu/stu/view/checkCount')
      // },
      {
        path: '/module/stu/kqtj/view/stuAttendCount',
        name: '考勤统计',
        icon: 'icon-baofei',
        meta: {},
        component: () => import('@/module/stu/kqtj/view/veStuAttendCount')
      },
      {
        path: '/module/stu/stu/view/rewardCount',
        name: '奖惩统计',
        icon: 'icon-yiliao',
        meta: {},
        component: () => import('@/module/stu/stu/view/rewardCount')
      }
    ]
  }
];
