<template>
  <edu-layout type="table">
    <!-- 表格 -->
    <div slot="table" class="right_table">
      <div>
        <edu-query ref="cwQuery" code="veStuInsuranceClaims" :do-filter="handleFilter">
          <template slot="search">
            <edu-query-item title="姓名" pname="xm" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="学号" pname="xh" pop="like" stype="input"> </edu-query-item>
            <edu-query-item title="理赔类型" pname="d.insurance_Id" textKey="insuranceName" pop="eq" stype="select" :datas="typeNodes" dtype="datas">
            </edu-query-item>
          </template>
        </edu-query>
        <edu-table
          ref="veStuInsuranceClaimsTable"
          code="veStuInsuranceClaims"
          :api="veStuInsuranceClaimsTable.api"
          :get-params="getParams"
          :exportConfig="{
            url: 'veStuInsuranceClaims/export',
            name: '《学生理赔表导出》'
          }"
          :config="{
            open: false,
            close: false,
            status: false
          }"
          :doImport="doImport"
          :to-update="handleUpdate"
          :do-add="handleCreate"
        >
          <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
          <a-table-column title="姓名" dataIndex="xm" width="150px"> </a-table-column>
          <a-table-column title="学号" dataIndex="xh" width="150px"> </a-table-column>
          <a-table-column title="理赔类型" dataIndex="insuranceName" width="150px"> </a-table-column>
          <a-table-column title="理赔理赔时间" dataIndex="claimDate" width="150px"> </a-table-column>
          <a-table-column title="金额" dataIndex="amount" width="150px"> </a-table-column>
        </edu-table>
      </div>
      <!-- 编辑页 -->
      <veStuInsuranceClaimsEdit :typeNodes="typeNodes" v-if="showType == 'edit'" ref="veStuInsuranceClaimsEdit" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceClaimsEdit>
      <veStuInsuranceClaimsShow v-if="showType == 'show'" ref="veStuInsuranceClaimsShow" @onOk="editOk" @onCancel="editCancel">
      </veStuInsuranceClaimsShow>
    </div>
  </edu-layout>
</template>

<script>
import veStuInsuranceTypeApi from '@/module/stu/bxxl/api/veStuInsuranceTypeApi';
import veStuInsuranceClaimsApi from '@/module/stu/bxxl/api/veStuInsuranceClaimsApi';
import veStuInsuranceClaimsEdit from './veStuInsuranceClaimsEdit';
import veStuInsuranceClaimsShow from './veStuInsuranceClaimsShow';

export default {
  components: {
    veStuInsuranceClaimsEdit,
    veStuInsuranceClaimsShow
  },
  data() {
    const data = {
      veStuInsuranceClaimsQuery: {},
      showType: 'table',
      typeNodes: []
    };
    data.veStuInsuranceClaimsTable = {
      api: veStuInsuranceClaimsApi
    };
    return data;
  },
  mounted() {
    this.initData();
  },
  methods: {
    doImport() {
      return {
        temp: ['姓名' /* stuId */, '学号' /* insuranceId */, '' /* startTime */, '理赔类型' /* endTime */, '状态：0=禁用，1=启用' /* status */],
        tempName: '学生理赔',
        implName: 'veStuInsuranceClaimsServiceImpl.importExcel'
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
      this.$refs.veStuInsuranceClaimsTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceClaimsEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceClaimsEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceClaimsShow.doShow(row);
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
      this.$refs.veStuInsuranceClaimsTable.reload();
    }
  }
};
</script>
<style lang="less" scoped></style>
