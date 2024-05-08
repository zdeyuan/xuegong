<template>
  <div class="edit_form">
        <!-- 编辑页 -->
        <edu-form
          title="保险申请审核详情"
          :isShowBtnSure="false"
          @cancel="handelCancel"
        >
          <a-form-model
            ref="veStuInsuranceAuditDataForm"
            labelAlign="right"
          >
                             <a-form-model-item label="购买保险学生id" >
                        {{veStuInsuranceAuditVo.stuId}}
                </a-form-model-item>
                            <a-form-model-item label="保险id" >
                        {{veStuInsuranceAuditVo.insuranceId}}
                </a-form-model-item>
                            <a-form-model-item label="保险开始时间" >
                        {{veStuInsuranceAuditVo.startTime}}
                </a-form-model-item>
                            <a-form-model-item label="保险结束时间" >
                        {{veStuInsuranceAuditVo.endTime}}
                </a-form-model-item>
                            <a-form-model-item label="添加时间" >
                        {{veStuInsuranceAuditVo.createTime}}
                </a-form-model-item>
                            <a-form-model-item label="保险审核状态  0=待审核  1=通过  2=不通过" >
                        {{veStuInsuranceAuditVo.auditStatus}}
                </a-form-model-item>
                            <a-form-model-item label="审核时间" >
                        {{veStuInsuranceAuditVo.auditTime}}
                </a-form-model-item>
                      </a-form-model>
        </edu-form>
  </div>
</template>

<script>
import veStuInsuranceAuditApi from "@/module/stu/bxxl/api/veStuInsuranceAuditApi";

export default {
  components: { },
  data() {
    const data = {
      veStuInsuranceAuditVo: {},
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuInsuranceAuditVo =Object.assign({}, row)
  //    veStuInsuranceAuditApi.get(row.id).then((res) => {
    //      this.veStuInsuranceAuditVo = res.result
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
<style lang="less" scoped>

</style>