<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-06-13 15:09:12
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-06-13 15:23:03
-->
<template>
  <div class="edit_form">
    <a-form-model ref="veStuGraduationDataForm" labelAlign="right">
      <a-form-model-item :label="name + '审核'" prop="falName">
        <template v-if="info.auditStatus">
          审核<edu-dict-text code="biyeStatus" :class="'status' + value" :value="info.auditStatus"></edu-dict-text>
        </template>
      </a-form-model-item>
      <a-form-model-item label="备注" prop="specId">
        {{ info.remark }}
      </a-form-model-item>
      <a-form-model-item label="审核人" prop="specName">
        {{ info.createDate }}
      </a-form-model-item>
      <a-form-model-item label="审核时间" prop="gradeId">
        {{ info.createDate }}
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import veStuGraduationAuditInfoApi from '@/module/stu/biye/api/veStuGraduationAuditInfoApi';
export default {
  props: {
    code: String,
    name: String,
    dataId: String
  },
  components: {},
  data() {
    const data = {
      info: {}
    };
    return data;
  },
  mounted() {
    const sub = {
      conditions: [
        { operator: 'eq', column: 'audit_type', value: this.code },
        { operator: 'eq', column: 'stu_id', value: this.dataId }
      ]
    };
    veStuGraduationAuditInfoApi.all(sub).then(res => {
      if (res.result.length > 0) {
        thsi.info = res.result[0];
      }
    });
  },
  methods: {}
};
</script>
<style lang="less" scoped></style>
