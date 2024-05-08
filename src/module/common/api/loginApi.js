/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-12 13:04:34
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-05-11 22:50:29
 */
import http from '@/utils/http';
export default {
  sLogin(sub) {
    return http.post(http.service.sys + 'sys/sLogin', sub);
  },
  tokenLogin(sub) {
    return http.post(http.service.sys + 'sys/convertSystem', sub);
  }
};
