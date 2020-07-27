<!--
  计算属性：关键词 computed
  computed是基于它的依赖进行缓存的
  computed只有在它的相关依赖发生变化才会重新计算求值



  善于处理场景  :  一个数据受多个数据影响  (一个姓名受制于姓和名的影响)
  缓存机制 : 当 多个数据的某项数据么有改变 不会重新计算

  对比
    methods 通过 事件触发 没有缓存机制  所以不如计算属性

  场景：输入姓 输入名
       输出姓名

-->
<template>
  <div>
    <div>
      姓：
      <el-input v-model="firstName"></el-input>
      名:
      <el-input v-model="lastName"></el-input>
    </div>
    <div>
      姓名:
      <el-input v-model="name"></el-input>
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
        computed:{
          /**
           * @desc 第一种写法
           * */
          // name() {
          //   return this.firstName + this.lastName
          // }

          /**
           * @desc 第二种写法
           * */
        //    get set 方法
          name:{
            // get用来获取属性值。同时计算生成新的值
            get:function () {
              return this.firstName + this.lastName
            },
            // set 用来改变船体过来的值，发生改变的时候，同时让数据的内容也发生改变
            set:function (value) {
              console.log(value)
            }
          }
        },
        data() {
            return {
              firstName: '',
              lastName: ''
            }
        },
        methods: {},

    }
</script>

<style scoped>

</style>
