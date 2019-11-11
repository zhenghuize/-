import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '.././views/home/Home.vue'
import Find from '.././views/home/Find.vue'
import Ranking from '.././views/home/Ranking.vue'
import Personal from '.././views/home/Personal.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Home'
  }, {
    path: '/Home',
    component: Home
  }, {
    path: '/Personal',
    component: Personal
  },
  {
    path: '/Find',
    component: Find
  },
  {
    path: '/Ranking',
    component: Ranking
  }, {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router