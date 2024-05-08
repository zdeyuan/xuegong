<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-09 17:14:13
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-20 11:49:24
-->
<template>
  <admin-layout :class="extClass">
    <transition name="fade-transform" mode="out-in">
      <router-view ref="page" />
    </transition>
  </admin-layout>
</template>

<script>
import AdminLayout from './AdminLayout';

export default {
  name: 'PageView',
  components: { AdminLayout },
  data() {
    return {
      page: {}
    };
  },
  computed: {
    extClass() {
      if (this.$route.path == '/') {
        return 'white';
      }
      return '';
    }
  },
  mounted() {
    this.page = this.$refs.page;
  },
  updated() {
    this.page = this.$refs.page;
  }
};
</script>

<style lang="less" scoped>
.extraImg {
  margin-top: -60px;
  text-align: center;
  width: 195px;
  img {
    width: 100%;
  }
}
</style>
