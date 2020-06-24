import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import ComponentLife from './pages/ComponentLife';
import SetStateDemo from './pages/SetStateDemo';
import IfDemo from './pages/IfDemo';

export class App extends React.Component() {

  constructor() {
    super();
    this.state = {
      title: '文本1'
    }
  }

  clickChanges = (data) => {
    this.setState({
      title: data 
    })
  }

  runder() {
    const nav1 = ['1', '2', '3']
    const nav2 = ['4', '5', '6']

     // 渲染函数
    return (
      <div className="App">
        <header className="App-header">
          <Nav nav={nav1} title="导航1"/>
          <Nav nav={nav2} title="导航2"/>
        </header>


        <ComponentLife title={this.state.title} />
        <button onClick={ this.clickChanges }>修改title</button>
        //点击时会先执行：componentWillReceiveProps 
        // -- shouldComponentpdate 
        // -- componentWillUpdate 
        // --componentDidUpdate

        {/* 传入clickChanges 将父级的 clickChange函数传给子集 */}
        <button onClick={ this.clickChange } clickChanges={ this.clickChange }>修改title</button>


        <SetStateDemo />


        <IfDemo />
      </div>
    );
  }
 
}

// export default App;
