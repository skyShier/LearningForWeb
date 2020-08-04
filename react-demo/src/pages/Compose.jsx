import React from 'react'

export default class Compose extends React.Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}