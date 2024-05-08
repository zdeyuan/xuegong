<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="学生理赔详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceClaimsDataForm" labelAlign="right">
        <a-form-model-item label="用户Id">
          {{ veStuInsuranceClaimsVo.stuId }}
        </a-form-model-item>
        <a-form-model-item label="保险Id">
          {{ veStuInsuranceClaimsVo.insuranceid }}
        </a-form-model-item>
        <a-form-model-item label="金额">
          {{ veStuInsuranceClaimsVo.amount }}
        </a-form-model-item>
        <a-form-model-item label="描述">
          {{ veStuInsuranceClaimsVo.description }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceClaimsApi from '@/module/stu/bxxl/api/veStuInsuranceClaimsApi';

export default {
  components: {},
  data() {
    const data = {
      veStuInsuranceClaimsVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuInsuranceClaimsVo = Object.assign({}, row);
      //    veStuInsuranceClaimsApi.get(row.id).then((res) => {
      //      this.veStuInsuranceClaimsVo = res.result
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
