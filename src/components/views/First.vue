<!-->父组件First.vue 子组件Confirm.vue<-->
<template>
    <div>
        11
        {{msg}}
        <confirm text="注册" @me="getMessage"></confirm>
        <p><router-link to="/second">去第二个页面</router-link></p>
    </div>
</template>
<script>
import Confirm from "../sub/Confirm" //引入子组件
export default {
    name:'First',
    components:{//注册子组件
        Confirm
    },
    data(){
        return{
            msg:"hello,I am zhaoyue!"
        }
    },
    methods:{
        getMessage(val){//val为子组件传给父组件的值
            alert(val)
        }
    }
}
</script>
<style>
    
</style>