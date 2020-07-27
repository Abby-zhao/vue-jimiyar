
/**
 * Object.defineProperty  将数据更改编程可观测的
 *
 *
 * */


let data = {}


Object.defineProperty(data, 'name', {
  get(){
    console.log('获取name的值')
  },
  set(newVal){
    console.log('name的值更改为'+newVal)
  }
})

data.name // 调用了get() 方法

data.name = '郭世伟' // 调用了set() 方法


/**
 * 在打印 data.name 的值得时候 首先执行了get() 方法
 * */
// console.log(data.name)
// data.name = 456    //在更改name的值得时候 首先执行了 set() 方法
