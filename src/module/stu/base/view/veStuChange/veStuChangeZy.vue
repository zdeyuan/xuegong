<template>
  <!-- 表格 -->
  <div slot="table" class="right_table">
    <div>
      <edu-query ref="cwQuery" code="veStuChange" :do-filter="handleFilter">
        <template slot="search">
          <edu-query-item title="这里要改一下" pname="NAME" pop="like" stype="input"> </edu-query-item>
          <edu-query-item title="这里要改一下" pname="TITLE" pop="like" stype="input"> </edu-query-item>
        </template>
      </edu-query>
      <edu-table
        ref="veStuChangeTable"
        code="veStuChange"
        :api="veStuChangeTable.api"
        :get-params="getParams"
        :exportConfig="{
          url: 'veStuChange/export',
          name: '《学生学籍异动表导出》'
        }"
        :config="{
          open: false,
          close: false,
          status: false
        }"
        :to-update="handleUpdate"
        :toDetail="toDetail"
        :do-add="handleCreate"
      >
        <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
        <a-table-column title="学号" dataIndex="code" width="150px"> </a-table-column>
        <a-table-column title="姓名" dataIndex="name" width="150px"> </a-table-column>
        <a-table-column title="学生id" dataIndex="stuId" width="150px"> </a-table-column>
        <a-table-column title="异动类别码;1=>'退学',2=>'休学',3=>'转专业',4=>'留级',5=>'转入',6=>'转出'," dataIndex="ydlbm" width="150px">
        </a-table-column>
        <a-table-column title="异动日期" dataIndex="ydDate" width="150px"> </a-table-column>
        <a-table-column title="异动原因" dataIndex="ydMsg" width="150px"> </a-table-column>
        <a-table-column title="审批日期" dataIndex="spDate" width="150px"> </a-table-column>
        <a-table-column title="审批文号" dataIndex="spwh" width="150px"> </a-table-column>
        <a-table-column title="经办人工号" dataIndex="jbrgh" width="150px"> </a-table-column>
        <a-table-column title="异动来源学校码" dataIndex="ydlyxxm" width="150px"> </a-table-column>
        <a-table-column title="异动去向学校码" dataIndex="ydqxxm" width="150px"> </a-table-column>
        <a-table-column title="异动说明" dataIndex="ydsm" width="150px"> </a-table-column>
        <a-table-column title="" dataIndex="ofalId" width="150px"> </a-table-column>
        <a-table-column title="原专业码" dataIndex="ospecId" width="150px"> </a-table-column>
        <a-table-column title="原班号" dataIndex="objId" width="150px"> </a-table-column>
        <a-table-column title="原年级" dataIndex="ogradeId" width="150px"> </a-table-column>
        <a-table-column title="院系" dataIndex="falId" width="150px"> </a-table-column>
        <a-table-column title="专业码" dataIndex="specId" width="150px"> </a-table-column>
        <a-table-column title="班级" dataIndex="bjId" width="150px"> </a-table-column>
        <a-table-column title="年级" dataIndex="gradeId" width="150px"> </a-table-column>
        <a-table-column title="异动恢复状态;1已恢复" dataIndex="isRecover" width="150px"> </a-table-column>
        <a-table-column title="异动恢复操作人id" dataIndex="recoverUserId" width="150px"> </a-table-column>
        <a-table-column title="异动恢复时间" dataIndex="recoverTime" width="150px"> </a-table-column>
      </edu-table>
    </div>
    <!-- 编辑页 -->
    <veStuChangeEdit v-if="showType == 'edit'" ref="veStuChangeEdit" @onOk="editOk" @onCancel="editCancel"> </veStuChangeEdit>
    <veStuChangeShow v-if="showType == 'show'" ref="veStuChangeShow" @onOk="editOk" @onCancel="editCancel"> </veStuChangeShow>
  </div>
</template>

<script>
import veStuChangeApi from '@/module/stu/base/api/veStuChangeApi';
import veStuChangeEdit from './veStuChangeEdit';
import veStuChangeShow from './veStuChangeShow';

export default {
  components: {
    veStuChangeEdit,
    veStuChangeShow
  },
  data() {
    const data = {
      veStuChangeQuery: {},
      showType: 'table'
    };
    data.veStuChangeTable = {
      api: veStuChangeApi
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 表格获取请求数据 必须return 一个对象
     */
    getParams() {
      const params = this.$refs['cwQuery'].getQueryData();
      return params;
    },
    /**
     * @msg: 搜索事件
     */
    handleFilter() {
      this.$refs.veStuChangeTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuChangeEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuChangeEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuChangeShow.doShow(row);
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
      this.$refs.veStuChangeTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
