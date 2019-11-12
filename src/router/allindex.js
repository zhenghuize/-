<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import Change from '.././views/allpage/Change.vue'
import Details from '.././views/allpage/Details.vue'
import Login from '.././views/allpage/Login.vue'
import Search from '.././views/allpage/Search.vue'
import SearchList from '.././views/allpage/SearchList.vue'
=======
import Vue from 'vue';
import VueRouter from 'vue-router';
import Change from '.././views/allpage/Change.vue';
import Details from '.././views/allpage/Details.vue';
import Login from '.././views/allpage/Login.vue';
import Zhuce from '.././views/allpage/Zhuce.vue';
import Search from '.././views/allpage/Search.vue';
<<<<<<< HEAD
=======
import Personal from '.././views/allpage/Personal.vue';
>>>>>>> 90a297cf4891edca4356e35476f17a666a839c10
>>>>>>> 4653c5b183868f5756734ae9fb5a05a193c13fcc

Vue.use(VueRouter)

const routes = [{
<<<<<<< HEAD
    path: '/Change',
    component: Change
},
{
    path: '/Search',
    component: Search
},
{
    path: '/SearchList',
    component: SearchList
},
{
    path: '/Details',
    component: Details
},
{
    path: '/Login',
    component: Login
}, {
    path: '*',
    component: Login
}
=======
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
>>>>>>> 90a297cf4891edca4356e35476f17a666a839c10
]

const router = new VueRouter({
    routes
})

export default router