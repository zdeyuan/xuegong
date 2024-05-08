<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="学生保险详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceRecordDataForm" labelAlign="right">
        <a-form-model-item label="用户Id">
          {{ veStuInsuranceRecordVo.stuId }}
        </a-form-model-item>
        <a-form-model-item label="保险Id">
          {{ veStuInsuranceRecordVo.insuranceId }}
        </a-form-model-item>
        <a-form-model-item label="">
          {{ veStuInsuranceRecordVo.startTime }}
        </a-form-model-item>
        <a-form-model-item label="结束时间">
          {{ veStuInsuranceRecordVo.endTime }}
        </a-form-model-item>
        <a-form-model-item label="状态：0=禁用，1=启用">
          {{ veStuInsuranceRecordVo.status }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceRecordApi from '@/module/stu/bxxl/api/veStuInsuranceRecordApi';

export default {
  components: {},
  data() {
    const data = {
      veStuInsuranceRecordVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuInsuranceRecordVo = Object.assign({}, row);
      //    veStuInsuranceRecordApi.get(row.id).then((res) => {
      //      this.veStuInsuranceRecordVo = res.result
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
