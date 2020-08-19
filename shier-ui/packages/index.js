// 整个包的入口
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checboxk-group'
import Form from './form'
import FormItem from './form-item'
import SeUpload from './uploader'

//存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  SeUpload
]

//定义一个 install 方法，接收 Vue 作为参数，如果使用 use 注册插件 则所有组件都会被注册
const install = function (Vue) {
  //遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

//判断是否直接引入文件，如果是 就不用调用Vue.ues()
if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install