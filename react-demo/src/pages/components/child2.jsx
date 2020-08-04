import React from 'react'

export default class Child2 extends React.Component {
    
    constructor(){
        super();
        this.state = {
            input2: 0
        }
        this.input2 = React.createRef();
    }

    componentWillReceiveProps(){
        this.setState({
            input2: this.props.money * 7
        })
        console.log(this.state.input2)
    }

    changeHandle = (e) => {
        this.setState({
            input2: e.target.value
        })
    }

    render() {
        return(
           <div>
               美元：
                <input type="text" value={ this.state.input2 } onChange={ this.changeHandle }/>
                {this.props.money * 7}
           </div> 
        )
    }
}