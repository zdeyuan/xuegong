/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-11 20:30:49
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-04-21 23:03:05
 */
import PageView from '@/core/layouts/PageView';

let sys = [];
//教科研管理系统
import rbase from './research/rbase';
import rfruit from './research/rfruit';
import rfunds from './research/rfunds';
import rpaper from './research/rpaper';
import rproject from './research/rproject';
import rwork from './research/rwork';

//后勤的引入
import lbase from './logistics/lbase';
import good from './logistics/good';
import ct from './logistics/ct';
import ctfk from './logistics/ctfk';
import goodt from './logistics/goodt';
import rc from './logistics/rc';
import wx from './logistics/wx';

//设备资产的管理
import fund from './sbzc/fund';
import floor from './sbzc/floor';
import place from './sbzc/place';

//学生的
import sbase from './stu/sbase';
import sstu from './stu/sstu';
import sxljk from './stu/sxljk';
import sbxxl from './stu/sbxxl';
import szhsz from './stu/szhsz';
import sjis from './stu/sjis';

if (process.env.VUE_APP_SYSTEM_NAME == '教科研管理系统') {
  sys = [...rbase, ...rwork, ...rproject, ...rpaper, ...rfunds, ...rfruit];
} else if (process.env.VUE_APP_SYSTEM_NAME == '设备资产管理系统') {
  sys = [...fund, ...floor, ...place];
} else if (process.env.VUE_APP_SYSTEM_NAME == '学生管理系统') {
  sys = [...sbase, ...sstu, ...sxljk, ...sbxxl, ...szhsz, ...sjis];
} else {
  sys = [...lbase, ...good, ...goodt, ...wx, ...rc, ...ct, ...ctfk];
}

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/module/common/view/login')
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/module/common/view/403')
    },
    {
      path: '/sqlmenu',
      name: 'sqlmenu',
      component: () => import('@/module/common/view/sqlmenu')
    },
    ...sys,
    {
      path: '/',
      component: PageView,
      hidden: true,
      children: [
        {
          path: '/',
          component: () => import('@/module/common/view/home')
        }
      ]
    },
    {
      path: '/404',
      component: PageView,
      hidden: true,
      children: [
        {
          path: '/',
          component: () => import('@/module/common/view/404')
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
};

export default options;
