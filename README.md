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