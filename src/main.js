// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './common/routes/main'
import Axios from 'axios'

// CSS 引入
import '../static/css/base.less'
import '../static/css/icon.less'

Vue.config.productionTip = false

Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  router: VueRouter,
  components: { App },
  template: '<App/>'
})
