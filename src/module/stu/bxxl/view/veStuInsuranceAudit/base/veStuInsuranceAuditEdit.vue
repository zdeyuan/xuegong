<template>
  <div class="edit_form">
    <!-- 编辑页
               <a-row>
              <a-col :span="12"> </a-col>
              <a-col :span="12"> </a-col>
            </a-row>-->
    <edu-form :title="textMap[dialogStatus]" @ok="dialogStatus === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceAuditDataForm" :rules="veStuInsuranceAuditRules" :model="veStuInsuranceAuditVo" labelAlign="right">
        <a-form-model-item label="购买人" prop="stuId" required>
          {{ loginInfo.userName }}
        </a-form-model-item>
        <a-form-model-item label="保险类型" prop="insuranceId" required>
          <edu-data v-model="veStuInsuranceAuditVo.insuranceId" stype="select" :datas="typeNodes" textKey="insuranceName" dtype="datas" />
        </a-form-model-item>

        <a-form-model-item label="保险开始时间" prop="startTime" required>
          <a-date-picker v-model="veStuInsuranceAuditVo.startTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
        <a-form-model-item label="保险结束时间" prop="endTime" required>
          <a-date-picker v-model="veStuInsuranceAuditVo.endTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceTypeApi from '@/module/stu/bxxl/api/veStuInsuranceTypeApi';
import veStuInsuranceAuditApi from '@/module/stu/bxxl/api/veStuInsuranceAuditApi';
import { baseMixins } from '@/core/mixins/baseMixins';
export default {
  mixins: [baseMixins],
  components: {},
  data() {
    const data = {
      veStuInsuranceAuditVo: this.resetveStuInsuranceAuditVo(),
      textMap: {
        update: '编辑-保险申请',
        create: '新增-保险申请'
      },
      dialogStatus: 'create',
      veStuInsuranceAuditRules: {},
      typeNodes: []
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
      veStuInsuranceTypeApi.all(sub).then(res => {
        this.typeNodes = res.result;
      });
    },
    /**
     * @msg: 重置数据
     */
    resetveStuInsuranceAuditVo() {
      return {
        stuId: 1, // 购买保险学生id
        insuranceId: '', // 保险id
        startTime: '', // 保险开始时间
        endTime: '', // 保险结束时间
        auditStatus: 0, // 保险审核状态  0=待审核  1=通过  2=不通过
        auditTime: '' // 审核时间
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.dialogStatus = 'create';
      this.veStuInsuranceAuditVo = this.resetveStuInsuranceAuditVo();
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAuditDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuInsuranceAuditApi.get(row.id).then(res => {
        this.veStuInsuranceAuditVo = res.result;
      });
      this.dialogStatus = 'update';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAuditDataForm.clearValidate();
      });
    },
    /**
     * @msg: 编辑页取消
     */
    handelCancel() {
      this.$emit('onCancel');
    },
    /**
     * @msg: 获取提交的数据 新增和 修改复用
     */
    getSubData(isUpdate) {
      const tempData = Object.assign({}, this.veStuInsuranceAuditVo);
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuInsuranceAuditDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuInsuranceAuditApi.add(subData).then(res => {
            this.$notification.success({
              message: '数据新增成功',
              description: '新增了一条数据'
            });
            this.$emit('onOk');
          });
        }
      });
    },
    /**
     * @msg: 调用Api修改数据
     */
    updateData() {
      this.$refs.veStuInsuranceAuditDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuInsuranceAuditApi.update(subData).then(() => {
            this.$notification.success({
              message: '数据修改成功',
              description: '修改了一条数据'
            });
            this.$emit('onOk');
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
