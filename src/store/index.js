import Vue from 'vue';
import Vuex from 'vuex';
import Home from './Home'
import user from './user'
import detailsx from './detailsx'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Home,
    user,
    detailsx
  },
  state: {
    objState: {
      AppbjColor: 'white',
      topColor: 'rgb(20, 185, 200)',
    },
    obj:{}
  },
  mutations: {},
  actions: {},
})