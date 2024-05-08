<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form title="奖励信息详情" :isShowBtnSure="false" @cancel="handelCancel">
      <a-form-model ref="veStuRewardDataForm" labelAlign="right">
        <a-form-model-item label="学生id(个人)">
          {{ veStuRewardVo.stuId }}
        </a-form-model-item>
        <a-form-model-item label="学生姓名">
          {{ veStuRewardVo.name }}
        </a-form-model-item>
        <a-form-model-item label="学生学号">
          {{ veStuRewardVo.code }}
        </a-form-model-item>
        <a-form-model-item label="院系id">
          {{ veStuRewardVo.falId }}
        </a-form-model-item>
        <a-form-model-item label="专业id">
          {{ veStuRewardVo.specId }}
        </a-form-model-item>
        <a-form-model-item label="奖励类型id">
          {{ veStuRewardVo.typeId }}
        </a-form-model-item>
        <a-form-model-item label="班级id(集体)或学生所属班级id">
          {{ veStuRewardVo.bjId }}
        </a-form-model-item>
        <a-form-model-item label="文件id（申请材料）">
          {{ veStuRewardVo.fileId }}
        </a-form-model-item>
        <a-form-model-item label="获奖时间">
          {{ veStuRewardVo.rewardTime }}
        </a-form-model-item>
        <a-form-model-item label="获奖描述">
          {{ veStuRewardVo.content }}
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuRewardApi from '@/module/stu/stu/api/veStuRewardApi';

export default {
  components: {},
  data() {
    const data = {
      veStuRewardVo: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 初始化修改
     */
    doShow(row) {
      this.veStuRewardVo = Object.assign({}, row);
      //    veStuRewardApi.get(row.id).then((res) => {
      //      this.veStuRewardVo = res.result
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
