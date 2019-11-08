import Vue from 'vue'
import Allpage from './Allpage.vue'
import router from './router/allindex'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Allpage)
}).$mount('#app')
