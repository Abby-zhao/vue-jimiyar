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
              },
              {
                path: '/computed',
                meta:{title:'计算属性'},
                component: resolve => require(['@/views/vue/computed'], resolve),
              },
              {
                path: '/watcher',
                meta:{title:'侦听属性'},
                component: resolve => require(['@/views/vue/watch'], resolve),
              },
              {
                path: '/leftFixedRightAuto',
                meta:{title:'左边定宽右边自己适应'},
                component: resolve => require(['@/views/layout/leftFixedRightAuto'], resolve),
              },
              {
                path: '/v-model',
                meta:{title:'v-model'},
                component: resolve => require(['@/views/vue/v-model.vue'], resolve),
              },
            ]
        }
    ]
})
