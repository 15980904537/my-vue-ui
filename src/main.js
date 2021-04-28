import Vue from 'vue'
import App from './App.vue'
import myUi from './packages/index'
import Button from './packages/button.vue'
import Icon from './packages/icon.vue'
Vue.config.productionTip = false
Vue.use(myUi)

new Vue({
  render: h => h(App),
}).$mount('#app')