<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 23:36:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-08 20:48:29
-->
<template>
  <a-tabs class="auto-tabs">
    <a-tab-pane tab="在校生统计" key="first">
      <edu-layout type="table" :extHeight="50" topName="在校生统计">
        <veStuCount slot="table"></veStuCount>
      </edu-layout>
    </a-tab-pane>
    <a-tab-pane tab="学生信息查询" key="tt33t">
      <edu-layout type="table" :extHeight="50" topName="学生信息查询">
        <stuCount slot="table"></stuCount>
      </edu-layout>
    </a-tab-pane>
    <a-tab-pane tab="学籍异动统计" key="t22tt">
      <edu-layout type="table" :extHeight="50" topName="学籍异动统计">
        <stuCount slot="table"></stuCount>
      </edu-layout>
    </a-tab-pane>
    <a-tab-pane tab="历届毕业生统计" key="tt11t">
      <edu-layout type="table" :extHeight="50" topName="历届毕业生统计">
        <biyeCount slot="table"></biyeCount>
      </edu-layout>
    </a-tab-pane>
    <a-tab-pane tab="毕业生信息查询" key="tt44t">
      <edu-layout type="table" :extHeight="50" topName="毕业生信息查询">
        <stuCount slot="table"></stuCount>
      </edu-layout>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import veStuCount from './veBaseStudent/veStuCount';
import stuCount from './stuCount/stuCount';
import biyeCount from '@/module/stu/biye/view/biyeCount';

export default {
  components: {
    stuCount,
    veStuCount,
    biyeCount
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.auto-tabs /deep/.ant-tabs-bar {
  margin-bottom: 0;
  .ant-tabs-tab {
    color: #999999;
  }
  .ant-tabs-tab-active {
    color: #666666;
  }
  .ant-tabs-ink-bar {
    background: #878787;
  }
}
</style>
