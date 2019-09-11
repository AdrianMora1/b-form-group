import Vue from 'vue'
import App from './App.vue'
import { b-form-group } from './index'

Vue.config.productionTip = false
Vue.use(b-form-group)

new Vue({
  components: { b-form-group },
  render: h => h(App)
}).$mount('#app')
