/**
 * 双向绑定是mvvm框架中的一个概念
 *mvvm双向绑定：数据变化更新视图 视图变化更新数据
 *
 * 1、 数据可观测  Object.defineProperty     目的 知道数据被读或写      发布者
 * 2、 依赖收集   目的：通知依赖该数据的视图进行更新。                    订阅者
 *
 * */



/**
 * 1.数据变得可观测 Object.defineProperty    参数 对象，属性，{get(),set(newValue)}  其中get() 和set() 是对属性进行拦截的
 *    目的 ： 让对象主动告诉我们它的属性的读写情况  意外着 对象的数据已经是可观测的了
 *
 *    关键词：Object.defineProperty    参数 对象，属性，{get(),set(newValue)}  其中get() 和set() 是对属性进行拦截的
 * */


let car = {}
let val = 18

Object.defineProperty(car,'age',{
  get(){
    console.log('我被读取了')
    return val
  },
  set(newVal){
    console.log('我被修改了')
    val = newVal
  }
})
// console.log(car.age)
// console.log(car.age =29)

/**
 * 实例应用 --------------------------------------------------------------------
 * 把对象的每一项都转化成可观测对象
 * */

function obsetvable(obj){
  if (!obj || typeof obj !== 'object') {
    return;
  }
  let keys = Object.keys(obj)    // Object.key(Obj)  读取对象每一个属性

  keys.forEach((key)=>{
    defineReactive(obj,key,obj[key])
  })
}

/**
 *  使一个对象转换成可观测对象
 *  @param {Object} obj 对象
 *  @param {String} key 对象中的key
 *  @param {Any}  val 对象中某个key值
 * */
function defineReactive (obj,key,val) {
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    get(){
      // 增加订阅器
      dep.depend()
      console.log(`${key}属性被读取了`);
      return val;
    },
    set(newVal){
      console.log(`${key}属性被修改了`);
      val = newVal;
      dep.notify()                   // 数据变化通知所有订阅者
    }
  })
}

// 订阅器 Dep
class Dep(){
  constructor(){
    this.subs = []
  },
  // 增加订阅者
  addSub(sub){
    this.subs.push(sub)
  },
  // 判断是否增加订阅者
  depend(){
    if(Dep.target){
      this.addSub(Dep.target)
    }
  }
  // 通知订阅者更新
  notify(){
    this.subs.forEach((sub) =>{
      sub.update()
    })
  }
}
Dep.target = null

/**
 * 订阅者
 * vm 一个Vue的实例对象
 * exp node节点中的v-model 或v-on:click 等指令的属性值  如 v-model="name" exp 就是name
 * cd：是Watcher绑定的更新函数
 * */
class Watcher {
  constructor(vm,exp,cb){
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();  // 将自己添加到订阅器的操作
  },

  update(){
    let value = this.vm.data[this.exp];
    let oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    },
    get(){
      Dep.target = this;  // 缓存自己
      let value = this.vm.data[this.exp]  // 强制执行监听器里的get函数
      Dep.target = null;  // 释放自己
      return value;
    }
  }




let car = obsetvable({
  'brand':'宝马',
  'price': 30000
})




