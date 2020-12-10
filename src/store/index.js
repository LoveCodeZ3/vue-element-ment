import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import sidebar from '@/store/modules/sidebar'
const store = new Vuex.Store({
  modules: {
    sidebar
  }
})
export default store

