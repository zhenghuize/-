import Vue from 'vue';
import VueRouter from 'vue-router';
import Change from '.././views/allpage/Change.vue';
import Details from '.././views/allpage/Details.vue';
import Login from '.././views/allpage/Login.vue';
import Zhuce from '.././views/allpage/Zhuce.vue';
import Search from '.././views/allpage/Search.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/Change',
        component: Change
    },
    {
        path: '/Search',
        component: Search
    },
    {
        path: '/Details',
        component: Details
    },
    {
        path: '/Login',
        component: Login
    }, {
        path: '/Zhuce',
        component: Zhuce
    }, {
        path: '*',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router