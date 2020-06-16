<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{$store.state.name}}
    <input type="text" v-model="inputName">
    <button @click="changeState">更改state的值</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      inputName:null
    }
  },
  methods:{
    changeState:function () {
      // this.$store.commit('changeName', this.inputName)
      this.$store.dispatch('changeName1')
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
