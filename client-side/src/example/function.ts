// function add(arg1: number, arg2: number):number { // es5写法
//   return arg1 + arg2
// }
// const add = (arg1: number, arg2: number) => arg1 + arg2 // es6写法
let add1: (x: number, y: number) => number
// add1 = (arg1: string, arg2: number) => arg1 + arg2 // 这里使用string会报错，与let的x属性不兼容
let arg3 = 12
add1 = (arg1: number, arg2: number) => arg1 + arg2 + arg3 
// 这里的arg3的类型，不需要在(arg1: number, arg2: number)里面定义

// 类型别名 --------------------------------------------------------------
type add2 = (x: number, y:number) => number
// 上面函数等价于 => 下面函数  推荐上面的写法
// interface add2 {
//   (x: number, y:number): number
// }
type isString = string //此时 isString 就等价于 string

type Add = (x: number, y:number) => number
let addFunc: Add
addFunc = (arg1: number, arg2: number) => arg1 + arg2

// 函数的可选参数 --------------------------------------------------------------
type AddFunction = (x: number, y: number, z?:number) => number 
// js中的可选参数可以在任意位置，传参的时候，如果某个位置不传参用undefined占位
// ts中的可选参数，必须在末尾
let addFunction: AddFunction 
addFunction  = (arg1: number, arg2: number) => arg1 + arg2

// 函数的默认参数 --------------------------------------------------------------
addFunction  = (arg1: number, arg2: number = 3) => arg1 + arg2
addFunction  = (arg1: number, arg2 = 3) => arg1 + arg2 // 也可以省略类型

// 函数的剩余参数 --------------------------------------------------------------
// es5
function handleData() {
  if(arguments.length === 1) return arguments[0] * 2
  else if (arguments.length === 2) return arguments[0] * arguments[1]
  else return Array.prototype.slice.apply(arguments).join('_')
}
// handleData(1) // [2]
// handleData(2, 3) // [6]
// handleData(1, 2, 3) // "1_2_3"

// es6
// const handleData1(...args) => {
//   console.log(args)
// }
// handleData1(1) // [1]
// handleData(1, 2, 3) // [1, 2, 3]

// ts
const handleData2  = (num1: number, ...args: number[]) => {
  // ...
}
 
// 重载 --------------------------------------------------------------
function getData(x: number): number[] // 函数重载 
function getData(x: string): string[] // 函数重载
function getData(x: any): any { // 函数实体，不是函数重载的一部分
  if( typeof x === 'string'){
    return x.split('')
  } else {
    return x.toString().split('').map( (item) => Number(item))
  }
}
console.log(getData('abc'),getData(123))
// x = 123
// toString: 数字转为字符串 "123"
// split: 将字符串分割成字符串数组 ["1", "2", "3"]
// map: 遍历数组
