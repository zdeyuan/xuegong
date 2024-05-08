/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-12 00:12:09
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-13 21:14:19
 */
import Cookies from "js-cookie";

const TokenKey = "vue_admin_template_token";

export function getToken() {
  // const token = Cookies.get(TokenKey)
  const token = localStorage.getItem("token");
  if (token) {
    try {
      return token;
    } catch (error) {
      console.error("getToken 失败", error);
      return null;
    }
  } else {
    return null;
  }
}

export function setToken(token) {
  return localStorage.setItem("token", token);
}

export function removeToken() {
  return localStorage.removeItem("token");
}
