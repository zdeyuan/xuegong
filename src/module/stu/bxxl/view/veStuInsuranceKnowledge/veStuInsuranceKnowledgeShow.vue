<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="保险理赔知识详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceKnowledgeDataForm" labelAlign="right">
        <a-form-model-item label="知识类型Id">
          {{ veStuInsuranceKnowledgeVo.typeId }}
        </a-form-model-item>
        <a-form-model-item label="标题">
          {{ veStuInsuranceKnowledgeVo.title }}
        </a-form-model-item>
        <a-form-model-item label="内容">
          {{ veStuInsuranceKnowledgeVo.content }}
        </a-form-model-item>
        <a-form-model-item label="排序">
          {{ veStuInsuranceKnowledgeVo.listNum }}
        </a-form-model-item>
        <a-form-model-item label="发布人">
          {{ veStuInsuranceKnowledgeVo.userId }}
        </a-form-model-item>
        <a-form-model-item label="">
          {{ veStuInsuranceKnowledgeVo.userName }}
        </a-form-model-item>
        <a-form-model-item label="状态：0=禁用，1=启用">
          {{ veStuInsuranceKnowledgeVo.status }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceKnowledgeApi from '@/module/stu/bxxl/api/veStuInsuranceKnowledgeApi';

export default {
  components: {},
  data() {
    const data = {
      veStuInsuranceKnowledgeVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuInsuranceKnowledgeVo = Object.assign({}, row);
      //    veStuInsuranceKnowledgeApi.get(row.id).then((res) => {
      //      this.veStuInsuranceKnowledgeVo = res.result
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
