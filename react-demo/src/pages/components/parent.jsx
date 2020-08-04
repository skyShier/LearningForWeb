import React from 'react'
import Child1 from './child1'
import Child2 from './child2'

export default class Parent extends React.Component {
    
    constructor(){
        super();
        this.state = {
           money: 1
        }
    }

    changeHandle = (e) => {
        this.setState({
            money: e.target.value
        })
    }

    render() {
        return(
           <div>
               <p>第七节：状态提升</p>
               <div>输入数值：<input type="text" value={ this.state.money } onChange={ this.changeHandle }/></div>
               <div><Child1 money={ this.state.money } /></div>
               <div><Child2 money={ this.state.money } /></div>
           </div> 
        )
    }
}