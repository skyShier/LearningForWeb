import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import ComponentLife from './pages/ComponentLife';
import SetStateDemo from './pages/SetStateDemo';
import IfDemo from './pages/IfDemo';
import FormDemo from './pages/FormDemo';
import RefsAndDom from './pages/RefsAndDom';
import Parent from './pages/components/parent';
import Compose from './pages/Compose';
import PropTypeDemo from './pages/PropTypeDemo';
import pureComponentDemo from './pages/PureComponentDemo';
import FetchDemo from './pages/FetchDemo';

class App extends React.Component {

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

  render() {
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
        {/* 点击时会先执行：componentWillReceiveProps 
            -- shouldComponentpdate 
            -- componentWillUpdate 
            --componentDidUpdate */}

        {/* 传入clickChanges 将父级的 clickChange函数传给子集 */}
        <button onClick={ this.clickChange } clickChanges={ this.clickChange }>修改title</button>

        <SetStateDemo />

        <IfDemo />

        <FormDemo />

        <RefsAndDom />

        <Parent />

        <Compose>
          <p>第八节：组件组合</p>
          <div>123123123</div>
        </Compose>

        <PropTypeDemo title="标题"/>

        <pureComponentDemo />
        {/* 第十节：react中的fetch请求 */}
        <FetchDemo />
      </div>
    );
  }
 
}

export default App;
