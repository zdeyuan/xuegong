/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-11 20:30:49
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-07-21 21:17:25
 */
let path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const assetsCDN = {
  // webpack build externals
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    nprogress: 'NProgress',
    clipboard: 'ClipboardJS',
    '@antv/data-set': 'DataSet',
    'js-cookie': 'Cookies'
  },
  css: [],
  js: [
    '//fastly.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//fastly.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js',
    '//fastly.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
    '//fastly.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
    '//fastly.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js',
    '//fastly.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js',
    '//fastly.jsdelivr.net/npm/@antv/data-set@0.11.4/build/data-set.min.js',
    '//fastly.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js'
  ]
};

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8989,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme/theme.less')]
    }
  },
  configureWebpack: config => {
    config.entry.app = ['babel-polyfill', 'whatwg-fetch', './src/main.js'];
    config.performance = {
      hints: false
    };
    // 生产环境下将资源压缩成gzip格式
    if (isProd) {
      // add `CompressionWebpack` plugin to webpack plugins
      /*    config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
        })
      ); */
    }
    // if prod, add externals
    if (isProd) {
      config.externals = assetsCDN.externals;
    }
  },
  chainWebpack: config => {
    // 生产环境下关闭css压缩的 colormin 项，因为此项优化与主题色替换功能冲突
    if (isProd) {
      config.plugin('optimize-css').tap(args => {
        args[0].cssnanoOptions.preset[1].colormin = false;
        return args;
      });
    }
    // 生产环境下使用CDN
    if (isProd) {
      config.plugin('html').tap(args => {
        args[0].cdn = assetsCDN;
        return args;
      });
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('autoprefixer')(),
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            minPixelValue: 2,
            unitPrecision: 5, //保留rem小数点多少位
            rootValue: 192, // 换算的基数(设计图750的根字体为32)
            propList: ['*'] //可以从px更改为rem的属性。
          })
        ]
      },
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  publicPath: '/' + process.env.VUE_APP_SYSTEM_PATH + '/',
  outputDir: 'dist/' + process.env.VUE_APP_SYSTEM_PATH,
  assetsDir: './static',
  lintOnSave: false, //process.env.NODE_ENV === 'development',
  productionSourceMap: false //生成环境调试用的  还是要关了
};
