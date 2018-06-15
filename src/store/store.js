import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    usertype: '',
    id: ''
  },
  mutations: {
    login(state, user) {
      state.user = user.user
      state.usertype = user.type
      sessionStorage.setItem('user', user.user)
      sessionStorage.setItem('usertype', user.type)
    },
    logout(state, user) {
      state.user = false
      sessionStorage.clear()
    },
    choiceBasicId(state, id) {
      state.id = id
      sessionStorage.setItem('ncpBasicId', id)
    }
  }
})
