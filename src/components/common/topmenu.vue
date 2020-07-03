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
        color:#fff;
    }
    .topmenu .el-menu{
        border-bottom:0;
        background:transparent;
    }
    .topmenu .el-menu .el-menu-demo{
        color:#fff;
    }
    .topmenu .el-menu--horizontal .el-menu-item{
        color:lightgray;
        border-bottom:0;
        height:46px;
        line-height:46px;
        float: left;
        list-style-type:none;
        outline:none;
        margin-left: 20px;
    }
    .topmenu .el-menu--horizontal .el-menu-item .icom-home{
        width:16px;
        height:16px;
        display:inline-block;
        vertical-align: middle;
        background: url('../../assets/icon-home.png');
        background-size:100% 100%;
    }
</style>