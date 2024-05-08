<template>
  <div class="edit_form">
    <!-- 编辑页
               <a-row>
              <a-col :span="12"> </a-col>
              <a-col :span="12"> </a-col>
            </a-row>-->
    <edu-form :title="textMap[dialogStatus]" @ok="dialogStatus === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceTypeDataForm" :rules="veStuInsuranceTypeRules" :model="veStuInsuranceTypeVo" labelAlign="right">
        <a-form-model-item label="保险名称" prop="insuranceName" required>
          <a-input v-model="veStuInsuranceTypeVo.insuranceName" :maxLength="100" placeholder="请输入保险名称" />
        </a-form-model-item>
        <a-form-model-item label="保险描述" prop="description" required>
          <a-textarea v-model="veStuInsuranceTypeVo.description" :maxLength="300" placeholder="请输入保险描述" :rows="4" />
        </a-form-model-item>
        <a-form-model-item label="保险公司名称" prop="company" required>
          <a-input v-model="veStuInsuranceTypeVo.company" :maxLength="100" placeholder="请输入保险公司名称" />
        </a-form-model-item>
        <a-form-model-item label="状态" prop="status" required>
          <edu-data v-model="veStuInsuranceTypeVo.status" stype="radio" code="status" />
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceTypeApi from '@/module/stu/bxxl/api/veStuInsuranceTypeApi';

export default {
  components: {},
  data() {
    const data = {
      veStuInsuranceTypeVo: this.resetveStuInsuranceTypeVo(),
      textMap: {
        update: '编辑-保险类型',
        create: '新增-保险类型'
      },
      dialogStatus: 'create',
      veStuInsuranceTypeRules: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 重置数据
     */
    resetveStuInsuranceTypeVo() {
      return {
        insuranceName: '', // 保险名称
        description: '', // 保险描述
        company: '', // 保险公司名称
        status: 1 // 状态：0=禁用，1=启用
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.dialogStatus = 'create';
      this.veStuInsuranceTypeVo = this.resetveStuInsuranceTypeVo();
      this.$nextTick(() => {
        this.$refs.veStuInsuranceTypeDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuInsuranceTypeApi.get(row.id).then(res => {
        this.veStuInsuranceTypeVo = res.result;
      });
      this.dialogStatus = 'update';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceTypeDataForm.clearValidate();
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
      const tempData = Object.assign({}, this.veStuInsuranceTypeVo);
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuInsuranceTypeDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuInsuranceTypeApi.add(subData).then(res => {
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
      this.$refs.veStuInsuranceTypeDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuInsuranceTypeApi.update(subData).then(() => {
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
