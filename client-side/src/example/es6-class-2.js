// es5中实现一个构造函数的继承，需要修改原型链
function Food () {
  this.type = 'food'
}
Food.prototype.getType = function () {
  this.name = name
}
function Vegetables (name) {
  this.name = name
}
Vegetables.prototype = new Food()
const tomato = new Vegetables('tomato')
console.log(tomato.getType()) // food

// es6的类就是构造函数的语法糖，在es6中实现类的继承
class Parent {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}
class Child extends Parent {
  constructor (name, age) {
    super(name)
    this.age = age
  }
}
const c =  new Child('lison', 18)
console.log(c) //Child {age:18, name:'name'}
