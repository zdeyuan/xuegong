<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-11 20:30:48
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-13 01:53:11
-->
<template> </template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style lang="less" scoped>
.footer {
  padding: 48px 16px 24px;
  /*margin: 48px 0 24px;*/
  text-align: center;
  .copyright {
    font-size: 14px;
    i {
      margin: 0 4px;
    }
  }
  .links {
    margin-bottom: 8px;
    a:not(:last-child) {
      margin-right: 40px;
    }
    a {
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
}
</style>
