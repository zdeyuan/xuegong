/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-09 17:14:13
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-27 12:40:16
 */
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from '@/core/App.vue';
import router from './router';
import Viser from 'viser-vue';
import store from '@/store';
import 'animate.css/source/animate.css';
import Plugins from '@/core/plugins';
/* 屏幕自适应 */
import '@/core/flexible/flexible.js';

/* 自定义的 */
import '@/router/permission'; // 路由守卫

//图标库
import '@/assets/iconfont/iconfont.css';
import '@/assets/basefont/iconfont.less';
import '@/assets/iconfont/iconfont-color.css';

/* 自定义的样式 */
import '@/assets/css/base.less';
import '@/assets/css/ant-ext.less';
//第三方的 ztree的基础样式
import '@/assets/css/beauty-ztree.css';
//ztree的样式
import '@/core/edu/EduTree/ztreeIcon.css';
/* 自定义的JS */
// 引入自定义组件。index.js是组件的默认入口`
import edu from '@/core/edu';

//引入全局js 工具类
import http from '@/utils/http'; // permission control
import db from '@/utils/db';
import config from '@/config/config';
import constant from '@/config/constant';
import dist from '@/utils/dist';
import date from '@/utils/date';
import utils from '@/utils/utils';
import loading from '@/utils/loading';
Vue.prototype.$http = http;
Vue.prototype.$db = db;
Vue.prototype.$config = config;
Vue.prototype.$dist = dist;
Vue.prototype.$date = date;
Vue.prototype.$utils = utils;
Vue.prototype.$constant = constant;
Vue.prototype.$loadingUtil = loading;

//工具类-消息框
import msgUtil from '@/utils/msgUtil';
Vue.use(msgUtil);

Vue.use(edu);
/*  */

Vue.use(Antd);

/* 自定义required的规则 */
import EduForm from '@/core/edu/form-model';
Vue.use(EduForm);

Vue.config.productionTip = false;
Vue.use(Viser);
Vue.use(Plugins);

window.$vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
