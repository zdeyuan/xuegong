<template>
  <div class="edit_form">
    <!-- 编辑页
               <a-row>
              <a-col :span="12"> </a-col>
              <a-col :span="12"> </a-col>
            </a-row>-->
    <edu-form :title="textMap[dialogStatus]" @ok="dialogStatus === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veStuYyprojectDataForm" :rules="veStuYyprojectRules" :model="veStuYyprojectVo" labelAlign="right">
        <a-form-model-item label="预约项目对象" prop="type" required>
          <edu-data v-model="veStuYyprojectVo.type" stype="radio" code="yyType" />
        </a-form-model-item>
        <a-form-model-item label="预约教师" v-if="veStuYyprojectVo.type == 1" prop="fzrId">
          <userSelectBox ref="userSelectBox"></userSelectBox>
        </a-form-model-item>
        <a-form-model-item label="预约设备" v-if="veStuYyprojectVo.type == 3" prop="sbSelect">
          <sbSelect ref="sbSelect"></sbSelect>
        </a-form-model-item>
        <a-form-model-item label="预约形式" prop="yyType" required>
          <edu-data v-model="veStuYyprojectVo.yyType" stype="radio" code="yyXinz" />
          <div style="color:red"
            >如果选择常规时间预约，只需要选择日期对应的星期和时间即可.例如2016-09-14 09:00-2016-09-14
            18:00会直接处理成周一到周五的09-18时才能预约</div
          >
        </a-form-model-item>
        <a-form-model-item label="限制人数" prop="limitNum" required>
          <a-input-number v-model="veStuYyprojectVo.limitNum" :min="0" placeholder="请输入限制人数" style="width:300px" />
        </a-form-model-item>
        <a-form-model-item label="开始时间" prop="statusTime" required>
          <a-date-picker v-model="veStuYyprojectVo.statusTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
        <a-form-model-item label="结束时间" prop="endTime" required>
          <a-date-picker v-model="veStuYyprojectVo.endTime" valueFormat="YYYY-MM-DD" />
        </a-form-model-item>
        <a-form-model-item label="预约介绍" prop="yyRemark" required>
          <a-textarea v-model="veStuYyprojectVo.yyRemark" :maxLength="300" placeholder="请输入预约介绍" :rows="4" />
        </a-form-model-item>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veStuYyprojectApi from '@/module/stu/jis/api/veStuYyprojectApi';
import userSelectBox from '@/components/userSelectBox';
import sbSelect from '@/components/sbSelect';
export default {
  components: { userSelectBox, sbSelect },
  data() {
    let validateUser = (rule, value, callback) => {
      const data = this.$refs.userSelectBox.getValue();
      if (data && data.length > 0) {
        callback();
      } else {
        callback(new Error('请选择预约教师'));
      }
    };
    let validateSb = (rule, value, callback) => {
      const data = this.$refs.sbSelect.getValue();
      if (data && data.length > 0) {
        callback();
      } else {
        callback(new Error('请选择设备'));
      }
    };
    const data = {
      veStuYyprojectVo: this.resetveStuYyprojectVo(),
      textMap: {
        update: '编辑-',
        create: '新增-'
      },
      dialogStatus: 'create',
      veStuYyprojectRules: {
        fzrId: [{ validator: validateUser, trigger: 'change', required: true }],
        sbSelect: [{ validator: validateSb, trigger: 'change', required: true }]
      }
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 重置数据
     */
    resetveStuYyprojectVo() {
      return {
        type: 1, // 预约项目对象
        sbId: '', //  预约设备ID
        sbName: '', //
        yyRemark: '', // 预约说明
        limitNum: '', // 限制人数
        statusTime: '', // 开始时间
        endTime: '', // 结束时间
        status: '', // 状态（1：启用，0：禁用）
        campusId: '', //
        jzId: '', //
        jsId: '', //
        address: '', //
        projectId: '', // 项目负责人id
        isPublic: '', // 发布状态
        projectIdText: '', // 项目负责人
        authPersonId: '', // 审核人ID
        authPersionText: '', //
        authStatus: '', // 审核状态(1通过，0不通过，2未审核)
        auditReason: '', // 不通过原因
        yyType: 1 // 预约形式（1.自主预约，2.常规时间预约）
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.dialogStatus = 'create';
      this.veStuYyprojectVo = this.resetveStuYyprojectVo();
      this.$nextTick(() => {
        this.$refs.veStuYyprojectDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veStuYyprojectApi.get(row.id).then(res => {
        this.veStuYyprojectVo = res.result;
      });
      this.dialogStatus = 'update';
      this.$nextTick(() => {
        this.$refs.userSelectBox.setObj([{ id: row.projectId, name: row.projectIdText }]);
        this.$refs.sbSelect.setObj([{ id: row.sbId, name: row.sbName }]);
        this.$refs.veStuYyprojectDataForm.clearValidate();
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
      const tempData = Object.assign({}, this.veStuYyprojectVo);
      if (tempData.type == 1) {
        const userData = this.$refs.userSelectBox.getObj();
        tempData.projectId = userData.id;
        tempData.projectIdText = userData.name;
      } else if (tempData.type == 3) {
        const userData = this.$refs.sbSelect.getObj();
        tempData.sbId = userData.id;
        tempData.sbName = userData.name;
      }
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veStuYyprojectDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(false);
          if (subData == null) {
            return;
          }
          veStuYyprojectApi.add(subData).then(res => {
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
      this.$refs.veStuYyprojectDataForm.validate(valid => {
        if (valid) {
          const subData = this.getSubData(true);
          if (subData == null) {
            return;
          }
          veStuYyprojectApi.update(subData).then(() => {
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
