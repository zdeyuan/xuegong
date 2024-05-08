<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="惩罚信息详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuPunishDataForm" labelAlign="right">
        <a-form-model-item label="学生id">
          {{ veStuPunishVo.stuId }}
        </a-form-model-item>
        <a-form-model-item label="学生姓名">
          {{ veStuPunishVo.name }}
        </a-form-model-item>
        <a-form-model-item label="学生学号">
          {{ veStuPunishVo.code }}
        </a-form-model-item>
        <a-form-model-item label="院系id">
          {{ veStuPunishVo.falId }}
        </a-form-model-item>
        <a-form-model-item label="专业id">
          {{ veStuPunishVo.specId }}
        </a-form-model-item>
        <a-form-model-item label="班级id">
          {{ veStuPunishVo.bjId }}
        </a-form-model-item>
        <a-form-model-item label="惩罚类型id">
          {{ veStuPunishVo.typeId }}
        </a-form-model-item>
        <a-form-model-item label="惩罚时间">
          {{ veStuPunishVo.punishTime }}
        </a-form-model-item>
        <a-form-model-item label="惩罚描述">
          {{ veStuPunishVo.content }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuPunishApi from '@/module/stu/stu/api/veStuPunishApi';

export default {
  components: {},
  data() {
    const data = {
      veStuPunishVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuPunishVo = Object.assign({}, row);
      //    veStuPunishApi.get(row.id).then((res) => {
      //      this.veStuPunishVo = res.result
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
