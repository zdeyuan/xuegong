<template>
  <!-- 表格 -->
  <div slot="table" class="right_table">
    <div>
      <edu-query ref="cwQuery" code="veStuInsuranceAudit" :do-filter="handleFilter">
        <template slot="search">
          <edu-query-item title="保险名称" pname="a.insurance_name" pop="like" stype="input"> </edu-query-item>
          <edu-query-item title="学生名称" pname="xm" pop="like" stype="input"> </edu-query-item>
        </template>
      </edu-query>
      <edu-table
        ref="veStuInsuranceAuditTable"
        code="veStuInsuranceAudit"
        :rowBtnShowCallback="rowBtnShowCallback"
        :api="veStuInsuranceAuditTable.api"
        :get-params="getParams"
        :config="{
          open: false,
          close: false,
          status: false,
          bdelete: false,
          checkBox: false,
          delete: viewType == 'apply'
        }"
        :isAutoBtn="viewType == 'shen'"
      >
        <template slot="top_bef_btn">
          <edu-pms
            :code="'vd'"
            v-if="viewType == 'apply'"
            type="primary"
            ext="success"
            iconfont="check-circle"
            name="保险申请"
            @click="handleCreate()"
          ></edu-pms>
          <edu-pms
            :code="'vd'"
            v-if="viewType == 'shen'"
            type="primary"
            ext="success"
            iconfont="check-circle"
            name="通过"
            @click="updateStatus('all', 1)"
          ></edu-pms>
          <edu-pms
            :code="'ved'"
            v-if="viewType == 'shen'"
            type="primary"
            ext="delete"
            iconfont="stop"
            name="未通过"
            @click="updateStatus('all', 2)"
          ></edu-pms>
        </template>
        <!--         <template slot-scope="text, record, index">
       <span></span>
       </template>-->
        <a-table-column title="姓名" dataIndex="xm" width="150px"> </a-table-column>
        <a-table-column title="学号" dataIndex="xh" width="150px"> </a-table-column>
        <a-table-column title="保险名称" dataIndex="insuranceName" width="150px"> </a-table-column>
        <a-table-column title="开始时间" dataIndex="startTime" width="150px"> </a-table-column>
        <a-table-column title="结束时间" dataIndex="endTime" width="150px"> </a-table-column>
        <a-table-column title="审核状态" dataIndex="auditStatus" width="150px">
          <template slot-scope="value">
            <edu-dict-text code="xjAuditStatus" :class="'status' + value" :value="value"></edu-dict-text>
          </template>
        </a-table-column>
      </edu-table>
    </div>
    <!-- 编辑页 -->
    <veStuInsuranceAuditEdit v-if="showType == 'edit'" ref="veStuInsuranceAuditEdit" @onOk="editOk" @onCancel="editCancel"> </veStuInsuranceAuditEdit>
    <veStuInsuranceAuditShow v-if="showType == 'show'" ref="veStuInsuranceAuditShow" @onOk="editOk" @onCancel="editCancel"> </veStuInsuranceAuditShow>
  </div>
</template>

<script>
import veStuInsuranceAuditApi from '@/module/stu/bxxl/api/veStuInsuranceAuditApi';
import veStuInsuranceAuditEdit from './veStuInsuranceAuditEdit';
import veStuInsuranceAuditShow from './veStuInsuranceAuditShow';
import { baseMixins } from '@/core/mixins/baseMixins';

export default {
  props: {
    viewType: String
  },
  components: {
    veStuInsuranceAuditEdit,
    veStuInsuranceAuditShow
  },
  data() {
    const data = {
      veStuInsuranceAuditQuery: {},
      showType: 'table'
    };
    data.veStuInsuranceAuditTable = {
      api: veStuInsuranceAuditApi
    };
    return data;
  },
  mixins: [baseMixins],
  mounted() {},
  methods: {
    rowBtnShowCallback(type, row) {
      if (row.auditStatus == 1) {
        return false;
      }
      return true;
    },
    updateStatus(id, status) {
      let ssids = [id];
      if (id == 'all') {
        const ids = [];
        const datas = this.$refs.veStuInsuranceAuditTable.getSelectRow();
        if (!datas || datas.length == 0) {
          this.$message.error('请选择一项');
          return;
        }
        for (let i = 0; i < datas.length; i++) {
          const element = datas[i];
          if (element.auditStatus != 0) {
            this.$message.error('请选择未审核的数据');
            return;
          }
          ids.push(element.id);
        }
        ssids = ids;
      }
      const sub = {
        ids: ssids,
        status: status
      };
      veStuInsuranceAuditApi.updateStatus(sub).then(res => {
        this.$notification.success({
          message: '审核成功',
          description: `成功审核[${ssids.length}]条数据`
        });
        this.$refs.veStuInsuranceAuditTable.reload();
      });
    },
    /**
     * @msg: 表格获取请求数据 必须return 一个对象
     */
    getParams() {
      const params = this.$refs['cwQuery'].getQueryData();

      if (this.viewType == 'apply') {
        this.$utils.addPageConditions(params, 'd.create_by', 'eq', this.loginInfo.userId);
      }

      return params;
    },
    /**
     * @msg: 搜索事件
     */
    handleFilter() {
      this.$refs.veStuInsuranceAuditTable.reload();
    },
    /**
     * @msg: 新增事件
     */
    handleCreate() {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAuditEdit.doCreate();
      });
    },
    /**
     * @msg: 编辑行事件
     */
    handleUpdate(row) {
      this.showType = 'edit';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAuditEdit.doUpdate(row);
      });
    },
    /**
     * @msg: 编辑行事件
     */
    toDetail(row) {
      this.showType = 'show';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAuditShow.doShow(row);
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
      this.$refs.veStuInsuranceAuditTable.reload();
    }
  }
};
</script>
<style lang="less" scoped>
.status1 {
  color: #039471;
}
.status2 {
  color: rgb(212, 117, 117);
}
.status0 {
  color: #999;
}
</style>
