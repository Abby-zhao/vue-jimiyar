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
                <div class="head-right">
                    <div class="head-right">
                        <span></span>
                    </div>
                    <div class="userinfo">
                        <el-dropdown>
                            <span><i></i></span>
                             <el-dropdown-menu>
                                 <el-dropdown-item></el-dropdown-item>
                             </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="24" class="main">
            <aside class="menu-collapsed">
                <div>
                    <el-input  type="text" placeholder="输入关键字，自动搜索" prefix-icon="el-icon-search"></el-input>
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
           logoName:"新一代电费结算应用网站"
       }
    },
    components:{
        topmenu,
        vSidebar
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
    .container .main .menu-collapsed{
        display:flex;
        position:absolute;
        top:46px;
        overflow: auto;
        bottom: 0;
        height: calc(100vh - 46px);
    }
    .container .main .menu-collapsed{
        width:200px;
        background-color:skyblue;
    }
</style>