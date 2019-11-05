import Vue from 'vue';
import Login from './Login.vue';
import router from './router/allindex'
/* 导入公共样式 */

/* 导入UI库中所有的组件和对应的样式 */
/* import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI); */

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(Login)
}).$mount('#app');