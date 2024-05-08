<template>
  <div class="edit_form">
    <!-- 编辑页 -->
    <edu-form :title="textMap[dialogStatus]" @ok="dialogStatus === 'create' ? createData() : updateData()" @cancel="handelCancel">
      <a-form-model ref="veBaseStudentDataForm" :rules="veBaseStudentRules" :model="veBaseStudentVo" labelAlign="right">
        <a-tabs>
          <a-tab-pane tab="基本信息" key="first">
            <div class="detail_title">基本信息</div>

            <a-row>
              <a-col :span="12">
                <a-form-model-item label="身份证号" class="ytop" prop="sfzh" required>
                  <a-input v-model="veBaseStudentVo.sfzh" :maxLength="20" placeholder="请输入身份证号" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="姓名" class="ytop" prop="xm" required>
                  <a-input v-model="veBaseStudentVo.xm" :maxLength="20" placeholder="请输入姓名" /> </a-form-model-item
              ></a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="学号" prop="xh" required>
                  <a-input v-model="veBaseStudentVo.xh" :maxLength="30" placeholder="请输入学号" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="性别" prop="xbm" required>
                  <edu-data v-model="veBaseStudentVo.xbm" stype="radio" code="sexStr" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="曾用名" prop="cym">
                  <a-input v-model="veBaseStudentInfoVo.cym" :maxLength="20" placeholder="请输入曾用名" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="出生日期" prop="csDate">
                  <a-date-picker v-model="veBaseStudentInfoVo.csDate" valueFormat="YYYY-MM-DD" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="民族码" prop="mzm">
                  <edu-data v-model="veBaseStudentVo.mzm" stype="select" code="mzm" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="籍贯" prop="jg">
                  <a-input v-model="veBaseStudentInfoVo.jg" :maxLength="255" placeholder="请输入籍贯" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="政治面貌" prop="zzmmm">
                  <edu-data v-model="veBaseStudentInfoVo.zzmmm" stype="select" code="zzmmm" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="就读方式" prop="jdfs">
                  <edu-data v-model="veBaseStudentVo.jdfs" stype="radio" code="jdfs" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-form-model-item label="是否是困难生" prop="sfkns">
              <edu-data v-model="veBaseStudentVo.sfkns" stype="radio" code="shifou" />
            </a-form-model-item>
            <a-form-model-item label="学生照片" prop="sfkns">
              <uploadFiles ref="uploadFiles" :limit="1" fileType="image" isImg serviceType="student">
                <a-table-column dataIndex="ext" title="图片">
                  <template slot-scope="ext, row">
                    <img :src="$http.baseServer + '/' + $http.service.stu + 'veStuFile/download?id=' + row.id" style="height:50px" />
                  </template>
                </a-table-column>
              </uploadFiles>
            </a-form-model-item>

            <div class="detail_title" style="margin-top:15px">学籍信息</div>

            <a-form-model-item class="ytop" label="专业部" prop="boxZybmbj">
              <boxZybmbj ref="boxZybmbj"></boxZybmbj>
            </a-form-model-item>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="学制" prop="xz" required>
                  <edu-data v-model="veBaseStudentVo.xz" stype="select" code="xz" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="报名方式" prop="bmfsm">
                  <edu-data v-model="veBaseStudentInfoVo.bmfsm" stype="select" code="bmfsm" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="报名号" prop="bmh">
                  <a-input v-model="veBaseStudentVo.bmh" :maxLength="20" placeholder="请输入报名号" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="入学年月" prop="rxDate">
                  <a-date-picker v-model="veBaseStudentVo.rxDate" valueFormat="YYYY-MM" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="入学成绩" prop="rxcj">
                  <a-input-number :min="0" style="width:100%" v-model="veBaseStudentInfoVo.rxcj" placeholder="请输入入学成绩" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="毕业学校" prop="byxx">
                  <a-input v-model="veBaseStudentInfoVo.byxx" :maxLength="255" placeholder="请输入毕业学校" />
                </a-form-model-item>
              </a-col>
            </a-row>

            <div class="detail_title" style="margin-top:15px">联系方式</div>

            <a-form-model-item label="户口所在地" class="ytop" prop="province">
              <boxCitySelect ref="boxCitySelect"></boxCitySelect>
              <!--     <a-input v-model="veBaseStudentVo.province" :maxLength="50" placeholder="请输入户口所在省份" />
              <a-input v-model="veBaseStudentVo.city" :maxLength="50" placeholder="请输入户口所在市" />
              <a-input v-model="veBaseStudentVo.county" :maxLength="50" placeholder="请输入户口所在区" /> -->
            </a-form-model-item>

            <a-row>
              <a-col :span="12">
                <a-form-model-item label="学生联系电话" prop="xslxdh">
                  <a-input v-model="veBaseStudentInfoVo.xslxdh" :maxLength="20" placeholder="请输入学生联系电话" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="QQ" prop="jstxh">
                  <a-input v-model="veBaseStudentInfoVo.jstxh" :maxLength="50" placeholder="请输入即时通讯号" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="电子邮箱" prop="dzxx">
                  <a-input v-model="veBaseStudentInfoVo.dzxx" :maxLength="50" placeholder="请输入电子邮箱" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="家庭联系电话" prop="jtlxdh">
                  <a-input v-model="veBaseStudentInfoVo.jtlxdh" :maxLength="30" placeholder="请输入家庭联系电话" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-form-model-item label="详细家庭地址" prop="jtdz">
              <a-input v-model="veBaseStudentInfoVo.jtdz" :maxLength="255" placeholder="请输入家庭地址" />
            </a-form-model-item>
          </a-tab-pane>
          <a-tab-pane tab="家庭成员" v-if="family" key="tttt">
            <veStuFamilyEdit :stuId="stuId" ref="veStuFamilyEdit"></veStuFamilyEdit>
          </a-tab-pane>
          <a-tab-pane tab="其他信息" key="second">
            <a-row>
              <a-col :span="12">
                <a-form-model-item class="ytop" label="健康状况" prop="jkzkm">
                  <edu-data v-model="veBaseStudentInfoVo.jkzkm" stype="select" code="jkzkm" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item class="ytop" label="是否流动人口" prop="sfsldrk">
                  <edu-data v-model="veBaseStudentInfoVo.sfsldrk" stype="select" code="sfsldrk" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="12">
                <a-form-model-item label="户口类别" prop="hklbm">
                  <edu-data v-model="veBaseStudentInfoVo.hklbm" stype="select" code="hklbm" />
                </a-form-model-item>
              </a-col>
              <a-col :span="12">
                <a-form-model-item label="是否低保" prop="sfdb">
                  <edu-data v-model="veBaseStudentInfoVo.sfdb" stype="radio" code="shifou" />
                </a-form-model-item>
              </a-col>
            </a-row>
            <a-form-model-item label="特长" prop="tc">
              <a-textarea v-model="veBaseStudentInfoVo.tc" :maxLength="65535" placeholder="请输入特长" :rows="4" />
            </a-form-model-item>
          </a-tab-pane>
        </a-tabs>
      </a-form-model>
    </edu-form>
  </div>
</template>

<script>
import veBaseStudentApi from '@/module/stu/base/api/veBaseStudentApi';
import boxZybmbj from '@/components/boxZybmbj';
import boxCitySelect from '@/components/boxCitySelect';
import uploadFiles from '@/components/uploadFiles';
import veStuFamilyEdit from './veStuFamilyEdit';
export default {
  components: { boxZybmbj, uploadFiles, boxCitySelect, veStuFamilyEdit },
  props: {
    family: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let validateBoxZybmbj = (rule, value, callback) => {
      const data = this.$refs.boxZybmbj.getCheck();
      if (data) {
        callback(new Error(data));
      } else {
        callback();
      }
    };
    let validatePhone = (rule, value, callback) => {
      if (this.veBaseStudentInfoVo.phone) {
        callback();
      } else {
        callback(new Error('请完善'));
      }
    };
    let validateHomePhone = (rule, value, callback) => {
      if (this.veBaseStudentInfoVo.homePhone) {
        callback();
      } else {
        callback(new Error('请完善'));
      }
    };

    const data = {
      veBaseStudentVo: this.resetveBaseStudentVo(),
      veBaseStudentInfoVo: this.resetveBaseStudentInfoVo(),
      textMap: {
        update: '编辑-学生信息',
        create: '新增-学生信息'
      },
      stuId: null,
      dialogStatus: 'create',
      veBaseStudentRules: {
        boxZybmbj: [{ validator: validateBoxZybmbj, trigger: 'change', required: true }],
        phone: [{ validator: validatePhone, trigger: 'change', required: true }],
        homePhone: [{ validator: validateHomePhone, trigger: 'change', required: true }]
      }
    };
    return data;
  },
  mounted() {},
  methods: {
    /**
     * @msg: 重置数据
     */
    resetveBaseStudentInfoVo() {
      return {
        stuId: '', // 学生ID
        cym: '', // 曾用名
        csDate: '', // 出生日期
        jg: '', // 籍贯
        jkzkm: '', // 健康状况码
        zzmmm: '', // 政治面貌码
        hklbm: '', // 户口类别码
        sfsldrk: '', // 是否是流动
        address: '', // 家庭地址
        homePhone: '', // 家庭联系电话
        tc: '', // 特长
        phone: '', // 学生联系电话
        email: '', // 电子信箱
        photo: '', // 照片
        qq: '', // 即时通讯号
        sfdb: 0, // 是否低保0否1是
        byxx: '', // 毕业学校
        bmfsm: '', // 报名方式
        rxcj: '', // 入学成绩
        jtdzStatus: '', // 家庭地址是否公开 1公开2不公开
        xslxdhStatus: '' // 联系电话是否公开 1公开2不公开
      };
    },
    /**
     * @msg: 重置数据
     */
    resetveBaseStudentVo() {
      return {
        sfzh: '', // 身份证号，唯一
        code: '', // 学号
        name: '', // 姓名
        sex: 1, // 性别码1男生2女生
        userId: '', // 用户ID
        mzm: '', // 民族码
        bmh: '', // 报名号
        jdfs: 1, // 就读方式：1住校，2走读
        xsdqztm: 'ZX', // 当前状态码'XS'=>'新生', 'ZX' => '在校', 'XX' => '休学', 'TX' => '退学', 'KC' => '开除', 'BY' => '毕业', 'YY' => '肄业', 'ZXX' => '转学', 'JY' => '结业'
        rxDate: '', // 入学年月
        xz: '', // 学制;与学制表关联
        falId: '', // 院系ID
        specId: '', // 专业ID
        bjId: '', // 班级ID
        gradeId: '', // 年级ID
        province: '', // 户口所在省份
        city: '', // 户口所在市
        county: '', // 户口所在区
        sProvince: '', // 生源地省id
        sCity: '', // 生源地市id
        sCounty: '', // 生源地区id
        sfkns: 0, // 是否是困难生 0=否  1=是
        zkzh: '', // 准考证号
        ksh: '', // 考生号
        updateStatus: '' // 更新状态（0：未更新; 1：已更新）
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate() {
      this.dialogStatus = 'create';
      this.veBaseStudentVo = this.resetveBaseStudentVo();
      this.$nextTick(() => {
        this.$refs.veBaseStudentDataForm.clearValidate();
      });
    },
    /**
     * @msg: 初始化修改
     */
    doUpdate(row) {
      veBaseStudentApi.get(row.id).then(res => {
        this.veBaseStudentVo = res.result.stu;
        this.veBaseStudentInfoVo = res.result.stuInfo;
        if (this.veBaseStudentVo.rxny) {
          this.veBaseStudentVo.rxDate = this.$date.getDate(this.veBaseStudentVo.rxny * 1000).format('YYYY-MM-DD');
        }
        if (this.veBaseStudentInfoVo.csrq) {
          this.veBaseStudentInfoVo.csDate = this.$date.getDate(this.veBaseStudentInfoVo.csrq * 1000).format('YYYY-MM-DD');
        }
        this.$refs.boxZybmbj.setValue(res.result.stu);
        this.$refs.boxCitySelect.setValue(res.result.stu);
        this.$refs.uploadFiles.setValue(null, res.result.stuInfo.photo);
      });
      this.dialogStatus = 'update';
      this.$nextTick(() => {
        this.$refs.veBaseStudentDataForm.clearValidate();
        if (this.family) {
          this.stuId = row.id;
        }
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
    getSubData(isUpdate, callback) {
      const tempData = Object.assign({}, this.veBaseStudentVo);
      if (tempData.rxDate) {
        tempData.rxny = this.$date.geTime(tempData.rxDate, 'YYYY-MM') / 1000;
      }
      const tempInfoData = Object.assign({}, this.veBaseStudentInfoVo);
      if (tempData.csDate) {
        tempData.csrq = this.$date.geTime(tempData.csDate, 'YYYY-MM-DD') / 1000;
      }
      const fileIds = this.$refs.uploadFiles.getValue();
      tempInfoData.photo = fileIds[0];

      this.$refs.boxCitySelect.getSetValue(tempData);
      this.$refs.boxZybmbj.getSetValue(tempData, () => {
        const ret = {
          stu: tempData,
          stuInfo: tempInfoData
        };
        if (this.family && this.$refs.veStuFamilyEdit) {
          ret.family = this.$refs.veStuFamilyEdit.getSubData();
        }
        callback(ret);
      });
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      this.$refs.veBaseStudentDataForm.validate(valid => {
        if (valid) {
          this.getSubData(false, subData => {
            if (subData == null) {
              return;
            }
            veBaseStudentApi.add(subData).then(res => {
              this.$notification.success({
                message: '数据新增成功',
                description: '新增了一条数据'
              });
              this.$emit('onOk');
            });
          });
        }
      });
    },
    /**
     * @msg: 调用Api修改数据
     */
    updateData() {
      this.$refs.veBaseStudentDataForm.validate(valid => {
        if (valid) {
          this.getSubData(true, subData => {
            if (subData == null) {
              return;
            }
            veBaseStudentApi.update(subData).then(() => {
              this.$notification.success({
                message: '数据修改成功',
                description: '修改了一条数据'
              });
              this.$emit('onOk');
            });
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
