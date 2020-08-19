<template>
  <div class="se-form-item">
    <label class="se-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="se-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>

<style lang="scss">
.se-form-item {
  margin-bottom: 25px;
  display: flex;
  .se-form-item__label {
    text-align: right;
    vertical-align: middle;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
    .se-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
}

</style>