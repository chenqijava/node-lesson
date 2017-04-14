// var math = require('./math')

// console.log(math.add(1,2,3,4))

// 检测Buffer，能提高web的效率
/**
var http = require('http')

var helloWorld = ''

for (var i = 0; i < 1024 * 10; i++) {
	helloWorld += 'a'
}

helloWorld = new Buffer(helloWorld, 'utf-8')

http.createServer(function (req, res) {
  	res.writeHead(200)
  	res.end(helloWorld)
}).listen(3000)
*/

// 4K

var buf = new Buffer(9)
console.log(buf.parent)
console.log(buf.offset)
var buf2 = new Buffer(4097)
for (var item in buf2) {
	console.log(item)
}
console.log(buf2.parent)
console.log(buf2.offset)
buf2[1] = 100





