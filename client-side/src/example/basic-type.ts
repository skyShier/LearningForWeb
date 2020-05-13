// 1.1 数据类型
//  boolean、number、string、tuple、enmu枚举、any、void、null和undefined、never


// 布尔类型
let bool: boolean = true
let bool1: boolean
bool1 = true

//数值类型
let num: number
num = 0b1111011
num = 0o173
num = 0x7b

//字符串类型
let str: string
str = 'abc'
str = `数值是${num}`

//数组类型
//写法一 [1, 2, 3]
let arr: number[]
// let arr: (string | number)[]
//写法二
let arr1: Array<number>
// let arr1: Array<string | number>

//元祖类型 固定长度类型，超出元素叫越界元素
//2.6以前越界元素如果是出现过的类型，不会报错，2.6以后不能超出
let tuple: [string, number, boolean]
tuple = ['1', 2, false]

//枚举类型
enum Roles {
  SUPER_ADMIN, //0
  ADMIN, //1
  USER, //2
  SHIER = 5
}

if(num === Roles.SUPER_ADMIN) {
  //如果上方判断成立，说明是超级管理员，比 num === 0 更加直观
  //默认的枚举序列是0，1，2 ...
  //如果需要可以在后面加等号定义 SUPER_ADMIN = 3
  //如果只定义第一个，下面的不指定，则会自动根据指定的数值递增 
  console.log(Roles.SUPER_ADMIN) //0
  console.log(Roles.SHIER) //5
  console.log(Roles[1]) //ADMIN
}
//枚举类型是如何用js做到的
// var Roles1
// (function (Roles1) {
//   Roles1[Roles1["SUPER_ADMIN"] = 0] = "SUPER_ADMIN"
//   Roles1[Roles1["ADMIN"] = 1] = "ADMIN"
//   Roles1[Roles1["USER"] = 2] = "USER"
//   Roles1[Roles1["SHIER"] = 5] = "SHIER"
// })(Roles1 || (Roles1 = {}))
// console.log(Roles1["SUPER_ADMIN"] = 0) //0

//any类型
 let value: any
 const arr2: any[] = [1, 'a', false]

 //void类型
 const consoleText = (text: string): void => {
  console.log(text)
 }
 let v: void
 v = undefined
 //补充知识点：如果函数没有明确的返回值，默认返回的是undefined

 //null和undefined
 let u: undefined
 u = undefined
//  u = '123' // error
let n: null
n = null
//  n = '123' // error

//never类型 never可以赋值给任意类型 但任何类型都不能赋给never
const errorFunc = (message: string): never => {
  throw new Error(message)
}
const infiniteFunc = (): never => {
  while(true){}
}

//object
let obj = {  
  name: 'Shier'
}
let obj1 = obj //拿到的是obj在内存中的地址
obj1.name = 'S'
console.log(obj.name) //S
function getObject(obj: object): void {
  console.log(obj)
}
// getObject('123')// error
getObject(obj1)

//类型断言
const getLength = (target: string | number): number => {
  //类型断言两种方式(<string>target)或(target as string)
  //jsx 只能使用(target as string)
  if((<string>target).length || (target as string).length === 1) { 
    return (<string>target) .length
  } else {
    return target.toString().length
  }
}