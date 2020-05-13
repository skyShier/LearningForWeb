// 1.3 接口 interface
// 1。基础用法
interface Vegetable1 {
  color?: string, // 加问号表示这个参数可以不传，如果不加问号在调用时没有传这个参数会error
  readonly type: string, // 使属性只读
  [prop: string]: any, // 索引签名
}
// 2.函数接口
type addFun = (num1:number, num2: number) => number
// 3.接口继承
interface Tomato extends Vegetable {
  radius: number,
}
// 4.混合类型接口
interface Counter {
  (): void,
  count: number,
}


// const getFullName = ({ firstName, lastName}) => {
//   return `${firstName} ${lastName}`
// }
// getFullName({
//   firstName: 'Json',
//   lastName: 'Lee',
// }) 

interface NameInfo {
  firstName: string,
  lastName: string,
}

const getFullName = ({ firstName, lastName}: NameInfo):string => {
  return `${firstName} ${lastName}`
}
// 如果不适用interface，也可以指定传入的类型
// const getFullName = ({ firstName, lastName}: {firstName: string, lastName: string}):string => {
//   return `${firstName} ${lastName}`
// }

getFullName({
  firstName: 'Json',
  lastName: 'Lee',
}) 
// -----------------------------------------------------------------------------------------
interface Vegetables {
  color?: string, // 加问号表示这个参数可以不传，如果不加问号在调用时没有传这个参数会error
  readonly type: string, // 使属性只读
  [prop: string]: any, // 索引签名
}

const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ?  (color + ' ') : ''}${type}`
}
getVegetables({
  color: 'red',
  type: 'tomato',
})
console.log(getVegetables({ // 此时不传color不会报错
  type: 'tomato',
}))

// 如果传入的参数比定义的多，会报错
// 方法一：可使用类型断言绕过检查
getVegetables({
  color: 'red',
  type: 'tomato',
  size: 12,
} as Vegetables)
// 方法二：使用索引签名，在interface上添加，也可绕过
// 方法三：类型兼容性
const vegetableInfo = {
  color: 'red',
  type: 'tomato',
  size: 12,
}
console.log(getVegetables(vegetableInfo))

// 使属性只读
let vegetableObj: Vegetables = {
  type: 'tomato'
}
// vegetableObj.type = '123' //会报错

// 数组只读，不可修改
interface ArrInter {
  0: number,
  readonly 1: string,
}
// let arr: ArrInter = [0, 'abc']
// arr[1] = '123' //会报错

// 函数结构
// type addFunc = {
//   (num1: number, num2: number): number
// }
type addFunc = (num1:number, num2: number) => number
// const add: addFunc = (n1, n2) => `${n1}${n2}` //会报错，返回值需要是number
const add: addFunc = (n1, n2) => n1 + n2

// 索引类型: 给索引指定类型
// interface RoleDic {
//   [id: number]: string,
// }
// const role1: RoleDic = {
//   0: 'super_admin',
// }
interface RoleDic {
  [id: string]: string,
}
const role1: RoleDic = {
  a: 'super_admin',
  1: 'admin', //js会将属性名转化成字符串再作为属性名
}

// 接口的继承
interface Vegetable {
  color: string,
}
interface Tomato extends Vegetable {
  radius: number,
}
interface Carrot {
  length: number,
}
const tomato: Tomato = { // 这里的Tomato就必须写入2个参数，因为继承了 Vegetable的color
  color: 'red',
  radius: 5,
}

// 混合类型接口
interface Count {
  (): void,
  count: number,
}
const getCount = (): Count => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
const counter: Counter = getCount()
counter()
console.log(counter.count)



