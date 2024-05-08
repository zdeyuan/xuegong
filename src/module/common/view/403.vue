<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-12 13:13:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-12 18:05:02
-->
<template>
  <exception-page home-route="/dashboard/workplace" type="403" />
</template>

<script>
import ExceptionPage from "@/module/common/component/ExceptionPage";
export default {
  name: "Exp404",
  components: { ExceptionPage },
  computed: {},
};
</script>

<style scoped lang="less"></style>
