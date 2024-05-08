/*
 * @Descripttion: 保险申请审核 接口
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-04-18
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-04-18
 */

import http from '@/utils/http'

const veStuInsuranceAuditApi = {
  //添加接口
  add(data){
    return http.post(http.service.stu+'veStuInsuranceAudit/add',data)
  },
  //删除接口
  delete(ids){
    return http.delete(http.service.stu+'veStuInsuranceAudit/deleteBatch?ids='+ids)
  },
  //修改接口
  update(data){
    return http.put(http.service.stu+'veStuInsuranceAudit/edit',data)
  },
  //分页查询接口
  page(pageData){
    return http.post(http.service.stu+'veStuInsuranceAudit/page',pageData)
  },
  //查询单个数据接口
  get(id){
    return http.get(http.service.stu+'veStuInsuranceAudit/queryById',{id:id})
  },
  //更新状态
  updateStatus(data){
    return http.post(http.service.stu+'veStuInsuranceAudit/updateStatus',data)
  },

};
export default veStuInsuranceAuditApi;
