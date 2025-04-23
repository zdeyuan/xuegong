<template>
  <a-card :bordered="false">
    <g-tools :fields="toolsFields" />
    <g-table
      ref="table"
      size="default"
      rowKey="id"
      :columns="columns"
      :data="loadData"
      :rowSelection="rowSelection"
      showPagination="auto"
      :scroll="{ x: 1000 }"
    >
     <span slot="actionS" slot-scope="text, record">
       <a @click="addition(record)" style="color:#0098F8">设置</a>
     </span>
    </g-table>

    <screen-model
      ref="screenModel"
      :semester-data="semesterData"
      :xkms-data="xkmsData"
      :sim-id="queryParam.simid"
      @cancel="handleCancel"
      @ok="handleOk"
      :visible="visible"
      v-if="visible"
    ></screen-model>
  </a-card>
</template>
<script>
import GTable from '@/components/GTable'
import GTools from '@/components/GTools'

import screenModel from './modules/screenModel'
import { queryFacultyList ,querySpecialtyListByFalId}  from '@/api/base/common-veCommon'
import { apiScheduleClassChoiceXkdj } from '@/api/schedule'
import {apiScheduleClassChoiceXkms} from '@/api/schedule/'

const columns = [
  {
    title: '课程号',
    dataIndex: 'msid',
    key: 'msid',
    scopedSlots: {
      customRender: 'msName',
    },
  },
  {
    title: '课程名称',
    dataIndex: 'stunum',
    key: 'stunum',
  },
  {
    title: '专业组',
    dataIndex: 'stuname',
    key: 'stuname',
  },

  {
    title: '总学分',
    dataIndex: 'semid',
    key: 'semid',
    scopedSlots: {
      customRender: 'semName',
    },
  },
  {
    title: '总学时',
    dataIndex: 'createtime',
    key: 'createtime',
  },
 {
   title: '操作',
   dataIndex: 'sex8',
    width:250,
   
   fixed: 'right',
   scopedSlots: { customRender: 'actionS' }
 },
]

export default {
  name: 'students',
  components: { GTable, GTools, screenModel },
  data() {
    this.columns = columns
    const _this = this
    return {
      // 筛选条件
      queryParam: {
        falid: undefined,
        specid:undefined,
        stuname: '',
      },
      // 头部配置
      toolsFields: [
        {
          render(h) {
        
            return (
              <a-input style="width:160px;" value={_this.queryParam.stuname} placeholder="请输入课程号" />
            )
          },
        },{
          render(h) {
        
            return (
              <a-input style="width:160px;margin-left:10px;" value={_this.queryParam.stuname} placeholder="请输入课程名称" />
            )
          },
        },
		{
		  render(h) {
		    const select = (
		      <a-select
		        placeholder="请选择专业部"
		        value={_this.queryParam.falid}
		        onChange={_this.handleSelectChange}
		        style="width:160px;margin-left:10px;"
		        class="g-tools__field"
		      >
		        {_this.facultyList.map((item) => (
		          <a-select-option key={item.id} value={item.id}>
		            {item.yxmc}
		          </a-select-option>
		        ))}
		      </a-select>
		    )
		    return select
		  },
		},{
		  render(h) {
		    const select = (
		      <a-select
		        placeholder="请选择专业"
				style="margin-left:10px;"
		        value={_this.queryParam.specid}
		        onChange={_this.handleSelectChange2}
		        style="width:160px"
		        class="g-tools__field"
		      >
		        {_this.specialtyList.map((item) => (
		          <a-select-option key={item.id} value={item.id}>
		            {item.zymc}
		          </a-select-option>
		        ))}
		      </a-select>
		    )
		    return select
		  },
		},
        {
          fieldType: 'button',
          label: '搜索',
          icon: 'search',
          type: 'primary',
          handler: _this.handleSearch,
        },
        {
          fieldType: 'button',
          label: '清空',
          icon: 'delete',
          type: 'warning',
          handler: _this.handleReset,
        },
		 { fieldType: 'button',  label: '刷新', icon: 'sync', type: 'primary', handler: _this.handleRefresh },
      ],

      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        let params = { ...parameter, ...this.queryParam }
        return apiScheduleClassChoiceXkdj.getPageList(params).then((res) => {
          return res.result
        })
      },
      selectedRowKeys: [], //列表选择key
      selectedRows: [], //列表选择数据
      facultyList: [], //专业部数据
	  specialtyList: [], //专业数据
      visible: false, // 筛选弹框
      xkmsData: [], //选课模式数据
    }
  },
  created() {
    this.getSemesterList()
    this.getXkmsData()
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange,
      }
    },
  },
  filters: {
    semNameFilter(val, list) {
      let _obj = list.find((item) => item.id == val)
      return _obj ? _obj.xqmc : '-'
    },
    msNameFilter(val,list) {
      let _obj = list.find((item) => item.id == val)
      return _obj ? _obj.name : '-'
    },
  },
  methods: {
    // 刷新
    handleRefresh() {
      this.$refs.table.refresh(true)
    },
    // 筛选
    handleFilter() {
      this.visible = true
    },
    // 搜索
    handleSearch() {
      this.$refs.table.refresh(true)
    },
    // 清空
    handleReset() {
      this.queryParam = {
        falid: undefined,
        specid:undefined,
        stuname: '',
      }
    },
    // 选择学期
    handleSelectChange(val) {
      this.queryParam.falid = val;
	  this.getspecialtyList(val);
    },
	// 选择学期
	handleSelectChange2(val) {
	  this.queryParam.specid = val
	},
    // 记录选择
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },

    // 专业部
    getSemesterList() {
      queryFacultyList().then((res) => {
        if (res.code == 200) {
          this.facultyList = res.result
        }
      })
    },
	//获取专业
	getspecialtyList(failid) {
		const sub = {
			falId: failid
		};
	  querySpecialtyListByFalId(sub).then((res) => {
	    if (res.code == 200) {
	      this.specialtyList = res.result
	    }
	  })
	},
    // 筛选回调
    handleOk(vals) {
      this.visible = false;
      this.queryParam = {...vals};
      console.log(vals)
      this.$refs.table.refresh(true)
    },
    // 筛选取消
    handleCancel() {
      this.visible = false
    },

    // 获取选课模式列表
    getXkmsData() {
      let params = {
        pageNo: 1,
        pageSize: 500,
      }
      apiScheduleClassChoiceXkms.getPageList(params).then((res) => {
        if (res.code == 200) {
          this.xkmsData = res.result.records || []
        }
      })
    },
  },
}
</script>
<style src="" scoped>
</style>
