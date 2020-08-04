import React from 'react'

export default class ProxyDemo extends React.Component {

    /**
     * 跨域的解决方案
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
         * 安装npm install
         */
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}