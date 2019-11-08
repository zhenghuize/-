import Vue from 'vue'
import Allpage from './Allpage.vue'
import router from './router/allindex'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD
=======

Vue.use(Vant);
>>>>>>> c5848bbd7845c0411b441fdc286045d891b46d6d

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Allpage)
}).$mount('#app')
