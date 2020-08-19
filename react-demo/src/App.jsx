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
import Parents from './pages/reactRedux/com/Parents'
import User from './pages/user'
import { connect } from "react-redux"
// import { increment, decrement } from "./actions/counter"
import * as countActions from "./actions/counter"
import { bindActionCreators } from "redux"

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

    // const { increment, decrement } = this.props

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
        <Parents />
              <div className="num">{ this.props.counter }</div>
        {/* <button onClick={ this.props.onIncrement } className="increment">increment</button>
        <button onClick={ this.props.onDecrement } >decrement</button> */}
        {/* <button onClick={ () => increment()} className="increment">increment</button>
        <button onClick={ () => decrement()} >decrement</button> */}
        <button onClick={ () => this.props.countActions.increment(10) } className="increment">increment</button>
        <button onClick={ () => this.props.countActions.decrement(5) } >decrement</button>
        <User />
        {/* 
          -- react-redux的一般解决方案 --
          click --> action --> middleWare --> reducer
          connect 连接reducer 和 页面 
          文件结构：
              constants： 统一存储变量名
              actions： 接收方法名和参数，传入reducer，reducer通过参数名决定执行那一段函数
              reducers： 处理业务逻辑，return state 
                        combineReducers用来合并reducer
          所需配置：
              引入<App/>的index.js页面：在全局<App /> 入口，使用provider包裹
              中间件：引入<App/>的index.js页面：import { createStore, applyMiddleware } from "redux"
              使用页面：
                1）在使用的组件页面，使用connect进行连接
                  connect(mapStateToProps, mapDispatchToProps)(App)
                2）export default connect()(App)
                3）事件绑定的方法：
                  获取声明的 action 中所暴露的方法，括号内进行传参
                  import * as countActions from "./actions/counter"
                  <button onClick={ () => this.props.countActions.decrement(5) } >decrement</button>
                 
                3）读取数据的方案：见下方 mapStateToProps，然后通过 this.props.counter 读取
                4）修改数据的方案： 见下方 mapDispatchToProps
                                import { bindActionCreators } from "redux"
                                bindActionCreators 参数传递
          -- 安装中间件 --
          cnpm install --save-dev redux-logger
          -- reducer --
              有两个参数 state 和 action
              state：仓库中存的状态
              action：通过 action 改变 state 状态，action.type 不同的值，可以做不同的修改
        */}


      </div>
    );
  }
 
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    counter: state.counter
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {dispatch(increment())},
//     decrement: () => {dispatch(decrement())}
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    countActions: bindActionCreators(countActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
