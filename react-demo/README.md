## react笔记 ***

### JSX语法介绍
JSX语法：JavaScript + XML语法
解读 JSX 语法：遇到<>用xml解读，遇到{}用js语法解读
### 渲染
```
function tick() {
    const time = (
      <div>It is { new Date.toLocaleTimeString() }</div>
    )
    ReactDOM.render(time, document.getElementById('root'))
}
setInterval(ticl, 1000s)
```
### 组件
1.用类的形式创建组件：export default class Text extends React.Component()
2.用Hook的形式创建组件：const Text = {}  export default Text

### props
app.jsx
```
    const nav1 = ['1', '2', '3']
    const nav2 = ['4', '5', '6']

    reder(){
      return (
          <Nav nav={nav1} />
          <Nav nav={nav2} />
      )
    }

```

### 生命周期函数 【ComponentLife
componentWillMount:组件渲染之前
componentDidMount:组件渲染之后
shouldComponentUpadte:返回true（允许改变）或 false（不允许改变）
componentWillUpdate:数据改变之前执行（state、props）
componentDidUpdate:数据修改完成
componentWillReceiveProps:props发生改变执行
componentWillUnm ount:组件卸载前执行
```
constructor(props){
  super(props)
  this.state = {
    count: 10
  }

  render(){
    const { count } = this.state //ES6 解构赋值
    changeHandler = () => {
      this.setState({
        count: this.state.count += 1,
      })
    }
    return (
      <div>
        { count }
        <button onClick={ this.changeHandler }></button>
      </div>
    )
  }
}
```
### setState更新是同步还是异步【SetStateDemo
1.setState会引起视图重绘
2.在可控的情况下是异步， 在非可控的情况下是同步

### 条件渲染 【IfDemo
常用场景：1.对视图条件进行切换
        2.做缺省值

### refs 和 dom 【RefsAndDom
1.管理焦点，文本选择或媒体播放
2.触发强制动画
3.集成第三方DOM库

### 状态提升 【components
组件之间的数据交互

### 使用 propTypes 进行类型检查 【PropTypeDemo

### react-antd 按需加载
1）手动按需加载
2）使用babel-plugin-import完成按需加载
  1.npm run eject ：拉取react的配置文件
  2.npm install babel-plugin-import --save-dev
  3.修改package.son.babel,在perset后面加入

### Fetch请求 【FetchDemo

### react-router 【RouterPage
1）安装路由：npm install react-router-dom --save
2) 路由的作用：单页面应用（SPA），路由跳转：切换显示视图 
3）
<Router>
    <Route path="/login" component={ Login }></Route>
    <Route path="/home " component={ Home }></Route>
</Router>

<BrowserRouter>
import { BrowserRouter as Router, Router } from 'react-router-dom'
H5的新特性，主要利用的 history.push ,使用的是/
如果上线之后，需要后台做一些处理：重定向处理，不然可能会出现 404bug
<HashRouter>
import { HashRouter as Router, Router } from 'react-router-dom'
锚点链接：带#

<Link to="/login"></Link>
<Link to="/home"></Link>
点击会跳转到相应的页面，Link的本质是带锚点的a标签<a href="#/login"></a>


### react-redux
React中，状态数据：state
数据传递有两种方式： props【父传子】
                  回传事件【字传父】
redux和react-redux
redux：js 的状态管理：creatStore
react-redux：为了在react中更容易的使用：connect、provider 





