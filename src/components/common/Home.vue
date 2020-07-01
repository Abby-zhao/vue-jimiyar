<template>
    <el-row class="container">
        {{123333333}}
        <el-col :span="24" class="header">
            <div class="logo header-left">
                <img src="../../assets/logo.png" alt="">
                {{logoName}}
            </div>
            <div>
                <div class="head-left">
                    <topmenu></topmenu>
                </div>
                <div class="head-right">
                    <div class="head-right">
                        <span></span>
                    </div>
                    <div class="userinfo">

                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import topmenu from "./topmenu.vue"
export default {
    data(){
       return {
           logoName:"新一代电费结算"
       }
    },
    commponents:{
        topmenu
    }
}
</script>
<style>
    .container{
        position: absolute;
        top:0px;
        bottom:0pxq;
        width:100%;
    }
    .container .header{
        min-width:1270px;
        height:46px;
        background: #00f;
        line-height:46px;
        color:#fff;
    }
</style>