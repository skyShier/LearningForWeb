<template>
  <button class="se-button" 
    :class="[`se-button--${type}`,
    `se-button--${size}`,
    {'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled}]"
    :disabled="disabled"
    @click="handleClick">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name:'SeButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }, 
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click',e)
    }
  },
  created () {
    // console.log(this.type)
    // console.log(this.$slots)
  }
}
</script>

<style lang='scss' scoped>
.se-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 400;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus  {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.se-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.se-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.se-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.se-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.se-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
// size
.se-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.se-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.se-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
// size (round)
.se-button--medium.is-round {
  padding: 10px 20px !important;
}
.se-button--small.is-round {
  padding: 9px 15px !important;
}
.se-button--mini.is-round {
  padding: 7px 15px !important;
}
// plain样式
.se-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.se-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus  {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.se-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus  {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.se-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus  {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.se-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus  {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.se-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus  {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
//is-disabled属性
.se-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ebeef5;
}
.se-button--primary.is-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.se-button--success.is-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.se-button--info.is-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.se-button--warning.is-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.se-button--danger.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
//is-disabled属性(is-plain)
.se-button.is-plain.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ebeef5;
}
.se-button--primary.is-plain.is-disabled {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.se-button--success.is-plain.is-disabled {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.se-button--info.is-plain.is-disabled {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.se-button--warning.is-plain.is-disabled {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.se-button--danger.is-plain.is-disabled {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
// round属性
.se-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.se-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 按钮后的文本
.se-button[class*=icon-se-]+span {
  margin-left: 5px;
}
</style>