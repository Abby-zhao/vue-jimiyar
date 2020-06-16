import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 第一个关键词 Store mutations
    const store = new Vuex.Store({
      state:{
        name:'zhaoyue'
      },
      mutations:{
        changeName(state,data){
          state.name = 'zhaoyue111'
        },
      },
      actions:{
        changeName1(context){
          context.commit('changeName')
        }
      }
    })

export  default  store


