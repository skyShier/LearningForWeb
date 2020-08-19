<template>
  <div class="se-input">
    <div class="se-input__label" :style="{width:labelwidth}" v-if="label != ''">
      {{label}}
    </div>
    <input 
      class="se-input__inner" 
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="se-input__suffix" v-if="showSuffix">
      <span class="se-input__close" v-if="clearable && value" @click="clear">x</span>
      <span class="se-input__view" v-if="showPassword" @click="handleType" :style="{color:passwordVisible ? '#409eff' : '#606266'}">o</span>
      <!-- <i class="se-input__icon se-icon-circle-close" v-if="clearable"></i>
      <i class="se-input__icon se-icon-view" v-if="showPassword"></i> -->
    </span>
  </div>
</template>

<script>
export default {
  name: 'SeInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default:''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    labelwidth: {
      type: String,
      default: '100px'
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      console.log(e)
      this.$emit('input',  e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handleType () {
      this.passwordVisible = !this.passwordVisible
      
    }
  }
}
</script>

<style lang="scss">
.se-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: flex;
  .se-input__label{
    height: 40px;
    line-height: 40px;
  }
  .se-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .se-input__suffix{
    position: relative;
    .se-input__close,.se-input__view{
      line-height: 40px;
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
  }
  
}
</style>