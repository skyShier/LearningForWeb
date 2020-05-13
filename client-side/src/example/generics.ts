// 返回一个以 value 为填充值，长度为 times 的数组
// T 是泛型变量
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}
console.log(getArray(2)) // [2, 2, 2, 2, 2]
console.log(getArray<number>(2, 3)) // [2, 2, 2] // <>内指定泛型的类型为 number
// console.log(getArray(2, 3).map( item => item.length)) //报错，item是[2, 2, 2],数字是没有length属性的
console.log(getArray('abc', 4).map( item => item.length)) //[3, 3, 3, 3] 返回四个参数组成的数组，每个参数都是‘abc’的长度3

const getArrayDemo = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([param1, param2])
}
getArrayDemo(1, 'a', 4) //这里没有用<>声明泛型的类型，ts编译器会根据传入的值推断类型

type GetArray = <T>(arg: T, times: number) => T[] //别名的形式 声明泛型
interface GetArray1<T> {// 泛型变量可以声明在函数名后面，函数内所有成员都可以使用这个泛型
  (arg: T, times: number): T[], 
  array: T[]
}

interface ValueWithLength {
  length: number
}
const getArray1 = <T extends ValueWithLength>(args: T, times: number): T[] => {
  return new Array(times).fill(args)
}

// 在泛型约束上使用类型参数
const getProps = <T, K extends keyof T>(object: T, propName: K) => { //keyof:索引类型，返回一个对象上所有属性名构成的数组
  return object[propName]
}
let objs = {
  a: 'a',
  b: 'b'
}
getProps(objs, 'a') //a
// getProps(objs, 'c') //error