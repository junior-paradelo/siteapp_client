import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Notifications from "vt-notifications"
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Notifications)
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

