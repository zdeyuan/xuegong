<template>
  <!-- 表格 -->
  <div slot="table" class="right_table">
    <div>
      <edu-query ref="cwQuery" code="veStuInsuranceAsk" :do-filter="handleFilter">
        <template slot="search">
          <edu-query-item title="标题" pname="title" pop="like" stype="input"> </edu-query-item>
        </template>
      </edu-query>
      <edu-table
        ref="veStuInsuranceAskTable"
        code="veStuInsuranceAsk"
        :api="veStuInsuranceAskTable.api"
        :get-params="getParams"
        :config="{
          open: false,
          close: false,
          delete: viewType == 'my',
          status: false
        }"
        :toDetail="toDetail"
        :do-add="viewType == 'my' ? handleCreate : null"
      >
        <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
        <a-table-column title="姓名" dataIndex="name" width="150px"> </a-table-column>
        <a-table-column title="标题" dataIndex="title" width="150px"> </a-table-column>
        <a-table-column title="问题内容" dataIndex="content" width="150px"> </a-table-column>
      </edu-table>
    </div>
    <!-- 编辑页 -->
    <veStuInsuranceAskEdit v-if="showType == 'edit'" ref="veStuInsuranceAskEdit" @onOk="editOk" @onCancel="editCancel"> </veStuInsuranceAskEdit>
    <veStuInsuranceAskShow v-if="showType == 'show'" ref="veStuInsuranceAskShow" @onOk="editOk" @onCancel="editCancel"> </veStuInsuranceAskShow>
  </div>
</template>

<script>
import veStuInsuranceAskApi from '@/module/stu/bxxl/api/veStuInsuranceAskApi';
import veStuInsuranceAskEdit from './veStuInsuranceAskEdit';
import veStuInsuranceAskShow from './veStuInsuranceAskShow';

export default {
  props: {
    viewType: String
  },
  components: {
    veStuInsuranceAskEdit,
    veStuInsuranceAskShow
  },
  data() {
    const data = {
      veStuInsuranceAskQuery: {},
      showType: 'table'
    };
    data.veStuInsuranceAskTable = {
      api: veStuInsuranceAskApi
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
      this.$refs.veStuInsuranceAskTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAskEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAskEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAskShow.doShow(row);
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
      this.$refs.veStuInsuranceAskTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
