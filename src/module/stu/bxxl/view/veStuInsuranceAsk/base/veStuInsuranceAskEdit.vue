<template>
  <div class="edit_form">
    <!-- 编辑页
               <a-row>
              <a-col :span="12"> </a-col>
              <a-col :span="12"> </a-col>
            </a-row>-->
    <edu-form :title="textMap[dialogStatus]" @ok="dialogStatus === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceAskDataForm" :rules="veStuInsuranceAskRules" :model="veStuInsuranceAskVo" labelAlign="right">
        <a-form-model-item label="标题" prop="title" required>
          <a-input v-model="veStuInsuranceAskVo.title" :maxLength="100" placeholder="请输入标题" />
        </a-form-model-item>
        <a-form-model-item label="问题内容" prop="content" required>
          <a-textarea v-model="veStuInsuranceAskVo.content" :maxLength="300" placeholder="请输入问题内容" :rows="4" />
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceAskApi from '@/module/stu/bxxl/api/veStuInsuranceAskApi';

export default {
  components: {},
  data() {
    const data = {
      veStuInsuranceAskVo: this.resetveStuInsuranceAskVo(),
      textMap: {
        update: '编辑-保险理赔咨询表',
        create: '新增-保险理赔咨询表'
      },
      dialogStatus: 'create',
      veStuInsuranceAskRules: {}
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 重置数据
     */
    resetveStuInsuranceAskVo() {
      return {
        name: '', // 姓名
        code: '', // 学号
        userId: '', // 用户Id
        userName: '', //
        title: '', // 标题
        isDelete: 0, // 是否删除（0：否，1：是）
        content: '' // 问题内容
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.dialogStatus = 'create';
      this.veStuInsuranceAskVo = this.resetveStuInsuranceAskVo();
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAskDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuInsuranceAskApi.get(row.id).then(res => {
        this.veStuInsuranceAskVo = res.result;
      });
      this.dialogStatus = 'update';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceAskDataForm.clearValidate();
      });
    },
    /**
     * @msg: 编辑页取消
     */
    handelCancel() {
      this.$emit('onCancel');
    },
    /**
     * @msg: 获取提交的数据 新增和 修改复用
     */
    getSubData(isUpdate) {
      const tempData = Object.assign({}, this.veStuInsuranceAskVo);
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuInsuranceAskDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuInsuranceAskApi.add(subData).then(res => {
            this.$notification.success({
              message: '数据新增成功',
              description: '新增了一条数据'
            });
            this.$emit('onOk');
          });
        }
      });
    },
    /**
     * @msg: 调用Api修改数据
     */
    updateData() {
      this.$refs.veStuInsuranceAskDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuInsuranceAskApi.update(subData).then(() => {
            this.$notification.success({
              message: '数据修改成功',
              description: '修改了一条数据'
            });
            this.$emit('onOk');
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
