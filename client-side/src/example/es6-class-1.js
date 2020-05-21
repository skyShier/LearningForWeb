// es5构造函数
function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.getPostion = function() {
  return '(' + this.x + ',' + this.y + ')'
}
var p = new Point
console.log(p1.getPostion(x, y))

// es6 class类 构造函数
class Point1 {
  constructor (x, y) { // 每个类中必须要有构造函数
    this.x = x;
    this.y = y;
    // 默认返回 this 实例对象，也可以自己返回值
    return {a: 'a'}
  }; // 两个函数之间可以用分号隔开 或者不加，不能用逗号
  getPostion () {
    return `(${this.x},${this.y})`
  }
}
const p1 = new Point1(1, 2) //point1{x: 1, y: 2}
//当自己写了constructor返回值之后
console.log(p1) // {a: 'a'} 
console.log(p1 instanceof Point1) // false,不再是Point1的实例
console.log(p1.hasOwnproperty('x')) // p1是否自身有x属性，true
console.log(p1.hasOwnproperty('getPostion')) // 不是p1上的自有属性，false
// 是p1继承来的，getPostion是定义在类的（原型对象）__proto__上的，true
console.log(p1.__proto__.hasOwnproperty('getPostion')) 

// es6 取值函数和存值函数  加入了set get关键字
var info = {
  _age: 18,
  set age (newValue) {
    if (newValu > 18 ) {
      console.log('变老了')
    } else {
      console.log('还年轻')
    }
  },
  get age () {
    console.log('访问了这个对象')
    return this._age
  }
}
console.log(info.age)// 你问我年龄干嘛 18
info.age = 17 //还年轻

// es6中的类 也可以使用 set get 关键字
class Info {
  constructor (age) {
    this._age = age
  }
  set age (newAge) {
    console.log('new age is' + newAge)
    this._age = newAge
  }
  get age () {
    return this._age
  }
}

const info1 = new Info(18)
info1.age = 18

// 函数有两种定义形式
const func = function () {} //将函数赋值给一个变量
function func() //直接使用 function 关键数字定以一个函数

// class两种定义形式
class Info2 {
  constructor () {}
}
const Info3 = class c { //类名是Info3
  constructor () {}
} 

// 静态方法
 class PointStatic {
   z = 0 //定义属性z
   constructor (x, y) {
     this.x = x;
     this.y = y;
     console.log(new.target) //可以看函数是不是使用new构造的
   }
   getPosition () {
     return `(${this.x},${this.y})`
   }
   static getClassName () {
     return PointStatic.name
   } 
 }
 const p = new PointStatic(1, 2)
 console.log(p.getPostion) // (1,2)
 console.log(p.getClassName) // error 类中的静态方法是不能被继承的
 console.log(PointStatic.getClassName) // 静态方法只有类自身可以调用

//  私有方法 外部不能调用 _func2
const _func2 = () => {}
class Fun {
  func1 () {
    _func2.call(this)
  }
}

// 使用Symbol 将方法变为私有方法
const func3 = Symbol('func3')
export default class Poni12 {
  static [func3] () {
  }
}

// 继承 观察new.target
class Parent {
  constructor () {
    if (new.target === Parent) {
      throw new Error('不能实例化');
    }
    console.log(new.target)
  }
}

class Child extends Parent {
  constructor () {
    super()
  }
}

const c = new Child() // 打印出来的是child 而不是 parent



