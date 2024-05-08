<template>
  <edu-layout type="table">
    <!-- 表格 -->
    <div slot="table" class="right_table">
      <div>
        <edu-query ref="cwQuery" code="veStuInsuranceKnowledge" :do-filter="handleFilter">
          <template slot="search">
            <edu-query-item title="知识类型" pname="d.type_id" textKey="typeName" pop="eq" stype="select" :datas="typeNodes" dtype="datas">
            </edu-query-item>
            <edu-query-item title="标题" pname="title" pop="like" stype="input"> </edu-query-item>
          </template>
        </edu-query>
        <edu-table
          ref="veStuInsuranceKnowledgeTable"
          code="veStuInsuranceKnowledge"
          :api="veStuInsuranceKnowledgeTable.api"
          :get-params="getParams"
          :config="{
            open: false,
            close: false,
            status: false
          }"
          :to-update="handleUpdate"
          :do-add="handleCreate"
        >
          <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
          <a-table-column title="知识类型" dataIndex="typeName" width="150px"> </a-table-column>
          <a-table-column title="标题" dataIndex="title" width="150px"> </a-table-column>
          <a-table-column title="发布时间" dataIndex="createDate" width="150px"> </a-table-column>
          <a-table-column title="发布人" dataIndex="userName" width="150px"> </a-table-column>
        </edu-table>
      </div>
      <!-- 编辑页 -->
      <veStuInsuranceKnowledgeEdit
        :typeNodes="typeNodes"
        v-if="showType == 'edit'"
        ref="veStuInsuranceKnowledgeEdit"
        @onOk="editOk"
        @onCancel="editCancel"
      >
      </veStuInsuranceKnowledgeEdit>
      <veStuInsuranceKnowledgeShow v-if="showType == 'show'" ref="veStuInsuranceKnowledgeShow" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceKnowledgeShow>
    </div>
  </edu-layout>
</template>

<script>
import veStuInsuranceKnowledgeApi from '@/module/stu/bxxl/api/veStuInsuranceKnowledgeApi';
import veStuInsuranceKnowledgeEdit from './veStuInsuranceKnowledgeEdit';
import veStuInsuranceKnowledgeShow from './veStuInsuranceKnowledgeShow';
import veStuInsuranceKnowledgeTypeApi from '@/module/stu/bxxl/api/veStuInsuranceKnowledgeTypeApi';
export default {
  components: {
    veStuInsuranceKnowledgeEdit,
    veStuInsuranceKnowledgeShow
  },
  data() {
    const data = {
      veStuInsuranceKnowledgeQuery: {},
      showType: 'table',
      typeNodes: []
    };
    data.veStuInsuranceKnowledgeTable = {
      api: veStuInsuranceKnowledgeApi
    };
    return data;
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      const sub = {
        conditions: [{ operator: 'eq', column: 'status', value: 1 }]
      };
      veStuInsuranceKnowledgeTypeApi.all(sub).then(res => {
        this.typeNodes = res.result;
      });
    },
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
      this.$refs.veStuInsuranceKnowledgeTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceKnowledgeEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceKnowledgeEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceKnowledgeShow.doShow(row);
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
      this.$refs.veStuInsuranceKnowledgeTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
