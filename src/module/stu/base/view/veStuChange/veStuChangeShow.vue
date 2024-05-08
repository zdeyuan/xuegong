<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="学生学籍异动详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuChangeDataForm" labelAlign="right">
        <a-form-model-item label="学号">
          {{ veStuChangeVo.code }}
        </a-form-model-item>
        <a-form-model-item label="姓名">
          {{ veStuChangeVo.name }}
        </a-form-model-item>
        <a-form-model-item label="学生id">
          {{ veStuChangeVo.stuId }}
        </a-form-model-item>
        <a-form-model-item label="异动类别码;1=>'退学',2=>'休学',3=>'转专业',4=>'留级',5=>'转入',6=>'转出',">
          {{ veStuChangeVo.ydlbm }}
        </a-form-model-item>
        <a-form-model-item label="异动日期">
          {{ veStuChangeVo.ydDate }}
        </a-form-model-item>
        <a-form-model-item label="异动原因">
          {{ veStuChangeVo.ydMsg }}
        </a-form-model-item>
        <a-form-model-item label="审批日期">
          {{ veStuChangeVo.spDate }}
        </a-form-model-item>
        <a-form-model-item label="审批文号">
          {{ veStuChangeVo.spwh }}
        </a-form-model-item>
        <a-form-model-item label="经办人工号">
          {{ veStuChangeVo.jbrgh }}
        </a-form-model-item>
        <a-form-model-item label="异动来源学校码">
          {{ veStuChangeVo.ydlyxxm }}
        </a-form-model-item>
        <a-form-model-item label="异动去向学校码">
          {{ veStuChangeVo.ydqxxm }}
        </a-form-model-item>
        <a-form-model-item label="异动说明">
          {{ veStuChangeVo.ydsm }}
        </a-form-model-item>
        <a-form-model-item label="">
          {{ veStuChangeVo.ofalId }}
        </a-form-model-item>
        <a-form-model-item label="原专业码">
          {{ veStuChangeVo.ospecId }}
        </a-form-model-item>
        <a-form-model-item label="原班号">
          {{ veStuChangeVo.objId }}
        </a-form-model-item>
        <a-form-model-item label="原年级">
          {{ veStuChangeVo.ogradeId }}
        </a-form-model-item>
        <a-form-model-item label="院系">
          {{ veStuChangeVo.falId }}
        </a-form-model-item>
        <a-form-model-item label="专业码">
          {{ veStuChangeVo.specId }}
        </a-form-model-item>
        <a-form-model-item label="班级">
          {{ veStuChangeVo.bjId }}
        </a-form-model-item>
        <a-form-model-item label="年级">
          {{ veStuChangeVo.gradeId }}
        </a-form-model-item>
        <a-form-model-item label="异动恢复状态;1已恢复">
          {{ veStuChangeVo.isRecover }}
        </a-form-model-item>
        <a-form-model-item label="异动恢复操作人id">
          {{ veStuChangeVo.recoverUserId }}
        </a-form-model-item>
        <a-form-model-item label="异动恢复时间">
          {{ veStuChangeVo.recoverTime }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuChangeApi from '@/module/stu/base/api/veStuChangeApi';

export default {
  components: {},
  data() {
    const data = {
      veStuChangeVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuChangeVo = Object.assign({}, row);
      //    veStuChangeApi.get(row.id).then((res) => {
      //      this.veStuChangeVo = res.result
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
