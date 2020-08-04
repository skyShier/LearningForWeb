import React from 'react'
import PropTypes from 'prop-types'

export default class PropTypeDemo extends React.Component {
    render() {
        return(
            <div>
                <p>第九节：propTypes 进行类型检查</p>
                { this.props.title}
            </div>
        )
    }
}

PropTypeDemo.propTypes = {
    title: PropTypes.string.isRequired
}
// isRequired 必填
PropTypeDemo.defaultProps = {
    title: '默认值'
}