import React from 'react';
import './App.css';

class ComponentLife extends React.Component() {

    constructor(props){
        super(props)
        this.state = {
          count: 10
        }
    }  
    componentWillUpdate() {

    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true;
    }
    //当触发事件在子集的时候，this.props调用父级方法
    clickChange = () => {
        this.props.clickChanges('我是子集调用父级所修改的参数')
    }
    changeHandler = () => {
        this.setState({
            count: this.state.count += 1,
        })
    }
    
    render(){
        const { count } = this.state //ES6 解构赋值
        
        return (
        <div>
            { count } -- { this.props.title }
            <button onClick={ this.changeHandler }></button>
            <button onClick={ this.clickChange } clickChanges={ this.clickChange }>修改title</button>
        </div>
        )
    }
 
}

export default ComponentLife;
