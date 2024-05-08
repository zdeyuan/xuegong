<template>
  <div class="edit_form">
        <!-- 编辑页 -->
        <edu-form
          title="预约与学生关联表详情"
          :isShowBtnSure="false"
          @cancel="handelCancel"
        >
          <a-form-model
            ref="veStuYystuDataForm"
            labelAlign="right"
          >
                             <a-form-model-item label="" >
                        {{veStuYystuVo.stuId}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYystuVo.yyId}}
                </a-form-model-item>
                            <a-form-model-item label="预约开始时间" >
                        {{veStuYystuVo.yystartTime}}
                </a-form-model-item>
                            <a-form-model-item label="预约结束时间" >
                        {{veStuYystuVo.yyendTime}}
                </a-form-model-item>
                            <a-form-model-item label="" >
                        {{veStuYystuVo.yyReason}}
                </a-form-model-item>
                            <a-form-model-item label="提交的预约是否审核成功(1通过，0不通过，2.未审核)" >
                        {{veStuYystuVo.yyauthStatus}}
                </a-form-model-item>
                            <a-form-model-item label="审核不成果的原因" >
                        {{veStuYystuVo.yyauthReason}}
                </a-form-model-item>
                            <a-form-model-item label="常规时间预约" >
                        {{veStuYystuVo.currentTime}}
                </a-form-model-item>
                      </a-form-model>
        </edu-form>
  </div>
</template>

<script>
import veStuYystuApi from "@/module/stu/jis/api/veStuYystuApi";

export default {
  components: { },
  data() {
    const data = {
      veStuYystuVo: {},
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuYystuVo =Object.assign({}, row)
  //    veStuYystuApi.get(row.id).then((res) => {
    //      this.veStuYystuVo = res.result
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