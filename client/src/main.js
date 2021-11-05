import Vue from 'vue';
import App from './App.vue';

//Extentions VueJS
import VueRouter from "vue-router";
import store from './store'

//Packages
//->Vuetify
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css';
//->Leaflet
import 'leaflet/dist/leaflet.css';

//Modules
import router from './modules/Router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
