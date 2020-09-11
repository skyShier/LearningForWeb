# TypeScript 学习笔记

## ts文件编译
--outDir
指定便宜文件输出目录
tsc --outDir ./dist ./src/helloTypeScript.ts [输出文件目录 ts当前文件目录]

--target
指定编译的代码版本目标，默认为ES3
tsc --outDir ./dist --target ES6 ./src/helloTypeScript.ts

--watch
在监听模式下运行，当文件发生改变的时候自动编译
tsc --outDir ./dist --target ES6 --watch ./src/helloTypeScript.ts

编译配置文件：tsconfig.json 把上面的编译选项都保存在配置文件中
{
    "compilerOptions":{
        "outDir": "./dist",
        "target": "ES2015",
        "watch": true,
    },
    "include": ["./src/**/*"] //指定需要编译的ts文件目录，如果没有指定，则默认包含当前目录及子目录下的所有ts文件
 }

-p or --project
指定配置文件
tsc -p ./ccc.json 
指定配置文件目录
 tsc -p ./configs

 
## TypeScript - 类型系统
类型系统：
    类型标注：给数据（变量，函数，类等）添加类型说明
            let 变量：数据类型；
    类型检测
    类型标注有哪些：
        基础类型
        空和未定义类型
        对象类型
        数组类型
        元组类型
        枚举类型
        无值类型
        任意类型
        未知类型
        函数类型