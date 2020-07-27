/**
 * 创建一个对象
 * 需要构造函数 初始化对象  方法挂载到原型链上
 *
 * */

function dep() {
    this.subs = []
}

dep.prototype.addSub = function (sub) {
    dep.subs.push(sub)
}

console.log(new dep().target)
