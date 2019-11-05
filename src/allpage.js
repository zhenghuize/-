import Vue from 'vue'
import Allpage from './Allpage.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Allpage)
}).$mount('#app')
