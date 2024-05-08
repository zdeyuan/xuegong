<template>
  <edu-layout type="table">
    <!-- 表格 -->
    <div slot="table" class="right_table">
      <div>
        <edu-query ref="cwQuery" code="veStuInsuranceKnowledgeType" :do-filter="handleFilter">
          <template slot="search">
            <edu-query-item title="类型名称" pname="type_Name" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="状态" pname="status" pop="like" stype="select" code="status"> </edu-query-item>
          </template>
        </edu-query>
        <edu-table
          ref="veStuInsuranceKnowledgeTypeTable"
          code="veStuInsuranceKnowledgeType"
          :api="veStuInsuranceKnowledgeTypeTable.api"
          :get-params="getParams"
          :config="{}"
          :to-update="handleUpdate"
          :do-add="handleCreate"
        >
          <a-table-column title="类型名称" dataIndex="typeName" width="150px"> </a-table-column>
        </edu-table>
      </div>
      <!-- 编辑页 -->
      <veStuInsuranceKnowledgeTypeEdit v-if="showType == 'edit'" ref="veStuInsuranceKnowledgeTypeEdit" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceKnowledgeTypeEdit>
      <veStuInsuranceKnowledgeTypeShow v-if="showType == 'show'" ref="veStuInsuranceKnowledgeTypeShow" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceKnowledgeTypeShow>
    </div>
  </edu-layout>
</template>

<script>
import veStuInsuranceKnowledgeTypeApi from '@/module/stu/bxxl/api/veStuInsuranceKnowledgeTypeApi';
import veStuInsuranceKnowledgeTypeEdit from './veStuInsuranceKnowledgeTypeEdit';
import veStuInsuranceKnowledgeTypeShow from './veStuInsuranceKnowledgeTypeShow';

export default {
  components: {
    veStuInsuranceKnowledgeTypeEdit,
    veStuInsuranceKnowledgeTypeShow
  },
  data() {
    const data = {
      veStuInsuranceKnowledgeTypeQuery: {},
      showType: 'table'
    };
    data.veStuInsuranceKnowledgeTypeTable = {
      api: veStuInsuranceKnowledgeTypeApi
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
      this.$refs.veStuInsuranceKnowledgeTypeTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceKnowledgeTypeEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceKnowledgeTypeEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceKnowledgeTypeShow.doShow(row);
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
      this.$refs.veStuInsuranceKnowledgeTypeTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
