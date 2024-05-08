<template>
  <div class="edit_form">
    <!-- 编辑页
               <a-row>
              <a-col :span="12"> </a-col>
              <a-col :span="12"> </a-col>
            </a-row>-->
    <edu-form :title="textMap[dialogStatus]" @ok="dialogStatus === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuMoralActiveDataForm" :rules="veStuMoralActiveRules" :model="veStuMoralActiveVo" labelAlign="right">
        <a-form-model-item label="活动标题" prop="title" required>
          <a-input v-model="veStuMoralActiveVo.title" :maxLength="200" placeholder="请输入活动标题" />
        </a-form-model-item>
        <a-form-model-item label="活动内容" prop="content">
          <ueditor ref="ueditor" style="width: 100%%;"></ueditor>
        </a-form-model-item>
        <a-form-model-item label="是否全校" prop="isAll" required>
          <edu-data v-model="veStuMoralActiveVo.isAll" stype="radio" code="shifou" />
        </a-form-model-item>
        <a-form-model-item label="参与学生" v-if="veStuMoralActiveVo.isAll == 0" prop="userIds">
          <stuSelect ref="stuSelect" :check="true"></stuSelect>
        </a-form-model-item>
        <a-form-model-item label="开始时间" prop="startTime" required>
          <a-date-picker v-model="veStuMoralActiveVo.startTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
        <a-form-model-item label="结束时间" prop="endTime" required>
          <a-date-picker v-model="veStuMoralActiveVo.endTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuMoralActiveApi from '@/module/stu/zhsz/api/veStuMoralActiveApi';
import ueditor from '@/components/ueditor';
import stuSelect from '@/components/stuSelect';
import { baseMixins } from '@/core/mixins/baseMixins';

export default {
  mixins: [baseMixins],
  components: { ueditor, stuSelect },
  data() {
    let validateUserZy = (rule, value, callback) => {
      const data = this.$refs.stuSelect.getValue();
      if (data && data.length > 0) {
        callback();
      } else {
        callback(new Error('请选择'));
      }
    };
    const data = {
      veStuMoralActiveVo: this.resetveStuMoralActiveVo(),
      textMap: {
        update: '编辑-德育活动',
        create: '新增-德育活动'
      },
      dialogStatus: 'create',
      veStuMoralActiveRules: {
        userIds: [{ validator: validateUserZy, trigger: 'change', required: true }]
      }
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 重置数据
     */
    resetveStuMoralActiveVo() {
      return {
        type: 1, // 活动类型（0：班级，1：校级）
        title: '', // 活动标题
        content: '', // 内容
        endTime: '', // 发布时间
        startTime: '', // 开始时间
        status: 1, // 是否发布（0：未发布，1：发布）
        pushTime: this.$date.format('YYYY-MM-DD'), // 发布时间
        isAll: 1 // 是否所有人员（0：否，1：是）
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.dialogStatus = 'create';
      this.veStuMoralActiveVo = this.resetveStuMoralActiveVo();
      this.$nextTick(() => {
        this.$refs.veStuMoralActiveDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuMoralActiveApi.get(row.id).then(res => {
        this.veStuMoralActiveVo = res.result;
        this.$refs.ueditor.setValue(res.result.content);
        setTimeout(() => {
          this.$refs.stuSelect.setValue(res.result.userIds);
        }, 100);
      });
      this.dialogStatus = 'update';
      this.$nextTick(() => {
        this.$refs.veStuMoralActiveDataForm.clearValidate();
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
      const tempData = Object.assign({}, this.veStuMoralActiveVo);
      tempData.content = this.$refs.ueditor.getValue();
      if (this.$refs.stuSelect) {
        tempData.userIds = this.$refs.stuSelect.getValue() || [];
        tempData.userNames = this.$refs.stuSelect.getNames().join(',');
      } else {
        tempData.userIds = [];
        tempData.userNames = '全校';
      }

      tempData.pushUser = this.loginInfo.userId; // 发布人
      tempData.pushUserName = this.loginInfo.userName; //
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuMoralActiveDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuMoralActiveApi.add(subData).then(res => {
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
      this.$refs.veStuMoralActiveDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuMoralActiveApi.update(subData).then(() => {
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
