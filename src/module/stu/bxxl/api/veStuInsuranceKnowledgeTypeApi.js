/*
 * @Descripttion: 理赔知识类型表 接口
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-04-18
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-04-18 12:12:34
 */

import http from '@/utils/http';

const veStuInsuranceKnowledgeTypeApi = {
  //添加接口
  add(data) {
    return http.post(http.service.stu + 'veStuInsuranceKnowledgeType/add', data);
  },
  //删除接口
  delete(ids) {
    return http.delete(http.service.stu + 'veStuInsuranceKnowledgeType/deleteBatch?ids=' + ids);
  },
  //修改接口
  update(data) {
    return http.put(http.service.stu + 'veStuInsuranceKnowledgeType/edit', data);
  },
  //分页查询接口
  page(pageData) {
    return http.post(http.service.stu + 'veStuInsuranceKnowledgeType/page', pageData);
  },
  //分页查询接口
  all(pageData) {
    return http.post(http.service.stu + 'veStuInsuranceKnowledgeType/all', pageData);
  },
  //查询单个数据接口
  get(id) {
    return http.get(http.service.stu + 'veStuInsuranceKnowledgeType/queryById', { id: id });
  },
  //更新状态
  updateStatus(data) {
    return http.post(http.service.stu + 'veStuInsuranceKnowledgeType/updateStatus', data);
  }
};
export default veStuInsuranceKnowledgeTypeApi;
