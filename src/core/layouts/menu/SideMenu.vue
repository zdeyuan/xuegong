<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-09 17:14:12
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-07-20 21:36:41
-->
<template>
  <a-layout-sider class="shadow" :class="['side-menu', 'beauty-scroll']" width="256px" v-model="collapsed" :trigger="null">
    <div :class="['logo']">
      <router-link to="/">
        <img src="@/assets/img/logo.png" />
        <h1 class="htitle">{{ $config.systemName }}</h1>
      </router-link>
    </div>
    <div class="smenu">
      <div class="smenu-group home-group" :class="isSelect" style="cursor: pointer;">
        <div class="title" @click="toHome()">
          <span class="ptitle"> 首页</span>
        </div>
      </div>
      <div v-for="(item, index) in menuData" class="smenu-group" :key="index">
        <div class="title" @click="changeOpen(index)">
          <span :class="{ pselected: isPselect(item.children) }"> {{ item.name }}</span>
          <i class="iconfont title-icon" :class="item.open ? 'icon-up1' : 'icon-up'" />
        </div>
        <transition name="menu">
          <div class="menuchild" :class="system" v-show="item.open">
            <span v-for="(smenu, index) in item.children" :key="index" class="menuchild-span-out" @click="toPath(smenu)">
              <span class="menuchild-span" :class="{ selected: $route.path == smenu.path }">
                <i class="iconfont icon" :class="smenu.icon" />
                {{ smenu.name }}
              </span>
            </span>
          </div>
        </transition>
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
import config from '@/config/config';
export default {
  name: 'SideMenu',
  components: {},
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    const menuData = [];
    let openNum = 0;
    if (config.isRemoteMenu) {
      const menuList = this.$db.getObj('menuList');
	  console.log(menuList,'menuList！！！！！！！！！！！！！！！！！！！！！！！')
      if (menuList && menuList.length > 0) {
        menuList.forEach(menu => {
          if (menu.childList && menu.childList.length > 0) {
            const addMenu = {
              path: menu.url,
              name: menu.text,
              children: [],
              open: false
            };
            menu.childList.forEach(smenu => {
              const addSubMenu = {
                path: smenu.url,
                name: smenu.text,
                icon: smenu.iconcls,
                pname: menu.text
              };
              addMenu.children.push(addSubMenu);
              if (this.$route.path == addSubMenu.path) {
                menu.open = true;
                openNum++;
                this.saveMenu(addSubMenu.pname, addSubMenu.name);
              }
            });
            menuData.push(addMenu);
          }
        });
      }
    } else {
      this.$router.options.routes.forEach(menu => {
        if (menu.children && menu.hidden !== true) {
          menu.children.forEach(smenu => {
            smenu.pname = menu.name;
            if (this.$route.path == smenu.path) {
              menu.open = true;
              openNum++;
              this.saveMenu(smenu.pname, smenu.name);
            }
          });
          if (!menu.open) {
            menu.open = false;
          }
          menuData.push(menu);
        }
      });
    }

    if (openNum == 0 && menuData.length > 0) {
      menuData[0].open = true;
    }
    return {
      system: process.env.VUE_APP_SYSTEM_PATH,
      menuData: menuData
    };
  },
  computed: {
    isSelect() {
      if (this.$route.path == '/') {
        return 'select';
      }
      return '';
    }
  },
  methods: {
    isPselect(list) {
      if (list && list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          const element = list[i];
          if (element.path == this.$route.path) {
            return true;
          }
        }
      }
      return false;
    },
    toHome() {
      this.$router.push({ path: '/' });
    },
    saveMenu(pname, name) {
      this.$store.dispatch('user/saveMenu', {
        pname: pname,
        name: name
      });
    },
    changeOpen(index) {
      const isOpenMul = false;
      if (isOpenMul) {
        //如果可以同事打开多个
        this.menuData[index].open = !this.menuData[index].open;
      } else {
        for (let i = 0; i < this.menuData.length; i++) {
          const menu = this.menuData[i];
          if (i == index) {
            menu.open = !menu.open;
            continue;
          }
          menu.open = false;
        }
      }
    },
    toPath(smenu) {
      if (this.$route.path == smenu.path) {
        return;
      }
      this.saveMenu(smenu.pname, smenu.name);
      this.$router.push({ path: smenu.path });
    }
  }
};
</script>

<style lang="less" scoped>
.menuchild.student {
  > .menuchild-span-out:nth-child(5n-1) .iconfont {
    color: #fd9246 !important;
  }
  > .menuchild-span-out:nth-child(5n-2) .iconfont {
    color: #58c23f !important;
  }
  > .menuchild-span-out:nth-child(5n-3) .iconfont {
    color: #5594ec !important;
  }
  > .menuchild-span-out:nth-child(5n-4) .iconfont {
    color: #fd9246 !important;
  }
  > .menuchild-span-out:nth-child(5n) .iconfont {
    color: #1bb2f3 !important;
  }
  //animation: fadeIn 1s, float 0.5s 1s infinite;
}
</style>

<style lang="less" scoped>
.home-group.select .title span {
  color: #4e89f8;
}
.menuchild {
  //animation: fadeIn 1s, float 0.5s 1s infinite;
}
.menu-enter,
.menu-leave-to {
  transform: scaleY(0.8);
  // height: 100px;
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}
::-webkit-scrollbar {
  width: 3px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

.smenu {
  padding: 5px 8px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;

  .smenu-group {
    cursor: pointer;
    .title {
      padding: 8px 0;
      font-size: 16px;
      color: #999999;
      .title-icon {
        float: right;
        color: #888888;
      }
    }
  }
  .menuchild {
    .menuchild-span-out {
      width: 50%;
      display: inline-block;
      padding: 3px;
      box-sizing: border-box;
    }
    .menuchild-span {
      -moz-user-select: none; /* Firefox私有属性 */
      -webkit-user-select: none; /* WebKit内核私有属性 */
      -ms-user-select: none; /* IE私有属性(IE10及以后) */
      -khtml-user-select: none; /* KHTML内核私有属性 */
      -o-user-select: none; /* Opera私有属性 */
      user-select: none; /* CSS3属性 */
      width: 100%;
      padding: 5px 2px;
      cursor: pointer;
      color: #666666;
      border: 1px dashed #cccccc;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      display: inline-block;
      background: #e9edf6;
      font-size: 14px;
      &.selected {
        border: 1px dashed #4e89f8;
        color: #4e89f8;
      }
      &:active {
        background: #cccccc;
      }
      .icon {
        width: 16px;
        display: inline-block;
        &.icon-qunzu {
          position: relative;
          left: -6px;
        }
      }
    }
  }
}

.shadow {
  background-color: #fff;
  /* box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  background-color: #fff; */
}
.htitle {
  color: #fff;
}
.side-menu {
  min-height: 100vh;
  overflow-y: auto;
  z-index: 10;
  .logo {
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 24px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden;
    background-color: #2e437d;
    color: #fff;
    &.light {
      background-color: #fff;
      h1 {
      }
    }
    h1 {
      font-size: 20px;
      margin: 0 0 0 12px;
      display: inline-block;
      vertical-align: middle;
    }
    img {
      width: 32px;
      vertical-align: middle;
    }
  }
}
.menu {
  padding: 16px 0;
}
.pselected {
  color: #4e89f8;
  font-size: 16px;
}
</style>
