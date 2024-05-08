import { getToken, setToken, removeToken } from '@/utils/auth';
import loginApi from '@/module/common/api/loginApi';
import db from '@/utils/db';
import { resetRouter } from '@/router';

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: null,
    userId: '',
    departs: [],
    selectTenent: '',
    selectDepart: '',
    selectMenu: {}
  };
};
const getDbState = () => {
  const userInfo = db.getObj('userInfo');
  const userId = userInfo ? userInfo.id : null;
  const departs = db.getObj('departs');
  const selectTenent = db.get('selectTenent');
  const selectDepart = db.get('selectDepart');
  if (userId) {
    return {
      token: getToken(),
      userInfo: userInfo,
      userId: userId,
      departs: departs,
      selectTenent: selectTenent,
      selectDepart: selectDepart
    };
  }
  return getDefaultState();
};

const state = getDbState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
    setToken(token);
  },
  SET_MENU: (state, menu) => {
    state.selectMenu = menu;
  },
  SET_USERINFO: (state, result) => {
    state.userInfo = result.userInfo;
    db.setObj('SYSTEM_LIST', result.manageList);
    db.setObj('menuList', result.menuList);
    state.userId = result.userInfo.id;
    state.departs = result.departs;
    db.setObj('userInfo', result.userInfo);
    db.setObj('departs', result.userInfo);
  }
};

const actions = {
  saveMenu({ commit }, menu) {
    commit('SET_MENU', menu);
  },
  tokenLogin({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', data.token);
      loginApi
        .tokenLogin({
          token: data.token,
          appId: '123456'
        })
        .then(res => {
          commit('SET_USERINFO', res.result);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  saveLoginInfo({ commit }, result) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', result.token);
      commit('SET_USERINFO', result);
      resolve();
    });
  },
  logout401({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken(); // must remove  token  first
      resetRouter();
      commit('RESET_STATE');
      db.clear();
      resolve();
    });
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      baseUserApi
        .logout(state.token.access_token)
        .then(() => {
          removeToken(); // must remove  token  first
          resetRouter();
          commit('RESET_STATE');
          const config = db.getObj(db.key.loginpageConfig);
          db.clear();
          commit('SET_LOGINPAGE_CONFIG', config);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken(); // must remove  token  first
      commit('RESET_STATE');
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
