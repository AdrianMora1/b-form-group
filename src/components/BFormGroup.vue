<template lang="pug">
  fieldset.form-group
    div(role="group")
      slot
</template>

<script>
export default {
  name: 'BFormGroup'
}
</script>
<style lang="stylus">
.form-group
  margin-bottom 1rem
  min-width 0
  padding 0
  border 0
</style>
