
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')

var Cat = mongoose.model('Cat', {
  name: String,
  friends: [String],
  age: Number
})

var kitty = new Cat({name: 'Zildjian', friends: ['tom', 'jerry']})
kitty.age = 10

kitty.save(err => {
  if (err)
    console.log(err)
  console.log('meow')
})






















