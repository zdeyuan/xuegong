<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-11 20:30:48
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-07-20 22:29:40
-->
<template>
  <a-layout-header :class="[headerTheme, 'admin-header']">
    <div :class="['admin-header-wide', layout]">
      <!--    <a-icon
        v-if="layout !== 'head'"
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleCollapse"
      /> -->
      <div :class="['admin-header-right', headerTheme]">
        <a-dropdown>
          <div class="header-avatar">
            <a-avatar class="avatar" size="large" shape="circle" :src="'./static/img/default_user.png'" />
            <span class="name">{{ loginInfo.userName }}</span>
            <i class="iconfont icon-up" />
          </div>
          <a-menu :class="['avatar-menu']" slot="overlay">
            <a-menu-item>
              <a-icon type="user" />
              <span>修改密码</span>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item>
              <a-icon type="user" />
              <span>个人信息</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>

        <a-dropdown>
          <div class="header-avatar">
            <i class="iconfont icon-gengduo" style="font-size:15px" />
            <span class="name">办事大厅 </span>
            <i class="iconfont icon-up" />
          </div>
          <a-menu :class="['avatar-menu']" slot="overlay" class="user-dropdown-menu-wrapper">
            <template v-for="(item, index) in systemList">
              <a-menu-divider v-if="index > 0" :key="item.id" />
              <a-menu-item :key="item.id" @click="toPath(item.appAddress, item.id)">
                <a-icon type="user" />
                <span>{{ item.appName }}</span>
              </a-menu-item>
            </template>
            <!--        <a-menu-divider />
           <a-menu-item>
              <a-icon type="user" />
              <span>其他系统4</span>
            </a-menu-item> -->
          </a-menu>
        </a-dropdown>

        <div class="header-img" @click="toHome">
          <i class="iconfont icon-apartment-home" />
          <span class="name">学校首页</span>
        </div>
        <div class="header-img">
          <i
            class="basefont iconxitong"
            style="    position: relative;
              top: 2px;
              font-size: 22px;"
          />
          <span class="name">设置</span>
        </div>
        <div class="header-img" @click="toHome">
          <i
            class="basefont iconfanhui1"
            style="    position: relative;
              top: 2px;
              font-size: 22px;"
          />
          <span class="name">返回</span>
        </div>
        <div class="header-img" @click="logout">
          <i
            class="basefont icontuichu"
            style="    position: relative;
              top: 2px;
              font-size: 25px;"
          />
          <span class="name" style="position: relative;top: -1px;">退出登录</span>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { getToken } from '@/utils/auth';
import { baseMixins } from '@/core/mixins/baseMixins';
export default {
  name: 'AdminHeader',
  mixins: [baseMixins],
  components: {},
  props: ['collapsed'],
  data() {
    const systemList = this.$db.getObj('SYSTEM_LIST');
    return {
      layout: 'side',
      systemList: systemList || [],
      searchActive: false
    };
  },
  computed: {
    headerTheme() {
      'dark';
    },
    menuWidth() {
      const { layout, searchActive } = this;
      const headWidth = layout === 'head' ? '100% - 188px' : '100%';
      const extraWidth = searchActive ? '600px' : '400px';
      return `calc(${headWidth} - ${extraWidth})`;
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: '/' });
    },
    toPath(path, appId) {
      const last = path.substr(path.length - 1, 1);
      let letStr = '/';
      if (last == '/') {
        letStr = '';
      }
      location.href = `${path}${letStr}?token=${getToken()}&appId=${appId}`;
    },
    logout() {
      const that = this;
      this.msgUtil.confirm('退出登录提示', '是否确定退出登录', () => {
        that.$store.dispatch('user/logout401').then(() => {
          that.$router.push({ name: '/login' });
        });
      });
    },
    toggleCollapse() {
      this.$emit('toggleCollapse');
    },
    onSelect(obj) {
      this.$emit('menuSelect', obj);
    }
  }
};
</script>

<style lang="less" scoped>
.header-img {
  user-select: none;
}
.iconfont,
.basefont {
  font-size: 20px;
  color: #878787;
  &.icon-up {
    font-size: 16px;
    color: #333;
  }
}
@import 'index';
</style>
