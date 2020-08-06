import React from 'react'
// 调用封装好的接口
import api from '../api'
export default class ProxyDemo extends React.Component {

    /**
     * 跨域的解决方案
     * http://iwenwiki.com/api/blueberrypai/login.php
     * 
     * 开发模式：利用环境解决
     * 生产模式：jsonp，cors，postMassage
     */

    componentDidMount(){
        // 在package中配置了proxy之后，”proxy“：“http://tingapi.ting.baidu.com”将代替原请求的前部分
        // 加入配置后，请求不必再写前面的地址
        fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            // Error: SyntaxError: Unexpected token < in JSON at position 0
            // 修改配置文件后需要重启
            console.log(new Error(error))
        })

        /**
         * 跨域的第二种解决方案:手动配置跨域
         * 自己配置mock
         * 安装npm install http-proxy-middleware --save
         */
        fetch("/api/list")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            // Error: SyntaxError: Unexpected token < in JSON at position 0
            // 修改配置文件后需要重启
            console.log(new Error(error))
        })

        /**
         * 使用已经封装好的 api
         */

         api.getChengpin().then(res => res.json())
         .then(data => {
             console.log(data)
         })
         
         api.getChengpin({
            user_id: 'iwen@qq.com',
            password: 'iwen123',
            verification_code: 'crfvw'
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}