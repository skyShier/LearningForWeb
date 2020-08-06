import React from "react"
import querystring from "querystring"

const Demo = (props) => {

    console.log(props)
    // 在跳转页面中读取路径name=123&age=18
    // 第一种方案，使用URLsearchParams
    new URLSearchParams(props.location.URLSearchParams)
    const params = new URLSearchParams(props.location.URLSearchParams)
    params.get("name") // 可以读取地址上拼接的name值
    
    // 第二种方案
    const value = querystring.parse(props.location.search)
    // 使用时需要去掉第一个对象键前面的？
    console.log(value.name); //可以得到name的值
    console.log(value.age);

    // 当link的to添加了其他参数时，在props.location中都可以得到
    

    return (
        <div>
            Demo
        </div>
    )
}

export default Demo