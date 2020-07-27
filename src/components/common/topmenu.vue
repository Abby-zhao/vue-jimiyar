<template>
    <div class="topmenu">
        <el-menu mode="horizontal" class="el-menu-demo" :default-active="activeIndex">
            <el-menu-item index="0"><i class="icom-home" @click="jumpHome"></i></el-menu-item>
            <el-menu-item index="1" @click="jumpBasic">基础数据</el-menu-item>
            <el-menu-item index="2" @click="jumpXhsc">现货市场电费结算</el-menu-item>
            <el-menu-item index="3" @click="jumpHysc">合约市场电费结算</el-menu-item>
            <el-menu-item index="4" @click="jumpCgkzs">常规可再生补助资金结算</el-menu-item>
            <el-menu-item index="5" @click="jumpFbsgf">分布式光伏</el-menu-item>
            <el-menu-item index="6" @click="jumpMonthSettle">月度结算管理</el-menu-item>
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
import bus from '../common/bus'
import items from '../../common/menu/datas.js'
export default {
    name:'topmenu',
    data() {
      return {
            activeIndex:'1'
        }
    },
    created() {
      this.items=items
    },
  methods: {
    // 侧边栏折叠
    collapseChage () {
      this.collapse = !this.collapse
      bus.$emit('collapse', this.collapse)
    },
    jumpHome () {
      this.$router.push({path: '/'})
    },
    jumpBasic () {
      console.log(this.items)
      sessionStorage.setItem('menus', JSON.stringify(this.items.basic))
      bus.$emit('passBasic', this.items.basic)
      bus.$emit('collapseOpen', true)
    },
    jumpXhsc () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.price))
      bus.$emit('passXhsc', this.items.xhscdfjs)
      bus.$emit('collapseOpen', true)
    },
    jumpHysc () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.hyscdfjs))
      bus.$emit('passHysc', this.items.hyscdfjs)
      bus.$emit('collapseOpen', true)
    },
    jumpCgkzs () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.cgkzs))
      bus.$emit('passCgkzs', this.items.cgkzs)
      bus.$emit('collapseOpen', true)
    },
    jumpFbsgf () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.fbsgf))
      bus.$emit('passFbsgf', this.items.fbsgf)
      bus.$emit('collapseOpen', true)
    },
    jumpMonthSettle () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.monthSettle))
      bus.$emit('passMonthSettle', this.items.monthSettle)
      bus.$emit('collapseOpen', true)
    },
    jumpKqks () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.kqksdfjs))
      bus.$emit('passKqks', this.items.kqksdfjs)
      bus.$emit('collapseOpen', true)
    },
    jumpBills () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.bills))
      bus.$emit('passBills', this.items.bills)
      bus.$emit('collapseOpen', true)
    },
    jumpInvoice () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.invoice))
      bus.$emit('passInvoice', this.items.invoice)
      bus.$emit('collapseOpen', true)
    },
    jumpPayment () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.payment))
      bus.$emit('passPayment', this.items.payment)
      bus.$emit('collapseOpen', true)
    },
    jumpQuery () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.query))
      bus.$emit('passQuery', this.items.query)
      bus.$emit('collapseOpen', true)
    },
    jumpSystemSet () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.systemSet))
      bus.$emit('passSystemSet', this.items.systemSet)
      bus.$emit('collapseOpen', true)
    },
    jumpPowerSettle () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.powerSettle))
      bus.$emit('passPowerSettle', this.items.powerSettle)
      bus.$emit('collapseOpen', true)
    },
    jumpNoUse () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.powerFees))
      bus.$emit('passNoUse', this.items.powerFees)
      bus.$emit('collapseOpen', true)
    },
    jumpSystem () {
      sessionStorage.setItem('menus', JSON.stringify(this.items.systemManagement))
      bus.$emit('system', this.items.systemManagement)
      bus.$emit('collapseOpen', true)
    }
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
<style >
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
