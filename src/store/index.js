import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import createNamespacedHelpers from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  plugins: [createNamespacedHelpers({
    paths: ['user.token']
  })]
})

export default store
