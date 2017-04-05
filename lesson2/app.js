// 导入模块
var express = require('express')
var utility = require('utility')

// 得到express实例
var app = express()

// 请求处理
// 对get的参数进行md5加密
/*
app.get('/', function (req, res) {
  var val = req.query.q
  res.send(utility.md5(val))
})
*/
// 对参数进行sha1加密
app.get('/', function (req, res) {
  var val = req.query.q
  res.send(utility.sha1(val))
})

// 开启端口创建服务
app.listen(3000, function () {
  console.log('app start is port 3000')
})






