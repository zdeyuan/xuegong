<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form :title="textMap[dialogStatus]" @ok="viewType === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuInsuranceClaimsDataForm" :rules="veStuInsuranceClaimsRules" :model="veStuInsuranceClaimsVo" labelAlign="right">
        <a-form-model-item label="保险类型" prop="insuranceId" required>
          <edu-data v-model="veStuInsuranceClaimsVo.insuranceId" stype="select" :datas="typeNodes" textKey="insuranceName" dtype="datas" />
        </a-form-model-item>
        <a-form-model-item label="学生" prop="stuId">
          <stuSelect ref="stuSelect"></stuSelect>
        </a-form-model-item>
        <a-form-model-item label="保险理赔时间" prop="claimDate" required>
          <a-date-picker v-model="veStuInsuranceClaimsVo.claimDate" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
        <a-form-model-item label="金额" prop="amount" required>
          <a-input-number v-model="veStuInsuranceClaimsVo.amount" :min="0" placeholder="请输入" style="width:300px" />
        </a-form-model-item>
        <a-form-model-item label="描述" prop="content">
          <ueditor ref="ueditor" style="width: 100%%;"></ueditor>
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuInsuranceClaimsApi from '@/module/stu/bxxl/api/veStuInsuranceClaimsApi';
import stuSelect from '@/components/stuSelect';
import ueditor from '@/components/ueditor';
export default {
  props: {
    typeNodes: Array
  },
  components: { stuSelect, ueditor },
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
      veStuInsuranceClaimsVo: this.resetveStuInsuranceClaimsVo(),
      textMap: {
        update: '编辑-保险信息',
        create: '新增-保险信息'
      },
      dialogStatus: 'create',
      veStuInsuranceClaimsRules: {
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
    resetveStuInsuranceClaimsVo() {
      return {
        stuId: '', // 学生id(个人)
        name: '', // 学生姓名
        code: '', // 学生学号
        insuranceId: '', // 院系id
        specId: '', // 专业id
        typeId: '', // 保险类型id
        bjId: '', // 班级id(集体)或学生所属班级id
        fileId: '', // 文件id（申请材料）
        punishTime: '', // 保险时间
        content: '' // 保险描述
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.viewType = 'create';
      this.veStuInsuranceClaimsVo = this.resetveStuInsuranceClaimsVo();
      this.$nextTick(() => {
        this.$refs.veStuInsuranceClaimsDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuInsuranceClaimsApi.get(row.id).then(res => {
        this.veStuInsuranceClaimsVo = res.result;
        this.$refs.ueditor.setValue(res.result.description);
        setTimeout(() => {
          if (this.$refs.stuSelect) this.$refs.stuSelect.setValue(res.result.stuId);
        }, 100);
      });
      this.viewType = 'update';
      this.$nextTick(() => {
        this.$refs.veStuInsuranceClaimsDataForm.clearValidate();
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
      const tempData = Object.assign({}, this.veStuInsuranceClaimsVo);
      tempData.description = this.$refs.ueditor.getValue();
      if (this.$refs.stuSelect) {
        const stus = this.$refs.stuSelect.getObj()[0];
        tempData.stuId = stus.id;
      }

      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuInsuranceClaimsDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuInsuranceClaimsApi.add(subData).then(res => {
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
      this.$refs.veStuInsuranceClaimsDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuInsuranceClaimsApi.update(subData).then(() => {
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
