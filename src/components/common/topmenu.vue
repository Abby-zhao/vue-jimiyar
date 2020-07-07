<template>
    <div class="topmenu">
        <el-menu mode="horizontal" class="el-menu-demo" :default-active="activeIndex">
            <el-menu-item index="0"><i class="icom-home"></i></el-menu-item>
            <el-menu-item index="1">基础数据</el-menu-item>
            <el-menu-item index="2">现货市场电费结算</el-menu-item>
            <el-menu-item index="3">合约市场电费结算</el-menu-item>
            <el-menu-item index="4">常规可再生补助资金结算</el-menu-item>
            <el-menu-item index="5">分布式光伏</el-menu-item>
            <el-menu-item index="6">月度结算管理</el-menu-item>
        <el-submenu index="7">
           <template slot="title">更多</template>
            <el-menu-item index="7-1" @click="jumpKqks">跨区跨省电费结算</el-menu-item>
            <el-menu-item index="7-2" @click="jumpBills">账单管理</el-menu-item>
            <el-menu-item index="7-3" @click="jumpInvoice">发票管理</el-menu-item>
            <el-menu-item index="7-4" @click="jumpPayment">收付款管理</el-menu-item>
            <el-menu-item index="7-5" @click="jumpQuery">查询分析</el-menu-item>
            <el-menu-item index="7-6" @click="jumpSystemSet">系统配置</el-menu-item>
            <el-menu-item index="7-7" @click="jumpPowerSettle">电费结算与财务管控数据交互</el-menu-item>
            <el-menu-item index="7-8" @click="jumpSystem ">审计</el-menu-item>
            <el-menu-item index="7-9" @click="jumpNoUse">excel没有菜单</el-menu-item>
        </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import bus from './bus'
export default {
    name:'topmenu',
    data() {
      return {
            activeIndex:'1'
        }
    },
    created() {
    },
    methods:{

    }
}
</script>
<style scoped>
    .topmenu{
        height:46px;
        line-height:46px;
        overflow: hidden;
    }
    .topmenu .el-menu{
        border-bottom:0;
        background:transparent;
        height:46px;
        line-height:46px;
    }
    .topmenu .el-menu--horizontal .el-menu-item{
        color:lightgray;
        border-bottom:0;
        height:46px;
        line-height:46px;
        float: left;
        list-style-type:none;
        outline:none;
    }
    .topmenu .el-menu--horizontal .el-menu-item .icom-home{
        width:16px;
        height:16px;
        display:inline-block;
        vertical-align: middle;
        background: url('../../assets/icon-home.png');
        background-size:100% 100%;
    }
     .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{
         background-color:#666;
     }
     .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus{
         background-color:#666;
     }
</style>
<style > <!--写第二个style是因为el-submenu的样式不生效-->
    .topmenu .el-menu--horizontal>.el-submenu .el-submenu__title{
        height:46px;
        line-height:46px;
        border-bottom:0;
        background:transparent;
        color:lightgrey;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
        background:#666;
    }
</style>