import React from 'react';

export default class IfDemo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          isLogin: false,
          names: []
        }
    }  

    clickHandle = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        const { names } = this.state;

        let showView = this.state.isLogin ? <div>Shier</div> : <div>请登录</div>

        return (
        <div>
            <p>第四节：条件渲染</p>
            条件渲染：{ showView }
            <button onClick={ this.clickHandle }>切换状态</button>

            <div>
                缺省值：{names.length > 0 ? 
                    <div>
                        {names.map((item, index) => {
                            return <p key={index}>{ item }</p>
                        })}
                    </div>
                    :
                    <div>请等待，数据正在请求...</div>
                }
            </div>
        </div>
        )
    }
 
}
