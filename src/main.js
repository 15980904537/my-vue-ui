import Vue from 'vue'
import App from './App.vue'
import myUi from './packages/index'
import Plug from './packages/plug'
import Directive from './packages/directive'
Vue.config.productionTip = false
Vue.use(myUi)
Vue.use(Plug)
// Vue.use(Directive)

new Vue({
  render: h => h(App),
}).$mount('#app')