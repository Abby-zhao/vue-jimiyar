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
        <el-col :span="24" :class="collapsed?'main full':'main'">
          <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
            <div :class="collapsed?'menu-search-tool no':'menu-search-tool'">
              <el-input size="mini" placeholder="输入关键字,自动搜索" prefix-icon="el-icon-search"></el-input>
              <div class="tools" @click.prevent="coll">
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
import bus from '../common/bus'
import topmenu from './topmenu.vue'
import vSidebar from './Sidebar.vue'
let _this=null
export default {
    data(){
       return {
           logoName:"新一代电费结算应用网站", //头部logo后面的文字,
           collapsed:true,//不折叠
       }
    },
    components:{
        topmenu,//头部的右边
        vSidebar //左侧菜单
    },
  methods:{
    // 折叠导航栏
    coll: function (e) {
      this.collapsed = !this.collapsed //折不折叠来回换
      bus.$emit('coll', this.collapsed) //发送数据
      setTimeout(function () {
        e.initEvent('resize', true, true)
        window.dispatchEvent(e)
      }, 1500)
    },
  }
}
</script>
<style scoped>
    .container{
        position: absolute;
        min-width:1270px;
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
        padding-right:10px;
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
        position:absolute;
        top:46px;
        bottom:0px;
    }
    .container .main aside{
        flex:0 0 249px;
        width:249px;
        border-right:1px solid #e6e6e6;
        background:lightgray;
    }
    .container .main aside .el-menu {
        border-right: 0;
    }
    .container .main .menu-collapsed{
        flex: 0 0 60px;
        width: 60px;
        transition: 300ms;
    }
     .container .main .menu-expanded {
        flex: 0 0 249px;
        width: 249px;
        overflow-y: auto;
        transition: 300ms;
      }
    .container .main aside .collapsed{
        width:59px;
    }
    .container .main aside .collapsed .item {
        position: relative;
    }
    .container .main aside .collapsed .submenu {
        position: absolute;
        top: 0px;
        left: 60px;
        z-index: 99999;
        height: auto;
        display: none;
        box-shadow: 0px 2px 4px #ccc;
    }
    .container .main aside .menu-search-tool{
        padding: 10px 0 10px 10px;
    }
    .container .main aside .menu-search-tool .el-input{
        width:185px;
        display: inline-block;
    }
    .container .main aside .menu-search-tool .tools{
        width: 28px;
        height: 28px;
        line-height: 28px;
        margin-left: 10px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
    }
    .container .main aside .menu-search-tool.no {
        padding: 10px 0;
    }
    .container .main aside .menu-search-tool.no .el-input{
        display:none;
    }
    .container .main aside .menu-search-tool.no .tools{
        margin-left: 0;
        height: 100%;
        width: 100%;
    }
</style>
