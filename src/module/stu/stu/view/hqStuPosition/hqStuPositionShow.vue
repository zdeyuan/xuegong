<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="职位信息详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="hqStuPositionDataForm" labelAlign="right">
        <a-form-model-item label="职位名称">
          {{ hqStuPositionVo.title }}
        </a-form-model-item>
        <a-form-model-item label="职位编号，同一终端唯一">
          {{ hqStuPositionVo.code }}
        </a-form-model-item>
        <a-form-model-item label="需要人数">
          {{ hqStuPositionVo.num }}
        </a-form-model-item>
        <a-form-model-item label="已批人数">
          {{ hqStuPositionVo.hasNum }}
        </a-form-model-item>
        <a-form-model-item label="学期id">
          {{ hqStuPositionVo.semesterId }}
        </a-form-model-item>
        <a-form-model-item label="发布部门id">
          {{ hqStuPositionVo.departmentId }}
        </a-form-model-item>
        <a-form-model-item label="薪资">
          {{ hqStuPositionVo.money }}
        </a-form-model-item>
        <a-form-model-item label="职位要求描述">
          {{ hqStuPositionVo.requirement }}
        </a-form-model-item>
        <a-form-model-item label="工作内容描述">
          {{ hqStuPositionVo.content }}
        </a-form-model-item>
        <a-form-model-item label="是否需要面试;1是0否">
          {{ hqStuPositionVo.isView }}
        </a-form-model-item>
        <a-form-model-item label="发布状态;1发布0未发布">
          {{ hqStuPositionVo.status }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import hqStuPositionApi from '@/module/stu/stu/api/hqStuPositionApi';

export default {
  components: {},
  data() {
    const data = {
      hqStuPositionVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.hqStuPositionVo = Object.assign({}, row);
      //    hqStuPositionApi.get(row.id).then((res) => {
      //      this.hqStuPositionVo = res.result
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
