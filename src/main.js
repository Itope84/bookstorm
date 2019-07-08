import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import Notifications from 'vue-notification';
import VueCarousel from 'vue-carousel';
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(VueCarousel);

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = "http://bookstorm.local/api"

if(localStorage.getItem('token')) {
  window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
}

Vue.config.productionTip = false;
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
