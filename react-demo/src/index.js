import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux"
// 中间件
import logger from "redux-logger"
import thunk from "redux-thunk"
// import reducer from "./reducers/counter"
import { Provider } from "react-redux"
import rootReducer from "./reducers"



// 中间件
// const logger = store => next => action => {
//   console.log("dispatch->", action)
//   let result = next(action); // s加载下一个中间件
//   console.log("next state->",store.getState());
//   return result
// }

// const error = store => next => action => {
//   try {
//     next(action)
//   }catch(e){
//     console.log("error",e)
//   }
// }

// 创建 store 仓库
// const store =  createStore(rootReducer,{},applyMiddleware(logger, error));
const store =  createStore(rootReducer,{},applyMiddleware(logger, thunk));
store.subscribe(() => console.log("state:",store.getState()))

// redux
// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         onIncrement={ () => store.dispatch({ type:"INCREMENT"})}
//         onDecrement={ () => store.dispatch({ type:"DECREMENT"})}
//         value={ store.getState()}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
// render();
// store.subscribe(render)

// react-redux
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
