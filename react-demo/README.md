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








This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
