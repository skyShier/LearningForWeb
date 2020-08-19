<template>
  <div class="se-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="se-switch__core" ref="core" :style="{width:width + 'px'}">
      <span class="se-switch__button"></span>
    </span>
    <input class="se-switch__input" type="checkbox" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'SeSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 40
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
    },
    setColor () {
      if( this.activeColor || this.inactiveColor ){
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
      this.$refs.input.checked = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.se-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .se-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .se-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, bacground-color .3s;
    vertical-align: middle;
    .se-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.se-switch.is-checked {
  .se-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .se-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>