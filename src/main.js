// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
import '@/assets/common.css'
axios.defaults.baseURL = 'http://193.112.200.223:4000'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
