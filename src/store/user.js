import {
  userLogin
} from '../api/user';

export default {
  namespaced: true,
  state: {
    info: null
  },
  mutations: {
    userInfo(state, payload) {
      state.info = payload;
    }
  },
  actions: {
    userInfoAction(context) {
      userLogin().then(result => {
          context.commit('userInfo', result);
          return;
        }).catch(() => {
        context.commit('userInfo', []);
      })
    }
  }
};