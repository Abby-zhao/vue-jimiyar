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
    }]
})