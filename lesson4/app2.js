var eventproxy = require('eventproxy')
var superagent = require('superagent')
var cheerio = require('cheerio')
var url = require('url')

var cnodeUrl = 'https://cnodejs.org/'
var topics = []

superagent.get(cnodeUrl).end((err, res) => {
  if (err) {
    console.log(err)
    return
  }
  var taskUrls = []
  var times = 0
  var $ = cheerio.load(res.text)
  $('#topic_list .topic_title').each((index, elem) => {
    $elem = $(elem)
    taskUrls.push(url.resolve(cnodeUrl, $elem.attr('href')))
  })
  console.log(taskUrls)
  var ep = eventproxy()
  
  ep.after('topic_html', taskUrls.length, (data) => {
    data.map(item => {
      var $ = cheerio.load(item[1])
      var href = item[0]
      var title = $('#content .topic_full_title').text().trim()
      var comment = $('.reply_content .markdown-text p').first().text().trim()
      var author = $('.author_content .user_info .reply_author').first().text().trim()
      var userPageUrl = $('.author_content .user_info .reply_author').first().attr('href') || '/404'
      // console.log(userPageUrl)
      superagent.get(url.resolve(cnodeUrl, userPageUrl)).end((err, res) => {
        ep.emit('score', [{title, href, comment, author}, res.text])
      })
    })
  })
  
  taskUrls.map((url) => {
    superagent.get(url).end((err, res) => {
      ep.emit('topic_html', [url, res.text])
    })
  })
  
  ep.after('score', taskUrls.length, (data) => {
    topics = data.map(item => {
      var topic = Object.assign({}, item[0])
      var $ = cheerio.load(item[1])
      topic.score = $('.user_profile .unstyled .big').text().trim()
      return topic
    })
    console.log(topics)
  })
})






