<template>
<a-layout-sider
    :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
    width="400px"
    :collapsible="collapsible"
    v-model="collapsed"
    :trigger="null">
	<logo></logo>
<!--   <s-menu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      @select="onSelect"
      :mode="mode"
      :style="smenuStyle">
    </s-menu> -->
	<leftBar :menu="menus"></leftBar>
  </a-layout-sider>

</template>

<script>
  import ALayoutSider from "ant-design-vue/es/layout/Sider"
  import Logo from '../tools/Logo'
  // import SMenu from './index'
  import leftBar from './leftBar.vue'
  import { mixin, mixinDevice } from '@/utils/mixin.js'

  export default {
    name: "SideMenu",
    components: { 
		ALayoutSider, 
		Logo, 
		leftBar
	},
    mixins: [mixin, mixinDevice],
    props: {
      mode: {
        type: String,
        required: false,
        default: 'inline'
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      },
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      menus: {
        type: Array,
        required: true
      }
    },
    computed:{
      smenuStyle() {
        let style = { 'padding': '0' }
        if (this.fixSiderbar) {
          style['height'] = 'calc(100% - 59px)'
          style['overflow'] = 'auto'
          style['overflow-x'] = 'hidden'
        }
        return style
      }
    },
    methods: {
      onSelect (obj) {
        this.$emit('menuSelect', obj)
      }
    }
  }
</script>
<style lang="less" scoped>

  /* update_begin author:sunjianlei date:20190509 for: 修改侧边导航栏滚动条的样式 */
  .sider {
    @scrollBarSize: 10px;

    ul.ant-menu {

      /* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
      &::-webkit-scrollbar {
        width: @scrollBarSize;
        height: @scrollBarSize;
        background-color: transparent;
        display: none;
      }

      & .-o-scrollbar {
        display: none;
      }

      /* 兼容IE */
      -ms-overflow-style: none;
      -ms-scroll-chaining: chained;
      -ms-content-zooming: zoom;
      -ms-scroll-rails: none;
      -ms-content-zoom-limit-min: 100%;
      -ms-content-zoom-limit-max: 500%;
      -ms-scroll-snap-type: proximity;
      -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);

      /* 定义滚动条轨道 */
      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      /* 定义滑块 */
      &::-webkit-scrollbar-thumb {
        border-radius: @scrollBarSize;
        background-color: #eee;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: #dddddd;
        }

        &:active {
          background-color: #bbbbbb;
        }
      }
    }

    /** 暗色系滚动条样式 */
    &.dark ul.ant-menu {
      &::-webkit-scrollbar-thumb {
        background-color: #666666;

        &:hover {
          background-color: #808080;
        }

        &:active {
          background-color: #999999;
        }
      }
      background-color: rgb(48, 65, 86);
      /deep/ .ant-menu-submenu-title:hover{
        background-color: #263445;
      }
      /deep/ .ant-menu-item:hover{
        background-color: #263445;
      }
      /deep/ .ant-menu-item-selected {
        background-color: #263445;
      }
      /deep/ .ant-menu-item-selected i{
        color: rgb(24, 144, 255);
      }
      /deep/ .ant-menu-item-selected span{
        color: rgb(24, 144, 255);
      }
      /deep/ .ant-menu-inline.ant-menu-sub{
        background-color: #1f2d3d;
      }
      /deep/ .ant-menu-inline.ant-menu-sub li:hover{
        background-color: #1f2d3d;
      }
      /deep/ .ant-menu-inline.ant-menu-sub .ant-menu-submenu-title:hover{
        background-color: #1f2d3d;
      }
      /deep/ .ant-menu-inline.ant-menu-sub .ant-menu-item-selected{
        background-color: #1f2d3d;
      }
      /deep/ .ant-menu-inline.ant-menu-sub .ant-menu-item-selected span{
        color: rgb(24, 144, 255);
      }
      /deep/ .ant-menu-inline.ant-menu-sub .ant-menu-item-selected i{
        color: rgb(24, 144, 255);
      }
    }
  }

  /* update_end author:sunjianlei date:20190509 for: 修改侧边导航栏滚动条的样式 */
</style>

<!-- update_begin author:sunjianlei date:20190530 for: 选中首页的时候不显示背景颜色 -->
<style lang="less">
  .ant-menu.ant-menu-root {
    & > .ant-menu-item:first-child {
      background-color: transparent;

      & > a, & > a:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &.ant-menu-item-selected {
        & > a, & > a:hover {
          color: #fff;
        }
      }
    }

    &.ant-menu-dark > .ant-menu-item:first-child {
      & > a, & > a:hover {
        color: rgba(255, 255, 255, 0.65);
      }

      &.ant-menu-item-selected {
        & > a, & > a:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
</style>
<!-- update_end author:sunjianlei date:20190530 for: 选中首页的时候不显示背景颜色 -->
