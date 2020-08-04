import React from 'react'

export default class FormDemo extends React.Component {
    
    constructor(){
        super();
        this.state = {
            value: ''
        }
        this.username = React.createRef();
        this.passworld = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault(); //阻止input的默认提交跳转事件
        console.log(this.state.value);
    }

    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    submit = () => {
        console.log(this.username.current) //获取 DOM
        console.log(this.username.current.value) // 获取input输入的内容
        console.log(this.passworld.current.value) // 获取input输入的内容
    }

    render() {
        return(
           <div>
               <p>第五节：受控组件和非受控组件</p>
               <form onSubmit={this.handleSubmit}>
                   {/* 使用 this.state.value 代替 value="123" 表示这是受控组件
                   在页面任何地方，都可通过this.state调用修改value值 */}
                    <input type='text' value={ this.state.value } onChange={ this.onChangeHandler } />
                    <input type='submit' value='提交' />

                    <input type='text' ref={ this.username } />
                    <input type='text' ref={ this.passworld } />
                    <button onClick={ this.submit }>ref绑定，一次获取多个值</button> 
                    {/* 这里button会触发form的提交事件 */}
               </form>
           </div> 
        )
    }
}