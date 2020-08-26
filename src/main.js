import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Routes from './route'

// Resources
Vue.use(VueResource)

// Router
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
