// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/common.css'
import './assets/css/own.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
