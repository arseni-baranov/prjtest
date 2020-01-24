import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import profile from './modules/profile'
import general from './modules/general'

const store = () => new Vuex.Store({
  namespaced: true,
  modules: {
    user,
    profile,
    general
  },
  getters: {
    userParent: state => {
      return state.user.parent
    }
  }
}
)

export default store
