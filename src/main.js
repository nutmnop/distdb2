// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#navbar',
    router,
    components: { Navbar },
    template: '<Navbar/>'
})

new Vue({
  el: '#navbar2',
  router,
  components: { Navbar2 },
  template: '<Navbar2/>'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})