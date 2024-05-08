import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import config from "./config";

export const constantRoutes = [...config.routes];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// 添加动态路由  在 获取 菜单的时候 会调用一遍
export function addAsycnRouter(menus) {
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i];
    addRouter(menu);
  }
}
// 递归添加
function addRouter(menu) {
  return;
  //如果是工作台和普通工作台 就重定向到这里
  if (menu.path && (menu.path == "work" || menu.path == "workCommon")) {
    router.addRoutes([
      {
        path: "/",
        redirect: "/" + menu.path,
      },
    ]);
  }
  if (menu.subMenus && menu.subMenus.length > 0) {
    for (let i = 0; i < menu.subMenus.length; i++) {
      const element = menu.subMenus[i];
      addRouter(element);
    }
  } else {
    if (
      !!menu.path &&
      menu.url &&
      menu.path.indexOf(".html") < 0 &&
      menu.url.indexOf("vue") > -1
    ) {
      //  let  routPath = '@/module/' + menu.path

      if (menu.url.indexOf("vuejgb") > -1 && menu.path.startsWith("upms/")) {
      } else {
        router.addRoutes([
          {
            path: "/" + menu.path,
            component: Layout,
            children: [
              {
                path: "/",
                name: menu.name,
                component: (resolve) =>
                  require(["@/module/" + menu.path], resolve),
                meta: { title: menu.name, icon: "link", keepAlive: true },
              },
            ],
          },
        ]);
      }
    }
  }
}

export default router;
