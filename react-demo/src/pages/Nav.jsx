import React from 'react'

export default class Nav extends React.Component {
  
  render() {
    return (
      <div>
        {/* props不能被修改 */}
        {this.props.title}
        <ul>
          {this.props.nav.map((item, index) => {
            return <li key={index}>item</li>
          })}
        </ul>
      </div>
    )
  }
}