/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-16 11:43:58
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/sst',
    name: '社团管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/shet/view/veStuReservation/veStuReservationApply',
        name: '场地预约',
        icon: 'icon-changdi',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuReservation/veStuReservationApply')
      },
      {
        path: '/module/stu/shet/view/veStuReservation/veStuReservationShen',
        name: '预约审核',
        icon: 'icon-jiebei',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuReservation/veStuReservationShen')
      },
      {
        path: '/module/stu/shet/view/veStuAssocFundsStandard/veStuAssocFundsStandard',
        name: '社团缴费标准',
        icon: 'icon-jiancha',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocFundsStandard/veStuAssocFundsStandard')
      },
      /*    {
        path: '/module/stu/shet/view/veStuAssocFunds/veStuAssocFundsAdmin',
        name: '社团缴费管理',
        icon: 'icon-gongzuo',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocFunds/veStuAssocFundsAdmin')
      }, 
      {
        path: '/module/stu/shet/view/veStuAssocFunds/veStuAssocFundsShow',
        name: '社团缴费查看',
        icon: 'icon-jinyong',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocFunds/veStuAssocFundsShow')
      },*/
      {
        path: '/module/stu/shet/view/veStuAssocInfo/veStuAssocInfo',
        name: '社团创建/注销',
        icon: 'icon-bumen',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocInfo/veStuAssocInfo')
      },
      {
        path: '/module/stu/shet/view/veStuAssocInfo/veStuAssocInfoAp',
        name: '社团信息',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocInfo/veStuAssocInfoAp')
      },
      {
        path: '/module/stu/shet/view/veStuAssocLabel/veStuAssocLabel',
        name: '社团标签管理',
        icon: 'icon-tongji1',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocLabel/veStuAssocLabel')
      },
      {
        path: '/module/stu/shet/view/veStuAssocActivityType/veStuAssocActivityType',
        name: '社团活动类型',
        icon: 'icon-lunwentijiao',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssocActivityType/veStuAssocActivityType')
      },
      /*       {
        path: '/module/stu/shet/view/veStuAssoc/veStuAssoc',
        name: '社团管理',
        icon: 'icon-chengguo1',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssoc/veStuAssoc')
      }, */
      {
        path: '/module/stu/shet/view/veStuAssoc/veStuAssocKj',
        name: '社团空间',
        icon: 'icon-shenpi',
        meta: {},
        component: () => import('@/module/stu/shet/view/veStuAssoc/veStuAssocKj')
      }
    ]
  }
];
