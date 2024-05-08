<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="保险类型详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceTypeDataForm" labelAlign="right">
        <a-form-model-item label="保险名称">
          {{ veStuInsuranceTypeVo.insuranceName }}
        </a-form-model-item>
        <a-form-model-item label="保险描述">
          {{ veStuInsuranceTypeVo.description }}
        </a-form-model-item>
        <a-form-model-item label="保险公司名称">
          {{ veStuInsuranceTypeVo.company }}
        </a-form-model-item>
        <a-form-model-item label="状态：0=禁用，1=启用">
          {{ veStuInsuranceTypeVo.status }}
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
      veStuInsuranceTypeVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuInsuranceTypeVo = Object.assign({}, row);
      //    veStuInsuranceTypeApi.get(row.id).then((res) => {
      //      this.veStuInsuranceTypeVo = res.result
      // });
    },
    /**
     * @msg: 编辑页取消
     */
    handelCancel() {
      this.$emit('onCancel');
    }
  }
};
</script>
<style lang="less" scoped></style>
