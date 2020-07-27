// 对象赋值   赋值只赋栈中的指针地址
// var obj1 = {
//   'name' : 'zhangsan',
//   'age' :  '18',
//   'language' : [1,[2,3],[4,5]],
// };
// var obj2 = obj1;
// obj2.name = "lisi";
// obj2.language[1] = ["二","三"];
// console.log('obj1',obj1)
// console.log('obj2',obj2)

// 浅拷贝  创建了一个新对象
// var obj1 = {
//   'name' : 'zhangsan',
//   'age' :  '18',
//   'language' : [1,[2,3],[4,5]],
//   'obj':{
//     a:1,
//     b:2
//   }
// };

// var obj3 = shallowCopy(obj1);
// obj3.name = "lisi";
// obj3.language[1] = ["二","三"];
// obj3.obj.a = 3
// function shallowCopy(src) {
//   var dst = {};
//   // for in 遍历对象属性
//   for (var prop in src) {
//
//     if (src.hasOwnProperty(prop)) {
//       dst[prop] = src[prop];
//     }
//   }
//   return dst;
// }
// console.log('obj1',obj1)
// console.log('obj3',obj3)


// 浅拷贝的实现方式 // 拷贝的是对象的引用

// var obj = { a: {a: "kobe", b: 39},c:89 };
// var initalObj = Object.assign({c:21}, obj);
// initalObj.a.a = "wade";
// initalObj.c = 40;
// console.log(obj.c); //
// 引用指向地址  基本不会

// let arr=[1,2,3,4,{a:12}]
// let arr4 = arr.slice()
// arr[2] = 5
// arr4[4].a = 20
// console.log(arr)
// console.log(arr4)




// let arr = [1,2,3,5,6,7]
//
// let arr2 = arr.splice()
// console.log(arr)
// console.log(arr2)



function test(data) {
  console.log(typeof data)
}

test(null)
