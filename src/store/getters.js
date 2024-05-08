/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2020-06-03 14:04:12
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-12 22:00:46
 */
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  departs: (state) => state.user.departs,
  menus: (state) => state.user.menus,
  userId: (state) => state.user.userId,
  selectMenuId: (state) => state.user.selectMenuId,
  selectMenuName: (state) => state.user.selectMenuName,
  gisUtil: (state) => state.gis.gisUtil,
  borderUtil: (state) => state.border.borderUtil,
};
export default getters;
