// 手机验证表达式
// 支持[13753011189,13753011189]

let value = '17310241134,1123'
// if (new RegExp(/^1[0-9]\d{9}([,]1[0-9]\d{9})*$/).test(iphone)) {
//   console.log('验证成功')
// } else {
//   console.log('验证失败')
// }


console.log(value.length)
console.log(value[11])

if(value.length>12){
  if(value[11] !== ','){
    console.log('提示用逗号分隔开')``
  }
}



