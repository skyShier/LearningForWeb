import React from 'react';

export default class ComponentLife extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          count: 0
        }
    }  
    
    //当触发事件在子集的时候，this.props调用父级方法
    async increment() {
        // this.setState({
        //     count: this.state.count += 1
        // },() => {
        //     // 将打印内容放入官方提供的回调函数中，将不再出现打印延迟的问题
        //     console.log(this.state.count) 
        // })
        //在点击后打印，会发现，页面数据为1时，打印为0，页面为2时，打印为1
        // console.log(this.state.count) 

        // 使用同步的方法使用
        await this.setStateAsync({count:this.state.count += 1})
        console.log(this.state.count)
    }

    setStateAsync(state){
        return new Promise((resolve) => {
            this.setState(state, resolve);
        })
    }

    render() {
        return (
        <div>
            { this.state.count }
            <button onClick={ this.increment.bind(this) }>修改title</button>
        </div>
        )
    }
 
}
