<template lang="pug">
  #app
    b-form-group
      input
    b-form-group
      input
</template>

<script>
import { BFormGroup } from './index'
export default {
  name: 'app',
  components: {
    BFormGroup
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
