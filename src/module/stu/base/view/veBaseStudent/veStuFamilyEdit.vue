<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <a-form-model ref="veStuFamilyDataForm" :rules="veStuFamilyRules" labelAlign="right">
      <div class="doAdd">
        <a-button type="primary" @click="doAdd()">
          添加家庭成员
        </a-button>
      </div>
      <div class="no-data" v-if="familys.length == 0">
        暂无家庭成员
      </div>
      <div v-for="(veStuFamilyVo, index) in familys">
        <div class="detail_title" style="margin-top:15px">
          家庭成员{{ index + 1 }}
          <a-button class="right" type="link" @click="doDelete(index)"> 删除 </a-button>
        </div>
        <a-row>
          <a-col :span="12">
            <a-form-model-item class="ytop" label="姓名" prop="name">
              <a-input v-model="veStuFamilyVo.name" :maxLength="30" placeholder="请输入姓名" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item class="ytop" label="关系码" prop="gxm">
              <edu-data v-model="veStuFamilyVo.gxm" stype="select" code="gxm" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="电话" prop="homePhone">
              <a-input v-model="veStuFamilyVo.homePhone" :maxLength="20" placeholder="请输入电话" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="移动电话" prop="phone">
              <a-input v-model="veStuFamilyVo.phone" :maxLength="11" placeholder="请输入移动电话" />
            </a-form-model-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="职业" prop="jtcyzym">
              <a-input v-model="veStuFamilyVo.jtcyzym" :maxLength="30" placeholder="请输入职业" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="政治面貌" prop="zzmmm">
              <edu-data v-model="veStuFamilyVo.zzmmm" stype="select" code="zzmmm" /> </a-form-model-item
          ></a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-model-item label="出生日期" prop="birth">
              <a-date-picker v-model="veStuFamilyVo.birth" valueFormat="YYYY-MM-DD" /> </a-form-model-item
          ></a-col>
          <a-col :span="12">
            <a-form-model-item label="所在单位" prop="szdw">
              <a-input v-model="veStuFamilyVo.szdw" :maxLength="100" placeholder="请输入所在单位" />
            </a-form-model-item>
          </a-col>
        </a-row>
      </div>
    </a-form-model>
  </div>
</template>

<script>
import veBaseStudentApi from '@/module/stu/base/api/veBaseStudentApi';

export default {
  props: {
    stuId: String
  },
  components: {},
  data() {
    const data = {
      familys: [],
      veStuFamilyRules: {}
    };
    return data;
  },
  mounted() {
    this.setShow(this.stuId);
  },
  methods: {
    doAdd() {
      this.familys.push({});
    },
    doDelete(index) {
      this.familys.splice(index, 1);
    },
    /**
     * @msg: 重置数据
     */
    resetveStuFamilyVo() {
      return {};
    },
    /**
     * @msg: 初始化修改
     */
    setShow(stuId) {
      veBaseStudentApi.findFamilys(stuId).then(res => {
        this.familys = res.result;
      });
      this.viewType = 'update';
      this.$nextTick(() => {
        this.$refs.veStuFamilyDataForm.clearValidate();
      });
    },
    /**
     * @msg: 获取提交的数据 新增和 修改复用
     */
    getSubData(isUpdate) {
      return this.familys;
    }
  }
};
</script>
<style lang="less" scoped>
.doAdd {
  padding-top: 15px;
}
.right {
  float: right;
  right: 15px;
}
</style>
