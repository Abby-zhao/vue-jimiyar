<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import bus from '../common/bus'
import items from '../../common/menu/datas.js'
let _this = null
export default {
    data(){
        return{
            collapse:true,
            items:[]
        }
    },
    computed: {
        onRoutes(){
            return this.$route.path.replace('/','')//获取当前路由,这里所指是路由中的重定向也就是/dashboard
        }
    },
    created() {
        _this=this
        this.items=items
        //通过Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('coll',msg=>{ //监听事件（Event bus）也就是接收数据
            this.collapse=msg
            console.log("***********",this.collapse)//返回结果为true
            this.items=sessionStorage.getItem('menus') ? JSON.parse(sessionStorage.getItem('menus')) :irems.basic
            console.log("44444444444444",this.items)
        })
    bus.$on('passBasic', msg=> {
      this.items = msg
    })
    bus.$on('passXhsc', msg => {
      this.items = msg
    })
    bus.$on('passHysc', msg => {
      this.items = msg
    })
    bus.$on('passCgkzs', msg => {
      this.items = msg
    })
    bus.$on('passFbsgf', msg => {
      this.items = msg
    })
    bus.$on('passMonthSettle', msg => {
      this.items = msg
    })
    bus.$on('passKqks', msg => {
      this.items = msg
    })
    bus.$on('passBills', msg => {
      this.items = msg
    })
    bus.$on('passInvoice', msg => {
      this.items = msg
    })
    bus.$on('passPayment', msg => {
      this.items = msg
    })
    bus.$on('passQuery', msg => {
      this.items = msg
    })
    bus.$on('passSystemSet', msg => {
      this.items = msg
    })
    bus.$on('passPowerSettle', msg => {
      this.items = msg
    })
    bus.$on('passNoUse', msg => {
      this.items = msg
    })
    bus.$on('system', msg => {
      this.items = msg
    })
    },
    methods:{
      coll: function () {
        _this.collapsed = !this.collapsed
        bus.$emit('coll',this.collapsed)
        setTimeout(function () {
          e.initEvent('resize', true, true)
          window.dispatchEvent(e)
        }, 500)
      },
    }
}
</script>
<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 48px;
    bottom:0;
    overflow-y: scroll;
  }
  .sidebar::-webkit-scrollbar{
    width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse){
    width: 235px;
  }
  .sidebar > ul {
    height:100%;
  }
  .sidebar .el-menu--collapse{
    width: 60px;
  }
</style>
