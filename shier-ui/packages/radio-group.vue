<template>
  <div class="se-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SeRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>

</style>