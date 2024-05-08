/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-10 21:21:41
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/szhzs',
    name: '综合素质管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/zhsz/menu/moral',
        name: '德育工作管理',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/stu/zhsz/menu/moral')
      },
      {
        path: '/module/stu/zhsz/view/veStuMoralCount/veStuMoralCount',
        name: '班级德育评比管理',
        icon: 'icon-yiliao',
        meta: {},
        component: () => import('@/module/stu/zhsz/view/veStuMoralCount/veStuMoralCount')
      },
      {
        path: '/module/stu/zhsz/menu/check',
        name: '行为规范管理',
        icon: 'icon-baofei',
        meta: {},
        component: () => import('@/module/stu/zhsz/menu/check')
      },
      {
        path: '/module/stu/zhsz/menu/weishen',
        name: '卫生检查管理',
        icon: 'icon-lingqu',
        meta: {},
        component: () => import('@/module/stu/zhsz/menu/weishen')
      },
      {
        path: '/module/stu/zhsz/menu/wenhua',
        name: '文体活动管理',
        icon: 'icon-wupin',
        meta: {},
        component: () => import('@/module/stu/zhsz/menu/wenhua')
      },
      {
        path: '/module/stu/zhsz/view/veStuCaucus/veStuCaucus',
        name: '党团活动',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/zhsz/view/veStuCaucus/veStuCaucus')
      },
      {
        path: '/module/stu/xljk/view/veStuHealthReport/veStuHealthReport',
        name: '体质健康',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/xljk/view/veStuHealthReport/veStuHealthReport')
      },
      {
        path: '/module/stu/tcgl/view/VeStuHealthScoreCount',
        name: '体测管理',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/tcgl/view/VeStuHealthScoreCount')
      }
    ]
  }
];
