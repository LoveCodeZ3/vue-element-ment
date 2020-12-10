import Vue from 'vue'
import router from './router'
import './plugins/element'
import App from './App'
import './common/css/global.scss'
import store from './store'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
