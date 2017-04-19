
var app = require('../app')

var should = require('should')

describe('test/app.test.js', () => {
  it('should equal 55 when n === 10', () => {
    app.fibonacci(10).should.equal(55)
  })
  
  it('should equal 1 when n === 1', () => {
    app.fibonacci(1).should.equal(1)
  })
  
  it('should equal 0 when n === 0', () => {
    app.fibonacci(0).should.equal(0)
  })
  
  it('should throw when n > 10', () => {
    (() => app.fibonacci(11)).should.throw('n should <= 10')
  })
  
  it('should throw when n < 0', () => {
    (() => app.fibonacci(-1)).should.throw('n should >= 0')
  })
  
  it('should throw when n isnt Number', () => {
    (() => app.fibonacci('哈哈')).should.throw('n should be a Number')
  })
})












