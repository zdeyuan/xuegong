<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 23:36:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-05-01 18:38:43
-->
<template>
  <edu-layout type="table">
    <veStuInsuranceAsk viewType="admin" slot="table"></veStuInsuranceAsk>
  </edu-layout>
</template>

<script>
import veStuInsuranceAsk from './base/veStuInsuranceAsk';
export default {
  components: {
    veStuInsuranceAsk
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
