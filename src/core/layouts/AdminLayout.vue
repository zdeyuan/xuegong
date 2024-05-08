<template>
  <a-layout :class="['admin-layout', 'beauty-scroll']">
    <!-- 左边的样式 -->
    <side-menu :collapsed="collapsed" :collapsible="true" />
    <a-layout class="admin-layout-main beauty-scroll">
      <admin-header :style="headerStyle" :collapsed="collapsed" @toggleCollapse="toggleCollapse" />
      <a-layout-header :class="['virtual-header']" v-show="fixedHeader"></a-layout-header>
      <a-layout-content class="admin-layout-content" :style="`min-height: ${minHeight}px;`">
        <div style="position: relative">
          <slot></slot>
        </div>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <page-footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import AdminHeader from './header/AdminHeader';
import PageFooter from './footer/PageFooter';
import SideMenu from './menu/SideMenu';

// const minHeight = window.innerHeight - 64 - 122

export default {
  name: 'AdminLayout',
  components: { SideMenu, PageFooter, AdminHeader },
  data() {
    return {
      minHeight: window.innerHeight - 64 - 122,
      collapsed: false,
      showSetting: false,
      fixedHeader: true,
      drawerOpen: false
    };
  },
  mounted() {},
  watch: {
    $route(val) {
      this.setActivated(val);
    },
    layout() {
      this.setActivated(this.$route);
    }
  },
  computed: {
    sideMenuWidth() {
      return this.collapsed ? '80px' : '256px';
    },
    headerStyle() {
      let width = this.fixedHeader && this.layout !== 'head' && !this.isMobile ? `calc(100% - ${this.sideMenuWidth})` : '100%';
      let position = this.fixedHeader ? 'fixed' : 'static';
      return `width: ${width}; position: ${position};`;
    }
  },
  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    onMenuSelect() {
      this.toggleCollapse();
    },
    setActivated(route) {
      if (this.layout === 'mix') {
        let matched = route.matched;
        matched = matched.slice(0, matched.length - 1);
        const { firstMenu } = this;
        for (let menu of firstMenu) {
          if (matched.findIndex(item => item.path === menu.fullPath) !== -1) {
            this.setActivatedFirst(menu.fullPath);
            break;
          }
        }
      }
    }
  },
  created() {
    this.setActivated(this.$route);
  }
};
</script>

<style lang="less" scoped>
.admin-layout {
  .side-menu {
    &.fixed-side {
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
    }
  }
  .virtual-side {
    transition: all 0.2s;
  }
  .virtual-header {
    transition: all 0.2s;
    opacity: 0;
    &.fixed-tabs.multi-page:not(.fixed-header) {
      height: 0;
    }
  }
  .admin-layout-main {
    .admin-header {
      border: 1px solid #cccccc;
      top: 0;
      right: 0;
      overflow: hidden;
      transition: all 0.2s;
      &.fixed-tabs.multi-page:not(.fixed-header) {
        height: 0;
      }
    }
  }
  .admin-layout-content {
    padding: 15px 15px 0;
    margin: 15px 15px 15px 0;
    background-color: #e9edf6;
    /*overflow-x: hidden;*/
    /*min-height: calc(100vh - 64px - 122px);*/
  }
  .setting {
    border-radius: 5px 0 0 5px;
    line-height: 40px;
    font-size: 22px;
    width: 40px;
    height: 40px;
  }
}
</style>
