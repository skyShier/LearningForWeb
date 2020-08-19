<template>
  <transition name="dialog-run">
    <div class="se-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="se-dialog" :style="{width,  marginTop: top}">
        <div class="se-dialog__header">
          <slot name="title">
            <span class="se-dialog__title">{{title}}</span>
          </slot>
          <button class="se-dialog__headerbtn" @click="handleClose">
            <span class="se-icon-close">x</span>
            <!-- <i class="se-icon-close"></i> -->
          </button>
        </div>
        <div class="se-dialog__body">
          <slot></slot>
        </div>
        <div class="se-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SeDialog',
  props: {
    title: {
      type: String,
      default:'提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.se-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, .5);

  .se-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .se-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133
      }
      .se-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .se-icon-close{
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /deep/ .se-button:first-child {
        margin-right: 30px;
      }
    }
  }
}

.dialog-run-enter-active {
  animation: run .3s;
}
.dialog-run-leave-active {
  animation: run .3s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
    transform: translateY(-20px); 
  }
  100% {
    opacity: 1;
    transform: translateY(0); 
  }
}
</style>