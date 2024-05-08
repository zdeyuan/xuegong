/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}


export const checkMasDatabase = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入mas机数据库名称'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入英文,数字'));
  }
  callback();
};
export const checkFaxFileType = (rule, value, callback) => {
  let regName = /^[a-zA-Z]+$/;
  if (!value) {
    return callback(new Error('请输入文件后缀名'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入英文字母'));
  }
  callback();
};
export const checkMasHostIp = (rule, value, callback) => {
  let regName = /^[0-9\.]+$/;
  if (!value) {
    return callback(new Error('请输入mas机IP地址'));
  }
  if (!regName.test(value)) {
    return callback(new Error('IP地址格式不正确'));
  }
  callback();
};
export const checkFaxIpAddress = (rule, value, callback) => {
  let regName = /^[0-9\.]+$/;
  if (!value) {
    return callback(new Error('请输入传真IP地址'));
  }
  if (!regName.test(value)) {
    return callback(new Error('IP地址格式不正确'));
  }
  callback();
};
export const checkLon = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入经度'));
  }
  let regName = /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/;
  if(!regName.test(value)){
    return callback(new Error('经度格式不正确'));
  }
  callback();
};
export const checkLat = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('请输入纬度'));
  }
  let regName = /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/;
  if (!regName.test(value)) {
    return callback(new Error('纬度格式不正确'));
  }
  callback();
};
export const checkMasLoginUser = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入mas机登录账号'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkMasLoginPassword = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入mas机登录密码'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkMasApiCode = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入接口API编码'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkMailServiceAddress = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入邮箱服务地址'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};

export const checkFaxPassword = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入传真密码'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkFaxPostUrl = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入传真服务器请求地址'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkFaxUploadPassword = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入传真上传服务器密码'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkWechatDetailUrl = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入链接跳转地址'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkSinaPassword = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入密码'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkSinaToken = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入Token'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkSinaShareUrl = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入分享链接地址'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkSinaRedirectUrl = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入重定向链接地址'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkFtpServiceAddress = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入FTP服务器地址'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};
export const checkFtpPassword = (rule, value, callback) => {
  let regName = /^[\u4e00-\u9fa5]{0,}$/;
  if (!value) {
    return callback(new Error('请输入FTP密码'));
  }
  if (regName.test(value)) {
    return callback(new Error('只能输入英文,数字,字符'));
  }
  callback();
};

export const checkMasNumber = (rule, value, callback) => {
  let regName = /^[0-9]+$/;
  if (!value) {
    return callback(new Error('请输入主送号码'));
  }
  if (!regName.test(value)) {
    return callback(new Error('主送号码格式不正确'));
  }
  callback();
};
export const checkFaxAppKey = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入传真AppKey'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
export const checkFaxAppSecret = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入传真AppSecret'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
export const checkMailPassword = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入邮箱授权码'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
export const checkWechatAppid = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入Appid'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
export const checkWechatSecret = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入AppSecret'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
export const checkSinaAppid = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入Appid'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
export const checkSinaSecret = (rule, value, callback) => {
  let regName = /^[a-zA-Z0-9]+$/;
  if (!value) {
    return callback(new Error('请输入AppSecret'));
  }
  if (!regName.test(value)) {
    return callback(new Error('只能输入数字,英文字母'));
  }
  callback();
};
