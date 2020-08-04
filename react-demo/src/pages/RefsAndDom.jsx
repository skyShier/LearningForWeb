import React from 'react'

export default class RefsAndDom extends React.Component {
    
    constructor(){
        super();
        this.state = {
            value: ''
        };
        this.refDom = React.createRef();
    }

    componentDidMount() {
        console.log(this.refDom.current) //<div>Hello</div>
        // 可以对 DOM 进行操作
        this.refDom.current.style.color = 'green'
    }
 
    render() {
        return(
           <div ref={ this.refDom }>
                <p>第六节：Ref</p>
                Hello
           </div> 
        )
    }
}