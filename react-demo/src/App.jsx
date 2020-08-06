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
import UCenter from './pages/routerPage/UCenter';
import NotFound from './pages/routerPage/NotFound';
import Demo from './pages/routerPage/Demo';

import { HashRouter as Router, Route, Link, Switch, NavLink, Redirect } from "react-router-dom"

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
        
        {/* setState更新是同步还是异步 */}
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

        {/* 第十一节：react中的router */}
        <Router>
            {/* 
              -- 匹配 --
                exact和strict
                1】exact【精确匹配】：
                2】strict,更精确的匹配，在路由末尾加入/，将不会被匹配,需要和excat一起使用  
                <Route exact={true} strict={true} path="/main" component={ Main }></Route>
              -- 高亮 -- navlink
                ink的时候，可以添加active样式，来增加当前页面显示的效果
                activeClassName 可以用来更改高亮的classname
                activeStyle 可以用来直接添加高亮的样式
                <NavLink exact activeStyle={{color: 'blue'}} to="/main/ucenter/:id?">link</NavLink>
              -- 传参 --
                传参的方式path + / + 参数 [例如：/login/:id?/:name?] 问号代表参数可选
                组件中获取参数，使用：props.match.params.id
              -- 其他属性 --
                Link to 中可以使用的属性
                pathname：
                search:
                hash：
                state: {参数名： 参数}  隐藏属性，在地址栏中不会显示，可以传值，隐形传参
              -- 重定向 --
                1】<Redirect from="/hellomian" to="/main/ucenter" />
                -- 页面跳转 --
                onclic={ clickHandle }
                const clickHandle = () => {
                  console.log(props)
                  props.history.push("/") push的上一层操作还存在内存中
                  props.history.replace("/") replace是重定向，上一次的页面就不存在了
                }
              -- withRouter高阶组件 --
                当组件没有被路由直接管理的时候，props是拿不到路由信息的
                import { withRouter } from "react-router-dom"
                clickHandle(){
                  console.log(props) // 直接打印得到空对象，需要用withRouter
                  props.history.push() // 使用withRouter后，能进行路由跳转
                }
                render(){
                  return (
                    <button onclick={this.clickHandle.bind(this)}>回到home</button>
                  )
                }
                export default withRouter(Mine) // 这里的mine是组件的名字
              -- Prompt --
                当离开页面之前，可以进行一些操作【例如：输入文本后离开页面，可以提示：离开页面将重置输入信息。。。】
                <Prompt
                  when={ !!this.state.name } //两次取反可以将目标转换为boolean值
                  message={ '确定要离开吗’ }
                ></Prompt>
                <input type="text" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}

            */}
            <Link exact strict to="/main/ucenter">link</Link>
            <NavLink exact activeClassName="select" to="/main/ucenter">link</NavLink>
            <Redirect from="/hellomian" to="/main/ucenter" />
            <Switch>
                <Route exact path="/main/ucenter" component={ UCenter }></Route>
                <Route exact path="/simple" render={() => 
                  <div>如果文件内容极少，可以直接使用 render 来返回一些东西</div>
                }></Route>
                {/* 这里可以进行传参，但一般在link中进行传参 */}
                <Route exact path="/" render={(props) => <Demo {...props} name="hello" />}></Route>
                <Route component={ NotFound }></Route>
            </Switch>
        </Router>

        {/* 第十二节：react中的redux */}

      </div>
    );
  }
 
}

export default App;
