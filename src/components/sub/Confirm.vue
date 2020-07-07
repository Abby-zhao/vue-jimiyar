<!-->子组件Confirm  父组件First.vue<-->
<template>
    <div class="confirm-button">
        <button @click="getbuttonClick">{{text }}</button>
    </div>
</template>
<script>
export default {
    name:"confirm-button",
    props:["text"],//父组件向子组件传的值   //父组件传给子组件的值用props接收
    data(){
        return{
            msg:123
        }
    },
    methods:{
        getbuttonClick(){//点击按钮的时候，像父组件传值
            this.$emit("me",this.msg) //向父组件传递值 //子组件通过$emit向父组件传值
        }
    }
}
</script>
<style>
    
</style>