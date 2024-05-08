/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-10 22:46:45
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/sby',
    name: '毕业管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/biye/view/veStuGraduation/veStuGraduationClas',
        name: '毕业班级设置',
        icon: 'icon-jiebei',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/veStuGraduationClas')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationByzbhRule/veStuGraduationByzbhRule',
        name: '毕业证号规则设置',
        icon: 'icon-jiancha',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationByzbhRule/veStuGraduationByzbhRule')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditBzr',
        name: '班主任审核',
        icon: 'icon-leibie',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditBzr')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditCw',
        name: '财务审核',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditCw')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditCjy',
        name: '成绩审核',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditCjy')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditXsc',
        name: '学生处审核',
        icon: 'icon-jiancha1',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationAuditInfo/biyeAuditXsc')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationAuditConfig/veStuGraduationAuditConfig',
        name: '毕业审核设置',
        icon: 'icon-louyu',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationAuditConfig/veStuGraduationAuditConfig')
      },
      {
        path: '/module/stu/biye/view/veStuGraduation/graduationYj',
        name: '应届毕业生录入',
        icon: 'icon-louceng',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/graduationYj')
      },
      {
        path: '/module/stu/biye/view/veStuGraduation/graduationWj',
        name: '往届毕业生管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/graduationWj')
      },
      {
        path: '/module/stu/biye/view/veStuGraduation/graduationAdmin',
        name: '毕业生信息管理',
        icon: 'icon-weixiu',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/graduationAdmin')
      },
      {
        path: '/module/stu/biye/view/veStuGraduationYxbys/veStuGraduationYxbys',
        name: '优秀毕业生管理',
        icon: 'icon-yiliao',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduationYxbys/veStuGraduationYxbys')
      },
      {
        path: '/module/stu/biye/view/veStuGraduation/graduationPrint',
        name: '打印',
        icon: 'icon-baofei',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/graduationPrint')
      },
      {
        path: '/module/stu/biye/view/veStuGraduation/graduationPrintTemp',
        name: '毕业证书模板设置',
        icon: 'icon-banji',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/graduationPrintTemp')
      },
      {
        path: '/module/stu/biye/view/veStuGraduation/graduationLevel',
        name: '离校管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/biye/view/veStuGraduation/graduationLevel')
      }
    ]
  }
];
