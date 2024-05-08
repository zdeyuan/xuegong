<template>
  <edu-layout type="table">
    <!-- 表格 -->
    <div slot="table" class="right_table">
      <div>
        <edu-query ref="cwQuery" code="veStuInsuranceType" :do-filter="handleFilter">
          <template slot="search">
            <edu-query-item title="保险名称" pname="insurance_Name" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="保险公司名称" pname="company" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="状态" pname="status" pop="like" stype="select" code="status"> </edu-query-item>
          </template>
        </edu-query>
        <edu-table
          ref="veStuInsuranceTypeTable"
          code="veStuInsuranceType"
          :api="veStuInsuranceTypeTable.api"
          :get-params="getParams"
          :config="{}"
          :to-update="handleUpdate"
          :toDetail="toDetail"
          :do-add="handleCreate"
        >
          <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
          <a-table-column title="保险名称" dataIndex="insuranceName" width="150px"> </a-table-column>
          <a-table-column title="保险公司名称" dataIndex="company" width="150px"> </a-table-column>
        </edu-table>
      </div>
      <!-- 编辑页 -->
      <veStuInsuranceTypeEdit v-if="showType == 'edit'" ref="veStuInsuranceTypeEdit" @onOk="editOk" @onCancel="editCancel"> </veStuInsuranceTypeEdit>
      <veStuInsuranceTypeShow v-if="showType == 'show'" ref="veStuInsuranceTypeShow" @onOk="editOk" @onCancel="editCancel"> </veStuInsuranceTypeShow>
    </div>
  </edu-layout>
</template>

<script>
import veStuInsuranceTypeApi from '@/module/stu/bxxl/api/veStuInsuranceTypeApi';
import veStuInsuranceTypeEdit from './veStuInsuranceTypeEdit';
import veStuInsuranceTypeShow from './veStuInsuranceTypeShow';

export default {
  components: {
    veStuInsuranceTypeEdit,
    veStuInsuranceTypeShow
  },
  data() {
    const data = {
      veStuInsuranceTypeQuery: {},
      showType: 'table'
    };
    data.veStuInsuranceTypeTable = {
      api: veStuInsuranceTypeApi
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
      this.$refs.veStuInsuranceTypeTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceTypeEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceTypeEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceTypeShow.doShow(row);
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
      this.$refs.veStuInsuranceTypeTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
