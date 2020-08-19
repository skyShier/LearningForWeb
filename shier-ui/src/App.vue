<template>
  <div id="app">
    <div style="margin-bottom:20px;">大文件分段上传</div>
    <div class="row">
      <input type="file" id="input" @change="uploadfile" multiple/>
      <div id="uploadProgress">
        <div id="upload">
          <div id="label">0%</div>
        </div>
      </div>

    </div>
    <div style="margin-bottom:20px;">基础用法</div>
    <div class="row">
      <se-button @click="fn">默认按钮</se-button>
      <se-button type="primary">主要按钮</se-button>
      <se-button type="success">成功按钮</se-button>
      <se-button type="info">信息按钮</se-button>
      <se-button type="warning">警告按钮</se-button>
      <se-button type="danger">危险按钮</se-button>
    </div>
    <div class="row">
      <se-button plain>朴素按钮</se-button>
      <se-button plain type="primary">主要按钮</se-button>
      <se-button plain type="success">成功按钮</se-button>
      <se-button plain type="info">信息按钮</se-button>
      <se-button plain type="warning">警告按钮</se-button>
      <se-button plain type="danger">危险按钮</se-button>
    </div>
    <div class="row">
      <se-button round>圆角按钮</se-button>
      <se-button round type="primary">主要按钮</se-button>
      <se-button round type="success">成功按钮</se-button>
      <se-button round type="info">信息按钮</se-button>
      <se-button round type="warning">警告按钮</se-button>
      <se-button round type="danger">危险按钮</se-button>
    </div>
    <div class="row">
      <se-button circle>11</se-button>
      <se-button circle type="primary">12</se-button>
      <se-button circle type="success">13</se-button>
      <se-button circle type="info">14</se-button>
      <se-button circle type="warning">15</se-button>
      <se-button circle type="danger">16</se-button>
    </div>
    <div style="margin-bottom:20px;">禁用用法</div>
    <div class="row">
      <se-button disabled>默认按钮</se-button>
      <se-button disabled type="primary">主要按钮</se-button>
      <se-button disabled type="success">成功按钮</se-button>
      <se-button disabled type="info">信息按钮</se-button>
      <se-button disabled type="warning">警告按钮</se-button>
      <se-button disabled type="danger">危险按钮</se-button>
    </div>
    <div class="row">
      <se-button plain disabled>朴素按钮</se-button>
      <se-button plain disabled type="primary">主要按钮</se-button>
      <se-button plain disabled type="success">成功按钮</se-button>
      <se-button plain disabled type="info">信息按钮</se-button>
      <se-button plain disabled type="warning">警告按钮</se-button>
      <se-button plain disabled type="danger">危险按钮</se-button>
    </div>
    <div style="margin-bottom:20px;">不同尺寸</div>
    <div class="row">
      <se-button plain>默认按钮</se-button>
      <se-button plain size="medium">中等按钮</se-button>
      <se-button plain size="small">小型按钮</se-button>
      <se-button plain size="mini">超小按钮</se-button>
    </div>
    <div class="row">
      <se-button plain round>默认按钮</se-button>
      <se-button plain round size="medium">中等按钮</se-button>
      <se-button plain round size="small">小型按钮</se-button>
      <se-button plain round size="mini">超小按钮</se-button>
    </div>

    <div style="margin-bottom:20px;">Dialog</div>
    <div class="row">
      <se-button type="primary" @click="visible = true">Dialog</se-button>
      <!-- 1.父组件（例如使用的页面）给子组件 传了一个属性visible -->
      <!-- 2.子组件（例如组件dialog）想修改父组件的值 约定好事件叫做 update:visible -->
      <!-- 以上两个条件达成，可以在父组件使用 :visible.sync -->
      <se-dialog title="温馨提示" width="40%" top="200px" :visible.sync="visible">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <template v-slot:footer>
          <se-button @click="visible = false">取消</se-button>
          <se-button type="primary" @click="visible = false">确定</se-button>
        </template>
      </se-dialog>
      <!-- <se-dialog>
        <template v-slot:title>
          <h3>我是标题</h3>
        </template>
      </se-dialog> -->
    </div>
    
    <div style="margin-bottom:20px;">Input</div>
    <div class="row">
      <se-input placeholder="请输内容"></se-input>
    </div>
    <div class="row">
      <se-input placeholder="请输内容" disabled></se-input>
    </div>
    <div class="row">
      <se-input placeholder="请输入用户名" type="text" label="用户名" v-model="username" clearable></se-input>
    </div>
    <div class="row">
      <se-input placeholder="请输入密码" type="password" label="密码" v-model="password" show-password></se-input>
    </div>

    <div style="margin-bottom:20px;">Switch</div>
    <div class="row">
      <se-switch v-model="active"></se-switch>
      <se-switch v-model="inactive" active-color="#13ce66" inactive-color="red"></se-switch>
    </div>
    <!-- <div class="row">
      <se-switch v-model="name" name="username" width=100></se-switch>
    </div> -->

    <div style="margin-bottom:20px;">Radio</div>
    <se-radio label="0" v-model="gender">男</se-radio>
    <se-radio label="1" v-model="gender">女</se-radio>
    <se-radio label="2" v-model="gender"></se-radio>
    <se-radio label="3" v-model="gender"></se-radio>

    <div style="margin-bottom:20px;">RadioGroup</div>
    <se-radio-group v-model="group">
      <se-radio label="0">咩</se-radio>
      <se-radio label="1">汪</se-radio>
      <se-radio label="2">喵</se-radio>
    </se-radio-group>

    <div style="margin-bottom:20px;">Checkbox</div>
    <se-checkbox v-model="check">是否选中</se-checkbox>
    <se-checkbox-group v-model="hobby">
      <se-checkbox label="画画"></se-checkbox>
      <se-checkbox label="摄影"></se-checkbox>
      <se-checkbox label="打篮球"></se-checkbox>
    </se-checkbox-group>

    <div style="margin-bottom:20px;">Form</div>
    <se-form :model="model" label-width="80px">
      <se-form-item label="用户名">
        <se-input placeholder="请输入用户名" v-model="model.name"></se-input>
      </se-form-item>
      <se-form-item label="选择">
        <se-switch v-model="model.active"></se-switch>
      </se-form-item>
    </se-form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: '',
      password:'',
      active: false,
      inactive: true,
      name: false,
      gender: '1',
      group:'0',
      check:false,
      hobby: [
        '画画',
      ],
      model: {
        name: '',
        active: true
      }
    }
  },
  methods:{
    fn () {
      console.log('123')
    },
    uploadfile () {
      let elem = document.getElementById("upload");   
		  let width = 0;

      const input = document.querySelector('input[type=file]')
      const reader = new FileReader()
      reader.readAsText(input.files[0],'utf8') // input.files[0]为第一个文件
      console.log(input.files)

      let max = document.getElementById("input").files[0].size;
      //读取不中断则触发该事件
      reader.onprogress =  (evt) => {
        elem.style.width = evt.loaded/max*100 + '%';
        document.getElementById("label").innerHTML = evt.loaded/max*100 + '%';
      }

      // blob = new Blob([reader.result])
      // console.log(Object.prototype.toString.call(blob));
      // reader.onload = ()=>{
      //   document.body.innerHTML += reader.result  // reader.result为获取结果
      // }
    }
  }
}
</script>

<style lang="scss">
.row{
  margin-bottom: 20px;
  .se-button{
    margin-right: 20px;
  }
  .se-input {
    width: 200px;
  }
  .se-switch {
    margin-right: 20px;
  }
}

#uploadProgress{
  position: relative;
  width: 100%;
  height: 30px;
  background-color: #ddd;
}
 
#upload{
  position: absolute;
  width: 0%;
  height: 100%;
  background-color: #4CAF50;
}
 
#label{
  text-align: center;
  line-height: 30px;
  color: white;
}
</style>
