

var fibonacci = function (n) {
  if (typeof n != 'number') {
    throw new Error('n should be a Number')
  }
  if (n < 0) {
    throw new Error('n should >= 0')
  }
  if (n > 10) {
    throw new Error('n should <= 10')
  }
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

if (require.main === module) {
  // 如果执行main.js, 则会进入此处
  // 如果main.js 被其他文件 require, 则不会执行此处
  var n = Number(process.argv[2]);
  console.log(fibonacci(n))
}

// 导出fibonacci函数
exports.fibonacci = fibonacci








