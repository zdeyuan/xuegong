<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 23:36:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-04-18 14:17:03
-->
<template>
  <edu-layout type="table">
    <veStuInsuranceAudit viewType="apply" slot="table"></veStuInsuranceAudit>
  </edu-layout>
</template>

<script>
import veStuInsuranceAudit from './base/veStuInsuranceAudit';
export default {
  components: {
    veStuInsuranceAudit
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
