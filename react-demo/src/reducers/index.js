// 文件为官方提供的合并 reducer 的方法
// 在引入 App  的主页面，引用此文件即可，不需要引用其他分支文件
import { combineReducers } from "redux"
import counter from "./counter"
import user from "./user"

const rootReducer =  combineReducers({
    counter: counter,
    user
})

export default rootReducer