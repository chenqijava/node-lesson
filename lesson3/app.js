// 导入模块
var express = require('express') // web框架
var superagent = require('superagent') // 爬虫框架
var cheerio = require('cheerio')  // 处理页面， 和jquery一样

var app = express()

app.get('/', function (req, res, next) {
  superagent.get('https://cnodejs.org').end(function (err, sres) {
    // 请求错误
    if (err) {
      return next(err)
    }
    // 成功
    var $ = cheerio.load(sres.text)
    var items = []
    $('#topic_list .topic_title').each(function (idx, ele) {
      var $element = $(ele)
      items.push({
        title: $element.attr('title'),
        href: $element.attr('href')
      })
    })
    // res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(items)
  })
})

app.listen(process.env.PORT || 5000)
