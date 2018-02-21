import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

//售卖页面路由代码
import sell from './sell'

Vue.use(VueRouter)
Vue.prototype.$http = Axios

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: {
        name: 'main'
      }
    },
    sell,
  ],
  linkActiveClass: 'tab-active'
})
