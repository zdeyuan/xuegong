<template>
  <div class="edit_form">
    <!-- 编辑页
               <a-row>
              <a-col :span="12"> </a-col>
              <a-col :span="12"> </a-col>
            </a-row>-->
    <edu-form :title="'设置' + checkItem.name + '项目指标'" @ok="createData()" @cancel="handelCancel">
      <edu-tree ref="eduTree" :nodes="treeList" :setting="defalutSetting" :check="true"></edu-tree>
    </edu-form>
  </div>
</template>

<script>
import veStuHygieneItemNormApi from '@/module/stu/zhsz/api/veStuHygieneItemNormApi';
import veStuHygieneNormApi from '@/module/stu/zhsz/api/veStuHygieneNormApi';

export default {
  components: {},
  data() {
    const data = {
      veStuHygieneItemNormVo: this.resetveStuHygieneItemNormVo(),
      textMap: {
        update: '编辑-项目指标表',
        create: '新增-项目指标表'
      },
      dialogStatus: 'create',
      treeList: [],
      defalutSetting: {
        check: {
          enable: true,
          chkStyle: 'checkbox',
          chkboxType: { Y: '', N: '' }
        }
      },
      veStuHygieneItemNormRules: {},
      checkItem: {}
    };
    return data;
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      veStuHygieneNormApi.all({}).then(res => {
        this.treeList = res.result;
        setTimeout(() => {
          this.$refs.eduTree.getTreeObj().expandAll(true);
        }, 0);
      });
    },
    /**
     * @msg: 重置数据
     */
    resetveStuHygieneItemNormVo() {
      return {
        itemId: '', // 项目Id
        normId: '', // 指标Id
        listSort: '', // 排序
        status: '' // 是否禁用 0为否 1为是
      };
    },
    /**
     * @msg: 初始化新增
     */
    doCreate(row) {
      this.checkItem = row;
      this.dialogStatus = 'create';
      this.veStuHygieneItemNormVo = this.resetveStuHygieneItemNormVo();
      const sub = {
        conditions: [{ operator: 'eq', column: 'item_id', value: row.id }]
      };

      veStuHygieneItemNormApi.all(sub).then(res => {
        const datas = res.result;
        this.$refs.eduTree.setValue(datas.map(item => item.normId));
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
      const ids = this.$refs.eduTree.getValue();
      if (ids.length == 0) {
        return null;
      }

      const tempData = {
        itemId: this.checkItem.id,
        ids: ids
      };
      return tempData;
    },
    /**
     * @msg: 调用Api创建数据
     */
    createData() {
      const subData = this.getSubData(false);
      if (subData == null) {
        return;
      }
      veStuHygieneItemNormApi.add(subData).then(res => {
        this.$notification.success({
          message: '数据新增成功',
          description: '新增了一条数据'
        });
        this.$emit('onOk');
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
