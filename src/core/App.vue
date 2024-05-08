<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-11 20:30:48
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-16 00:37:19
-->
<template>
  <a-config-provider :locale="locale" :get-popup-container="popContainer">
    <router-view />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    };
  },
  created() {},
  mounted() {},
  methods: {
    popContainer() {
      return document.getElementById('popContainer');
    }
  }
};
</script>

<style lang="less" scoped>
#id {
}
</style>
