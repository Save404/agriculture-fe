import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import userMj from './modules/userMj'
import userNh from './modules/userNh'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    userMj,
    userNh
  },
  getters
})

export default store
