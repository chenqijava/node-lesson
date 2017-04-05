// 导入experss模块
var express = require('express')
// 调用express实例， 返回一个express实例
var app = express()
// 第一个参数是访问路径
// 第二个参数是一个回调函数， 处理请求
app.get('/', function (req, res) {
  res.send('hello world')
})
// 开启服务，监听8000，第二个参数是一个服务创建成功后的回调函数
app.listen(8000, function () {
  console.log('app start in port 8000')
})



