import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 第一个关键词 Store mutations
const store = new Vuex.Store({
    state: {
        name: 'zhaoyue',
        arr:[1,2,3,4,5,6,7],
    },
    getters:{
      arrs:function (state) {
        // 逻辑处理
          return state.arr
      }
    },
    mutations: {
        changeName(state, data) {
            state.name = data
        }
    },
    actions: {
        changeName1(context, data) {
            context.commit('changeName', data)
        }
    }
})

export default store
