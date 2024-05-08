<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="理赔知识类型详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceKnowledgeTypeDataForm" labelAlign="right">
        <a-form-model-item label="类型名称">
          {{ veStuInsuranceKnowledgeTypeVo.typeName }}
        </a-form-model-item>
        <a-form-model-item label="状态：0=禁用，1=启用">
          {{ veStuInsuranceKnowledgeTypeVo.status }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceKnowledgeTypeApi from '@/module/stu/bxxl/api/veStuInsuranceKnowledgeTypeApi';

export default {
  components: {},
  data() {
    const data = {
      veStuInsuranceKnowledgeTypeVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuInsuranceKnowledgeTypeVo = Object.assign({}, row);
      //    veStuInsuranceKnowledgeTypeApi.get(row.id).then((res) => {
      //      this.veStuInsuranceKnowledgeTypeVo = res.result
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
