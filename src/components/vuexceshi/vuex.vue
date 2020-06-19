<!-->vuex<-->
<template>
  <div>
    {{$store.state.name}}
    <input type="text" v-model="inputName">
    <button @click="changeState">更改state的值</button>
    <ul v-for="(item,index) in $store.state.arr" :key="index">
      <li>{{item}}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Vuex',
  data(){
    return{
      inputName:null
    }
  },
  methods:{
    changeState:function () {
      // this.$store.commit('changeName', this.inputName)
      this.$store.dispatch('changeName1',this.inputName)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e51;
  margin-top: 60px;
}
</style>
