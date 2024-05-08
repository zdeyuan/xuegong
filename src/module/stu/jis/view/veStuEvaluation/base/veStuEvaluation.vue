<template>
  <div slot="table">
    <a-row>
      <a-col :span="6">
        <div class="tree_layout">
          <div>
            <edu-query ref="cwQuery" code="veBaseStudent" ext="boxZybmbj" line @changeBj="handleFilter" :isRefresh="false">
              <template slot="search"> </template>
            </edu-query>
            <a-table ref="veBaseStudentTable" code="veBaseStudent" :data-source="stuList" :customRow="customRow">
              <a-table-column title="学号" fixed="left" dataIndex="xh" width="150px"> </a-table-column>
              <a-table-column title="姓名" fixed="left" dataIndex="xm" width="100px"> </a-table-column>
            </a-table>
          </div>
        </div>
      </a-col>
      <a-col :span="2"></a-col>
      <a-col :span="16">
        <div class="common-layout table-layout">
          <veStuEvaluationInfo ref="veStuEvaluationInfo"></veStuEvaluationInfo>
        </div>
      </a-col>
    </a-row>
  </div>
  <!-- 表格 -->
</template>

<script>
import veBaseStudentApi from '@/module/stu/base/api/veBaseStudentApi';
import veStuEvaluationApi from '@/module/stu/jis/api/veStuEvaluationApi';
import veStuEvaluationInfo from './veStuEvaluationInfo';

export default {
  components: {
    veStuEvaluationInfo
  },
  data() {
    const data = {
      veStuEvaluationQuery: {},
      showType: 'table',
      stuList: []
    };
    data.veStuEvaluationTable = {
      api: veStuEvaluationApi
    };
    data.veBaseStudentTable = {
      api: veBaseStudentApi
    };
    return data;
  },
  mounted() {},
  methods: {
    customRow(row) {
      return {
        on: {
          // 事件
          click: event => {
            this.initStu(row);
          }, // 点击行
          dblclick: event => {},
          contextmenu: event => {},
          mouseenter: event => {}, // 鼠标移入行
          mouseleave: event => {}
        }
      };
    },
    initStu(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuEvaluationInfo.doShow(row);
      });
    },

    /**
     * @msg: 表格获取请求数据 必须return 一个对象
     */
    getParams() {
      const params = this.$refs['cwQuery'].getQueryData({ base: true });
      return params;
    },
    /**
     * @msg: 搜索事件
     */
    handleFilter() {
      const params = this.$refs['cwQuery'].getQueryData({ base: true });
      params.size = 10000;
      params.current = 1;
      params.sorts = [{ column: 'id', asc: false }];
      veBaseStudentApi.page(params).then(res => {
        this.stuList = res.result.records;
      });
    },
    /**
     * @msg: 编辑页取消事件
     */
    editCancel() {
      this.showType = 'table';
    },
    /**
     * @msg: 编辑页成功事件
     */
    editOk() {
      this.showType = 'table';
      this.$refs.veStuEvaluationTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
