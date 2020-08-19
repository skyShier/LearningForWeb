<template>
  <div class="se-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SeCheckboxGroup',
  props: {
    value: {
      type: Array,
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>