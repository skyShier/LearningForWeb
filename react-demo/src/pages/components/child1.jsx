import React from 'react'

export default class Child1 extends React.Component {
    
    constructor(){
        super();
        this.state = {
            input1: 0
        }
        this.input1 = React.createRef();
    }

    componentWillReceiveProps(){
        this.setState({
            input1: this.props.money
        })
    }

    changeHandle = (e) => {
        this.setState({
            input1: e.target.value
        })
    }

    render() {
        return(
           <div>
               人民币：
                <input type="text" value={ this.state.input1 } onChange={ this.changeHandle }/>
                {this.props.money}
           </div> 
        )
    }
}