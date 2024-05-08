/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-18 14:19:14
 */
import PageView from '@/core/layouts/PageView';
import IframeView from '@/core/layouts/IframeView';
export default [
  {
    path: '/sbase',
    name: '学籍管理',
    meta: {
      icon: 'table'
    },
    hidden: true,
    component: PageView,
    children: [
      /*       {
        path: '/module/stu/base/view/stuInfo',
        name: '学籍信息管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/base/view/stuInfo')
      }, */
      {
        path: '/module/stu/base/view/veBaseStudent/veBaseStudentXj',
        name: '学籍注册',
        icon: 'icon-fanhui2',
        meta: {},
        component: () => import('@/module/stu/base/view/veBaseStudent/veBaseStudentXj')
      },
      {
        path: '/module/stu/base/view/veBaseStudent/veBaseStudent',
        name: '学生信息维护',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/stu/base/view/veBaseStudent/veBaseStudent')
      },
      {
        path: '/module/stu/base/view/veStuXjAudit/veStuXjAudit',
        name: '审核学籍修改申请',
        icon: 'icon-add-funding',
        meta: {},
        component: () => import('@/module/stu/base/view/veStuXjAudit/veStuXjAudit')
      },
      {
        path: '/module/stu/base/view/stuChange',
        name: '学籍异动',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/base/view/stuChange')
      },
      {
        path: '/module/stu/base/view/veStuSemester/veStuSemester',
        name: '学期注册',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/base/view/veStuSemester/veStuSemester')
      }
    ]
  },

  {
    path: '/sbaseirmae',
    name: '学籍管理',
    meta: {
      icon: 'table'
    },
    hidden: true,
    component: IframeView,
    children: [
      /*       {
        path: '/module/stu/base/view/stuInfo',
        name: '学籍信息管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/base/view/stuInfo')
      }, */
      {
        path: '/frame/stu/base/view/veBaseStudent/veBaseStudentXj',
        name: '学籍注册',
        icon: 'icon-fanhui2',
        meta: {},
        component: () => import('@/module/stu/base/view/veBaseStudent/veBaseStudentXj')
      },
      {
        path: '/frame/stu/base/view/veBaseStudent/veBaseStudent',
        name: '学生信息维护',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/stu/base/view/veBaseStudent/veBaseStudent')
      },
      {
        path: '/frame/stu/base/view/veStuXjAudit/veStuXjAudit',
        name: '审核学籍修改申请',
        icon: 'icon-add-funding',
        meta: {},
        component: () => import('@/module/stu/base/view/veStuXjAudit/veStuXjAudit')
      },
      {
        path: '/frame/stu/base/view/stuChange',
        name: '学籍异动',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/base/view/stuChange')
      },
      {
        path: '/frame/stu/base/view/veStuSemester/veStuSemester',
        name: '学期注册',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/base/view/veStuSemester/veStuSemester')
      }
    ]
  }
];
