import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import Home from './Home'
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    Home,
    user
  },
  state: {
    wayColor: {
      AppColor: 'white',
      topColor: 'rgb(20, 185, 200)',
    },
  },
  mutations: {},
  actions: {},
})