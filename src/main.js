import Vue from 'vue'
import App from './App.vue'
import { BFormGroup } from './index'

Vue.config.productionTip = false
Vue.use(BFormGroup)

new Vue({
  render: h => h(App)
}).$mount('#app')
