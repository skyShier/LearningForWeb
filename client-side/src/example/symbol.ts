// 1.2 Symbol


const s = Symbol()
console.log(s)

const s1 = Symbol('Shier')
const s2 = Symbol('Shier')
// console.log(s1 === s2) //ßfalse

// symbol不能和其他的值做运算
// symbol可以转换成字符串和boolean类型
console.log(s1.toString())
console.log(Boolean(s1)) //true
console.log(!s1) //false

let prop = 'name'
const info = {
  name: 'Shier',
  [prop]: 'Shier', //name: Shier
  [`my${prop}`]: 'Shier' //myname: Shier
}

let s3 = Symbol('name')
const info1 = {
  [s3]: 'Shier', //Symbol(name): Shier
  age: 18,
  sex: 'girl'
}

// 不能遍历symbol属性的方法
for (const key in info1) {
  console.log(key) //age sex
}
Object.keys(info1) //['age', 'sex']
Object.getOwnPropertyNames(info1) //['age', 'sex']
JSON.stringify(info1) //'{age:18, sex:girl}
//可以返回symbol的方法 
Object.getOwnPropertySymbols(info1) //Symbol(name)
Reflect.ownKeys(info1) //['age', 'sex' Symbol(name)]

// Symbol.key()和Symbol.keyFor()
const s4 = Symbol('Shier')
const s5 = Symbol('Shier')
const s6 = Symbol('Fang')
// s4 === s5 //true
// s5 === s6 //false

Symbol.keyFor(s4) //Shier

//11个内置的Symbol值
Symbol.hasInstance
const obj2 = {
  [Symbol.hasInstance] (otherObj) {
    console.log(otherObj)
  }
}
console.log({ a: 'a'} instanceof <any>obj2) //false
// 知识补充：instancebof 用来判断前面是否是后面的实例


Symbol.isConcatSpreadable
let arr3 = [1, 2]
// console.log([].concat(arr3, [3, 4])) //[1, 2, 3, 4]
// arr3[Symbol.isConcatSpreadable] = false
// console.log([].concat(arr3, [3, 4])) //[Array(2), 3, 4]

Symbol.species
class C extends Array {
  constructor (...args) {
    super(...args)
  }
  static get [Symbol.species] () {
    return Array
  }
  getName () {
    return 'Shier'
  }
}

Symbol.match
let obj3 = {
  [Symbol.match] (string) {
    console.log(string.length)
  },
  [Symbol.split] (string) {
    console.log('split' + string.length)
  }
}
'abcde'.match(<RegExp>obj3)

Symbol.replace
Symbol.search
Symbol.split

Symbol.iterator



