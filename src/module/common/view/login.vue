<template>
  <div id="userLayout" :class="['user-layout-wrapper']">
    <div class="container">
      <div style="margin-left:60%; width: 500px;display:flex;flex-direction:column;height:100%;justify-content: center;">
        <div class="top">
          <div class="header">
            <a href="/">
              <!-- <img src="~@/assets/logo.png" class="logo" alt="logo"> -->
              <span class="title">{{ $config.systemName }}</span>
            </a>
          </div>
          <!-- <div class="desc">
          教育平台
        </div> -->
        </div>

        <div class="main">
          <a-form :form="form" class="user-layout-login" ref="formLogin" id="formLogin">
            <a-form-item>
              <a-input
                size="large"
                value="admin"
                v-decorator="['username', validatorRules.username, { validator: this.handleUsernameOrEmail }]"
                type="text"
                placeholder="请输入帐号"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="['password', validatorRules.password]"
                size="large"
                value="123456"
                type="password"
                autocomplete="false"
                placeholder="请输入密码"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <div style="text-align: center;">
                <a-button size="large" htmlType="submit" class="login-button" :loading="loginBtn" @click.stop.prevent="doLogin" :disabled="loginBtn"
                  >登录
                </a-button>
              </div>
            </a-form-item>
          </a-form>
          <login-select-tenant ref="loginSelect" @success="loginSelectOk"></login-select-tenant>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
//import md5 from "md5"
import loginApi from '@/module/common/api/loginApi';
import LoginSelectTenant from './loginSelectTenant';
export default {
  components: {
    LoginSelectTenant
  },
  data() {
    return {
      form: this.$form.createForm(this),
      loginBtn: false,
      currdatetime: null,
      inputCodeContent: '',
      validatorRules: {
        username: {
          rules: [{ required: true, message: '请输入账号!' }, { validator: this.handleUsernameOrEmail }]
        },
        password: {
          rules: [{ required: true, message: '请输入密码!', validator: 'click' }]
        },
        mobile: { rules: [{ validator: this.validateMobile }] },
        captcha: { rule: [{ required: true, message: '请输入验证码!' }] },
        inputCode: { rules: [{ required: true, message: '请输入验证码!' }] }
      }
    };
  },
  created() {
    this.currdatetime = new Date().getTime();
  },
  methods: {
    // handler
    handleUsernameOrEmail(rule, value, callback) {
      const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
      if (regex.test(value)) {
        this.loginType = 0;
      } else {
        this.loginType = 1;
      }
      callback();
    },
    doLogin() {
      let loginParams = {};
      //   this.loginBtn = true;
      // 使用账户密码登录
      this.form.validateFields(['username', 'password', 'inputCode', 'rememberMe'], { force: true }, (err, values) => {
        if (!err) {
          loginParams.username = values.username;
          loginParams.password = values.password;
          loginParams.remember_me = values.rememberMe;
          loginParams.captcha = this.inputCodeContent;
          loginParams.checkKey = this.currdatetime;

          if (process.env.VUE_APP_SYSTEM_NAME == '教科研管理系统') {
            loginParams.appId = '0research00000000000000000000000';
          } else if (process.env.VUE_APP_SYSTEM_NAME == '设备资产管理系统') {
            loginParams.appId = '0sbzc000000000000000000000000000';
          } else if (process.env.VUE_APP_SYSTEM_NAME == '学生管理系统') {
            loginParams.appId = '0student000000000000000000000000';
          } else {
            loginParams.appId = '0logistics0000000000000000000000';
          }

          loginApi
            .sLogin(loginParams)
            .then(res => {
              this.$refs.loginSelect.show(res.result);
            })
            .catch(err => {
              console.error(err);
              this.requestFailed(err);
            });
        } else {
          this.loginBtn = false;
        }
      });
      // 使用手机号登录
    },
    stepCaptchaSuccess() {
      this.loginSuccess();
    },
    stepCaptchaCancel() {
      this.Logout().then(() => {
        this.loginBtn = false;
        this.stepCaptchaVisible = false;
      });
    },
    loginSuccess() {
      this.$router.push({ path: '/' }).catch(() => {
        console.log('登录跳转首页出错,这个错误从哪里来的');
      });
      this.$notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`
      });
    },
    timeFix() {},
    cmsFailed(err) {
      this.$notification['error']({
        message: '登录失败',
        description: err,
        duration: 4
      });
    },
    requestFailed(err) {
      this.$notification['error']({
        message: '登录失败',
        description: ((err.response || {}).data || {}).message || err.message || '请求出现错误，请稍后再试',
        duration: 4
      });
      this.loginBtn = false;
    },
    validateMobile(rule, value, callback) {
      if (!value || new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(value)) {
        callback();
      } else {
        callback('您的手机号码格式不正确!');
      }
    },
    validateInputCode(rule, value, callback) {
      if (!value || this.verifiedCode == this.inputCodeContent) {
        callback();
      } else {
        callback('您输入的验证码不正确!');
      }
    },
    generateCode(value) {
      this.verifiedCode = value.toLowerCase();
    },
    inputCodeChange(e) {
      this.inputCodeContent = e.target.value;
    },
    loginSelectOk() {
      this.loginSuccess();
    }
  }
};
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }
  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 48px;
    width: 282.5px;
    // width: 100%;
    margin-top: 10px;
    background-image: linear-gradient(to right, #115697, #0857e8);
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
<style scoped>
.valid-error .ant-select-selection__placeholder {
  color: #f5222d;
}
</style>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    height: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/img/background.png) no-repeat;
    background-size: 100%;
    padding: 110px 0 144px;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;
      margin-bottom: 40px;

      .header {
        height: 44px;
        line-height: 44px;

        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }

        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
        }

        .title {
          color: #10569f;
          font-size: 33px;
          // color: rgba(0, 0, 0, .85);
          font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
            'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }

    .main {
      min-width: 260px;
      width: 368px;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;

      .links {
        margin-bottom: 8px;
        font-size: 14px;
        a {
          color: rgba(0, 0, 0, 0.45);
          transition: all 0.3s;
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
}
</style>
