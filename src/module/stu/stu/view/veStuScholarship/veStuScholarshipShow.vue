<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="奖学金信息详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuScholarshipDataForm" labelAlign="right">
        <a-form-model-item label="学生id">
          {{ veStuScholarshipVo.stuId }}
        </a-form-model-item>
        <a-form-model-item label="类型id">
          {{ veStuScholarshipVo.typeId }}
        </a-form-model-item>
        <a-form-model-item label="获得时间">
          {{ veStuScholarshipVo.actionTime }}
        </a-form-model-item>
        <a-form-model-item label="描述">
          {{ veStuScholarshipVo.content }}
        </a-form-model-item>
        <a-form-model-item label="发放状态;1已发放，2未发放">
          {{ veStuScholarshipVo.status }}
        </a-form-model-item>
        <a-form-model-item label="发放时间">
          {{ veStuScholarshipVo.giveTime }}
        </a-form-model-item>
        <a-form-model-item label="审核状态(2待审核，1审核通过，0审核不通过）">
          {{ veStuScholarshipVo.auditStatus }}
        </a-form-model-item>
        <a-form-model-item label="审核人">
          {{ veStuScholarshipVo.auditUserId }}
        </a-form-model-item>
        <a-form-model-item label="">
          {{ veStuScholarshipVo.auditUserName }}
        </a-form-model-item>
        <a-form-model-item label="审核不通过原因">
          {{ veStuScholarshipVo.auditContent }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuScholarshipApi from '@/module/stu/stu/api/veStuScholarshipApi';

export default {
  components: {},
  data() {
    const data = {
      veStuScholarshipVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuScholarshipVo = Object.assign({}, row);
      //    veStuScholarshipApi.get(row.id).then((res) => {
      //      this.veStuScholarshipVo = res.result
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
