<<<<<<< HEAD
import Vue from 'vue';
import Allpage from './Allpage.vue';
import router from './router/allindex';
import store from './store/index';
import './assets/reset.min.css';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

=======
import Vue from 'vue'
import Allpage from './Allpage.vue'
import router from './router/allindex'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
>>>>>>> 0d902ce690547bf1a0c30a9fed5bb84991b577f7

Vue.use(Vant);

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Allpage)
}).$mount('#app')
