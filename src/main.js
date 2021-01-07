import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from "vt-notifications"

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
