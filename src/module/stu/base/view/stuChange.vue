<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14 23:36:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-02 20:39:16
-->
<template>
  <a-tabs class="auto-tabs">
    <a-tab-pane tab="学籍异动" key="first">
      <edu-layout type="table" :extHeight="50" topName="学籍异动">
        <veStuChange slot="table"></veStuChange>
      </edu-layout>
    </a-tab-pane>
    <a-tab-pane tab="专业分流" key="second">
      <edu-layout type="table" :extHeight="50" topName="专业分流">
        <veStuChangeBack slot="table"></veStuChangeBack>
      </edu-layout>
    </a-tab-pane>
    <a-tab-pane tab="异动恢复" key="third">
      <edu-layout type="table" :extHeight="50" topName="异动恢复">
        <veStuChangeBack slot="table"></veStuChangeBack>
      </edu-layout>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import veStuChange from './veStuChange/veStuChange';
import veStuChangeZy from './veStuChange/veStuChangeZy';
import veStuChangeBack from './veStuChange/veStuChangeBack';

export default {
  components: {
    veStuChange,
    veStuChangeZy,
    veStuChangeBack
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
