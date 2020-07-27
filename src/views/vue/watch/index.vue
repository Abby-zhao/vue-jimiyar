<!--
  计算属性：关键词 watch

  善于处理场景  :  多个数据受制于一个数据   异步请求(可以访问api) 存在缓存机制

  场景：输入姓名
       输出 姓 输出名

  使用方式： 需要初值

-->
<template>
  <div>
    <div>
      姓名：<input type="text" v-model="name">
    </div>
    <div>
      姓：<input type="text" v-model="firstName">
    </div>
    <div>
      名：<input type="text" v-model="lastName">
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
        watch:{
          // name:{
          //   handler(){
          //     this.firstName =  this.name[0]
          //     this.lastName  =  this.name.substring(1)
          //   },
          //   // 代表在wacth里声明了name这个方法之后立即先去执行handler方法，true:页面加载的时候就执行如果设置了false，则不执行
          //   immediate: true
          // }

          /**
           * @desc 第一种写法 监听一个普通变量
           * @param newval 改变后的值
           * @param oldval 改变前的值
           * */
          name(newval, oldVal){
            console.log(newval)
            console.log(oldVal)
          },
          /**
           * @desc 第二种写法 用watch 监听一个对象
           * @param newval 改变后的值
           * @param oldval 改变前的值
           * */
          'obj':{
            deep:true,  // 开启深度监听
            handler(newval,oldval){
              console.log(newval)
              console.log(oldVal)
            }
          }
        },
        data() {
            return {
                name: '郭世伟',
                firstName:'',
                lastName:'',
                obj:{
                  arr:[
                    {value:''}
                  ],
                  data:''
                }
            }
        },
    }
</script>

<style scoped>

</style>
