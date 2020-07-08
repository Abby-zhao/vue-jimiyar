<template>
<div class="container">
    <el-row >
        <el-col :span="24" class="header">
            <div class="logo header-left">
                <img src="../../assets/logo.png" alt="">
                {{logoName}}
            </div>
            <div>
                <div class="head-left">
                    <topmenu></topmenu>
                </div>
            </div>
        </el-col>
        <el-col :span="24" class="main">
            <aside class="menu-collapsed">
                <div class="menu-search-tool">
                    <el-input size="mini" type="text" placeholder="输入关键字，自动搜索" prefix-icon="el-icon-search"></el-input>
                    <div class="tools">
                        <i class="fa fa-align-justify"></i>
                    </div>    
                </div>
                <v-sidebar></v-sidebar>
            </aside>
        </el-col>
    </el-row>
</div>
</template>
<script>
import topmenu from './topmenu.vue'
import vSidebar from './Sidebar.vue'
export default {
    data(){
       return {
           logoName:"新一代电费结算应用网站", //头部logo后面的文字,
           collpased:true,
       }
    },
    components:{
        topmenu,//头部的右边
        vSidebar //左侧菜单
    }
}
</script>
<style>
    .container{
        position: absolute;
        top:0px;
        bottom:0px;
        width:100%;
    }
    .container .header{
        min-width:1270px;
        height:46px;
        background: #444;
        line-height:46px;
        color:#fff;
    }
    .container .header .logo{
        width:250px;
        height:46px;
        font-size:18px;
        padding-left:10px;
    }
    .container .header .logo img{
        width:34px;
        height:34px;
        float: left;
        margin:5px 10px 0px 0px;
    }
    .container .header .head-left{
        float: left;
        width:79%;
        color:#fff;
    }
    .container .header .header-left{
        float: left;
    }
    .container .main{
        display: flex;
        height:calc(100vh - 46px);
        overflow: auto;
    }
    .container .main .menu-collapsed{
        display:flex;
        position:absolute;
        top:46px;
        overflow: auto;
        bottom: 0;
        height: calc(100vh - 46px);
        width:230px;
    }
    .container .main .menu-search-tool .el-input{
        width:185px;
        display: inline-block;
    }
    .container .main .menu-search-tool{
        padding:10px 0 10px 10px;
        height:30px;
        background:#ff0;
    }
    .container .main .menu-search-tool .tools {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
    }    
</style>