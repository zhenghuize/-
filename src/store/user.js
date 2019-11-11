import {
  userLogin
} from '../api/user';

export default {
  namespaced: true,
  state: {
    // info: null
  },
  mutations: {
   /*  userInfo(state, payload) {
      window.console.log(state,payload)
      state.info = payload;
    } */
  },
  actions: {
    /* userInfoAction(context) {
      userLogin().then(result => {
        window.console.log(result)
          context.commit('userInfo', result);
          return;
        }).catch(() => {
        context.commit('userInfo', []);
      })
    } */
  }
};