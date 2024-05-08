/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-26 21:38:01
 */
import PageView from '@/core/layouts/PageView';
export default [
  {
    path: '/fund',
    name: '楼宇管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/sbzc/floor/view/veSbzcJzwInfo/veSbzcJzwInfo',
        name: '楼宇综合管理',
        icon: 'icon-louyu it',
        meta: {},
        component: () => import('@/module/sbzc/floor/view/veSbzcJzwInfo/veSbzcJzwInfo')
      },
      {
        path: '/module/sbzc/floor/view/veSbzcJzwFloor/veSbzcJzwFloor',
        name: '楼层管理',
        icon: 'icon-louceng ic',
        meta: {},
        component: () => import('@/module/sbzc/floor/view/veSbzcJzwFloor/veSbzcJzwFloor')
      },
      {
        path: '/module/sbzc/floor/view/veSbzcJzwRoom/veSbzcJzwRoom',
        name: '房间管理',
        icon: 'icon-fangjian1 il',
        meta: {},
        component: () => import('@/module/sbzc/floor/view/veSbzcJzwRoom/veSbzcJzwRoom')
      },
      {
        path: '/module/sbzc/floor/view/veSbzcJzwInspect/veSbzcJzwInspect',
        name: '检查记录',
        icon: 'icon-jiancha ic',
        meta: {},
        component: () => import('@/module/sbzc/floor/view/veSbzcJzwInspect/veSbzcJzwInspect')
      },
      {
        path: '/module/sbzc/floor/view/veSbzcJzwMaintain/veSbzcJzwMaintain',
        name: '维修记录',
        icon: 'icon-weixiu il',
        meta: {},
        component: () => import('@/module/sbzc/floor/view/veSbzcJzwMaintain/veSbzcJzwMaintain')
      },
      {
        path: '/module/sbzc/floor/view/cate/cate',
        name: '分类设置',
        icon: 'icon-leibie it',
        meta: {},
        component: () => import('@/module/sbzc/floor/view/cate/cate')
      }
    ]
  }
];
