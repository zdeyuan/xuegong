/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 12:35:55
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-05-02 23:54:36
 */
import PageView from '@/core/layouts/PageView';
import sby from './sby.js';
import scount from './scount.js';
import sst from './sst.js';
export default [
  {
    path: '/sjis',
    name: '学生评定',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/jis/view/veStuEvaluationConfig/veStuEvaluationConfig',
        name: '功能配置',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuEvaluationConfig/veStuEvaluationConfig')
      },
      {
        path: '/module/stu/jis/view/veStuIntroduction/veStuIntroduction',
        name: '自我鉴定',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuIntroduction/veStuIntroduction')
      },
      {
        path: '/module/stu/jis/view/veStuEvaluation/veStuEvaluationAdmin',
        name: '老师评定',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuEvaluation/veStuEvaluationAdmin')
      },
      {
        path: '/module/stu/jis/view/veStuEvaluation/veStuEvaluationShow',
        name: '评定查询',
        icon: 'icon-gengduo',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuEvaluation/veStuEvaluationShow')
      }
    ]
  },
  ...sby,
  {
    path: '/sbzr',
    name: '班主任管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/jis/view/veBaseBanjiBzr/bzrNow',
        name: '当前班主任查询',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veBaseBanjiBzr/bzrNow')
      },
      {
        path: '/module/stu/jis/view/veBaseBanjiBzr/bzrHis',
        name: '班主任历史记录',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veBaseBanjiBzr/bzrHis')
      }
    ]
  },
  ...scount,
  {
    path: '/sssaass',
    name: '综合素质评测',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/jis/view/veStuIdx/veStuIdx',
        name: '指标体系设置',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuIdx/veStuIdx')
      },
      {
        path: '/module/stu/jis/view/veStuIdxScoreConfig/veStuIdxScoreConfig',
        name: '指标分值设置',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuIdxScoreConfig/veStuIdxScoreConfig')
      },
      {
        path: '/module/stu/jis/view/veStuIdxPeriod/veStuPeriod',
        name: '指标周期设置',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuIdxPeriod/veStuPeriod')
      },
      {
        path: '/module/stu/jis/view/veStuIdxStuScore/veStuIdxStuScore',
        name: '评测结果查看',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuIdxStuScore/veStuIdxStuScore')
      }
    ]
  },

  {
    path: '/sssssss',
    name: '预约管理',
    meta: {
      icon: 'table'
    },
    component: PageView,
    children: [
      {
        path: '/module/stu/jis/view/veStuYyproject/veStuYyproject',
        name: '预约项目管理',
        icon: 'icon-qunzu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuYyproject/veStuYyproject')
      },
      {
        path: '/module/stu/jis/view/veStuYystu/veStuYystu',
        name: '学生预约情况',
        icon: 'icon-xiangmu',
        meta: {},
        component: () => import('@/module/stu/jis/view/veStuYystu/veStuYystu')
      }
    ]
  },
  ...sst
];
