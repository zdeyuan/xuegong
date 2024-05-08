<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form :title="textMap[dialogStatus]" @ok="viewType === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuCheckDataForm" :rules="veStuCheckRules" :model="veStuCheckVo" labelAlign="right">
        <a-form-model-item label="考勤类型" prop="typeId" required>
          <edu-data v-model="veStuCheckVo.typeId" stype="select" :datas="typeNodes" textKey="title" dtype="datas" />
        </a-form-model-item>
        <a-form-model-item label="学生" prop="stuId">
          <stuSelect ref="stuSelect"></stuSelect>
        </a-form-model-item>
        <a-form-model-item label="考勤名称" prop="courseName" required>
          <edu-data v-model="veStuCheckVo.courseName" stype="select" code="courseName" />
        </a-form-model-item>
        <a-form-model-item label="异常时间" prop="checkTime" required>
          <a-date-picker v-model="veStuCheckVo.checkTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
        <a-form-model-item label="备注" prop="content">
          <a-textarea v-model="veStuCheckVo.content" :maxLength="65535" placeholder="请输入备注" :rows="4" />
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuCheckApi from '@/module/stu/stu/api/veStuCheckApi';
import stuSelect from '@/components/stuSelect';

export default {
  components: { stuSelect },
  props: {
    typeNodes: Array
  },
  data() {
    let validateUser = (rule, value, callback) => {
      const data = this.$refs.stuSelect.getValue();
      if (data && data.length > 0) {
        callback();
      } else {
        callback(new Error('请选择学生'));
      }
    };
    const data = {
      veStuCheckVo: this.resetveStuCheckVo(),
      textMap: {
        update: '编辑考勤信息',
        create: '新增考勤信息'
      },
      dialogStatus: 'create',
      veStuCheckRules: {
        stuId: [{ validator: validateUser, trigger: 'change', required: true }]
      }
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 重置数据
     */
    resetveStuCheckVo() {
      return {
        stuId: '', // 学生id
        name: '', // 姓名
        code: '', // 学号
        specId: 0, // 专业id
        bjId: 0, // 班级id
        jxbjId: '', // 教学班级id
        typeId: '', // 考勤类型id
        courseId: '', // 考勤名称id（-1早自习、-2晚自习为系统内定，其他为课堂id）
        courseName: '', // 考勤名称
        checkTime: '', // 异常时间
        content: '' // 备注
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.viewType = 'create';
      this.veStuCheckVo = this.resetveStuCheckVo();
      this.$nextTick(() => {
        this.$refs.veStuCheckDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuCheckApi.get(row.id).then(res => {
        this.veStuCheckVo = res.result;
      });
      this.viewType = 'update';
      this.$nextTick(() => {
        this.$refs.veStuCheckDataForm.clearValidate();
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
      const tempData = Object.assign({}, this.veStuCheckVo);

      const stus = this.$refs.stuSelect.getObj()[0];
      tempData.stuId = stus.id;

      if (tempData.courseName == '早自习') {
        tempData.courseId = '-1';
      } else if (tempData.courseName == '晚自习') {
        tempData.courseId = '-2';
      }
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuCheckDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuCheckApi.add(subData).then(res => {
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
      this.$refs.veStuCheckDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuCheckApi.update(subData).then(() => {
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
