import React from 'react';
import qs from 'querystring'
import ProxyDemo from './ProxyDemo'

export default class FetchDemo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            banners: []
        }
    }

    componentDidMount(){
        // get
        fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            this.setState({
                banners: data.banner
            })
        })
        /**
         * post
         * ajax:对象类型的参数
         * body:字符串类型
         */
        fetch("http://iwenwiki.com/api/blueberrypai/login.php", {
            method: 'POST',
            headers: {
                'content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json,text/plain,*/*'
            },
            body:qs.stringify({
                user_id: 'iwen@qq.com',
                password: 'iwen123',
                verification_code: 'crfvw'
            })
            // body: 'user_id=iwen@qq.com&password=iwen123&verification_code=crfvw'
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        const { banners } = this.state;
        return(
            <div>
                <p>第十节：react中的fetch请求</p>
                {
                    banners.length > 0 ? 
                    <ul>
                        {
                            banners.map((item, index) => {
                            return <li key={index}>{ item.title }</li>
                            })
                        }
                    </ul>
                    :
                    <div>waiting... </div>
                }
                <ProxyDemo />
            </div>
        )
    }
}