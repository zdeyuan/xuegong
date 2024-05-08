<template>
  <div class="edit_form">
        <!-- 编辑页 -->
        <edu-form
          title="详情"
          :isShowBtnSure="false"
          @cancel="handelCancel"
        >
          <a-form-model
            ref="veStuYyprojectDataForm"
            labelAlign="right"
          >
                             <a-form-model-item label="预约项目对象" >
                        {{veStuYyprojectVo.type}}
                </a-form-model-item>
                            <a-form-model-item label=" 预约设备ID" >
                        {{veStuYyprojectVo.sbId}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYyprojectVo.sbName}}
                </a-form-model-item>
                            <a-form-model-item label="预约说明" >
                        {{veStuYyprojectVo.yyRemark}}
                </a-form-model-item>
                            <a-form-model-item label="限制人数" >
                        {{veStuYyprojectVo.limitNum}}
                </a-form-model-item>
                            <a-form-model-item label="开始时间" >
                        {{veStuYyprojectVo.statusTime}}
                </a-form-model-item>
                            <a-form-model-item label="结束时间" >
                        {{veStuYyprojectVo.endTime}}
                </a-form-model-item>
                            <a-form-model-item label="状态（1：启用，0：禁用）" >
                        {{veStuYyprojectVo.status}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYyprojectVo.campusId}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYyprojectVo.jzId}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYyprojectVo.jsId}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYyprojectVo.address}}
                </a-form-model-item>
                            <a-form-model-item label="项目负责人id" >
                        {{veStuYyprojectVo.projectId}}
                </a-form-model-item>
                            <a-form-model-item label="发布状态" >
                        {{veStuYyprojectVo.isPublic}}
                </a-form-model-item>
                            <a-form-model-item label="项目负责人" >
                        {{veStuYyprojectVo.projectIdText}}
                </a-form-model-item>
                            <a-form-model-item label="审核人ID" >
                        {{veStuYyprojectVo.authPersonId}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYyprojectVo.authPersionText}}
                </a-form-model-item>
                            <a-form-model-item label="审核状态(1通过，0不通过，2未审核)" >
                        {{veStuYyprojectVo.authStatus}}
                </a-form-model-item>
                            <a-form-model-item label="不通过原因" >
                        {{veStuYyprojectVo.auditReason}}
                </a-form-model-item>
                            <a-form-model-item label="预约形式（1.自主预约，2.常规时间预约）" >
                        {{veStuYyprojectVo.yyType}}
                </a-form-model-item>
                      </a-form-model>
        </edu-form>
  </div>
</template>

<script>
import veStuYyprojectApi from "@/module/stu/jis/api/veStuYyprojectApi";

export default {
  components: { },
  data() {
    const data = {
      veStuYyprojectVo: {},
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuYyprojectVo =Object.assign({}, row)
  //    veStuYyprojectApi.get(row.id).then((res) => {
    //      this.veStuYyprojectVo = res.result
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