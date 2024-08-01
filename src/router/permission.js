/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2020-07-10 16:35:14
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-17 20:35:00
 */
import router from './index';
import config from '@/config/config';
import store from '@/store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken } from '@/utils/auth'; // get token from cookie

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login']; // no redirect whitelist
const title = config.systemName;

function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  //如果是其他系统过来的 并且有token
  window.console.log(to.query,'to.query？？？？？？？？？？')
  if (to.path == '/' && to.query && to.query.token) {
    await store.dispatch('user/tokenLogin', { token: to.query.token, appId: to.query.appId }).catch(err => {});
  }
  if (to.path.indexOf('/frame/') > -1 && to.query && to.query.token) {
    await store.dispatch('user/tokenLogin', { token: to.query.token, appId: to.query.appId }).catch(err => {});
  }
  const hasToken = getToken();
  //如果有token

  if (hasToken && store.getters.userId) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' });
      NProgress.done();
    } else {
      //判断是否用userId 来区别是否 获取过 数据   token 有可能是 单点登录
      const userId = store.getters.userId;
      //   const userInfo = store.getters.userInfo;
      if (userId) {
        next();
      } else {
        try {
          // 获取用户信息  await  设置为等待完成
          next();
        } catch (error) {
          //如果失败了 就 删除了 token
          console.error(error);
          await store.dispatch('user/resetToken');
          Message.error(error || 'Has Error');
          next(`/login`); //?redirect=${to.path}
          NProgress.done();
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else if (to.path.indexOf(whiteList[0]) > -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`); //?redirect=${to.path}
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
