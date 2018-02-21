// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './common/routes/main'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: VueRouter,
  components: { App },
  template: '<App/>'
})
