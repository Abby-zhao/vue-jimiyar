import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/views/First'
import Vuex from '@/components/vuexceshi/vuex'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/First',
            name: 'First',
            component: First
        }, {
            path: '/Vuex',
            name: 'Vuex',
            component: Vuex
        },
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [{
                path: '/dashboard',
                meta: { title: '首页' }
            }]
        }
    ]
})