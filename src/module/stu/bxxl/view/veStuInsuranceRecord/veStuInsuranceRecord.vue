<template>
  <edu-layout type="table">
    <!-- 表格 -->
    <div slot="table" class="right_table">
      <div>
        <edu-query ref="cwQuery" code="veStuInsuranceRecord" :do-filter="handleFilter">
          <template slot="search">
            <edu-query-item title="姓名" pname="xm" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="学号" pname="xh" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="保险类型" pname="d.insurance_Id" textKey="insuranceName" pop="eq" stype="select" :datas="typeNodes" dtype="datas">
            </edu-query-item>
          </template>
        </edu-query>
        <edu-table
          ref="veStuInsuranceRecordTable"
          code="veStuInsuranceRecord"
          :api="veStuInsuranceRecordTable.api"
          :get-params="getParams"
          :exportConfig="{
            url: 'veStuInsuranceRecord/export',
            name: '《学生保险表导出》'
          }"
          :config="{
            open: false,
            close: false,
            status: false
          }"
          :doImport="doImport"
          :to-update="handleUpdate"
          :toDetail="toDetail"
          :do-add="handleCreate"
        >
          <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
          <a-table-column title="姓名" dataIndex="xm" width="150px"> </a-table-column>
          <a-table-column title="学号" dataIndex="xh" width="150px"> </a-table-column>
          <a-table-column title="保险类型" dataIndex="insuranceName" width="150px"> </a-table-column>
          <a-table-column title="开始时间" dataIndex="startTime" width="150px"> </a-table-column>
          <a-table-column title="结束时间" dataIndex="endTime" width="150px"> </a-table-column>
        </edu-table>
      </div>
      <!-- 编辑页 -->
      <veStuInsuranceRecordEdit :typeNodes="typeNodes" v-if="showType == 'edit'" ref="veStuInsuranceRecordEdit" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceRecordEdit>
      <veStuInsuranceRecordShow v-if="showType == 'show'" ref="veStuInsuranceRecordShow" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceRecordShow>
    </div>
  </edu-layout>
</template>

<script>
import veStuInsuranceTypeApi from '@/module/stu/bxxl/api/veStuInsuranceTypeApi';
import veStuInsuranceRecordApi from '@/module/stu/bxxl/api/veStuInsuranceRecordApi';
import veStuInsuranceRecordEdit from './veStuInsuranceRecordEdit';
import veStuInsuranceRecordShow from './veStuInsuranceRecordShow';

export default {
  components: {
    veStuInsuranceRecordEdit,
    veStuInsuranceRecordShow
  },
  data() {
    const data = {
      veStuInsuranceRecordQuery: {},
      showType: 'table',
      typeNodes: []
    };
    data.veStuInsuranceRecordTable = {
      api: veStuInsuranceRecordApi
    };
    return data;
  },
  mounted() {
    this.initData();
  },
  methods: {
    doImport() {
      return {
        temp: ['用户Id' /* stuId */, '保险Id' /* insuranceId */, '' /* startTime */, '结束时间' /* endTime */, '状态：0=禁用，1=启用' /* status */],
        tempName: '学生保险',
        implName: 'veStuInsuranceRecordServiceImpl.importExcel'
      };
    },
    initData() {
      const sub = {
        conditions: [{ operator: 'eq', column: 'status', value: 1 }]
      };
      veStuInsuranceTypeApi.all(sub).then(res => {
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
      this.$refs.veStuInsuranceRecordTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceRecordEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceRecordEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceRecordShow.doShow(row);
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
      this.$refs.veStuInsuranceRecordTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
