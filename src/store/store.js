import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: false,
    ncpBasicId: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    p: '',
    c: '',
    a: ''
  },
  mutations: {
    login(state, user) {
      state.user = user
      sessionStorage.user = user
    },
    logout(state, user) {
      state.user = false
      sessionStorage.clear()
    },
    choiceBasicId(state, id, c1, c2, c3, c4, p, c, a) {
      state.ncpBasicId = id
      sessionStorage.ncpBasicId = id
      state.c1 = c1
      sessionStorage.c1 = c1
      state.c2 = c2
      sessionStorage.c2 = c2
      state.c3 = c3
      sessionStorage.c3 = c3
      state.c4 = c4
      sessionStorage.c4 = c4
      state.p = p
      sessionStorage.p = p
      state.c = c
      sessionStorage.c = c
      state.a = a
      sessionStorage.a = a
    }
  }
})
