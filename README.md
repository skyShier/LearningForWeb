## typescript
client-side:typescript学习

## react
react-demo：react+ant+ts+node

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

### 生命周期函数
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
### setState更新是同步还是异步
1.setState会引起视图重绘
2.在可控的情况下是异步， 在非可控的情况下是同步

### 条件渲染
常用场景：1.对视图条件进行切换
        2.做缺省值
