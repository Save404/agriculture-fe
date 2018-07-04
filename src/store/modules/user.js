import { nhLogin } from '@/api/nh'
import { mjLogin } from '@/api/mj'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    phone: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
      sessionStorage.setItem('username', name)
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
      sessionStorage.setItem('userphone', phone)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
      sessionStorage.setItem('userroles', roles)
    }
  },

  actions: {
    // 农户登录
    NhLogin({ commit }, userInfo) {
      const username = userInfo.telephone.trim()
      return new Promise((resolve, reject) => {
        nhLogin(username, userInfo.password).then(response => {
          //const data = response.data
          setToken(username) //(data.token)
          //commit('SET_TOKEN', data.token)
          commit('SET_PHONE', username)
          commit('SET_NAME', username)
          commit('SET_ROLES', ['NH'])
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 买家登录
    MjLogin({ commit }, userInfo) {
      const username = userInfo.telephone.trim()
      return new Promise((resolve, reject) => {
        mjLogin(username, userInfo.password).then(response => {
          //const data = response.data
          setToken(username) //(data.token)
          //commit('SET_TOKEN', data.token)
          commit('SET_PHONE', username)
          commit('SET_NAME', username)
          commit('SET_ROLES', ['MJ'])
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      commit('SET_PHONE', sessionStorage.getItem('userphone'))
      commit('SET_NAME', sessionStorage.getItem('username'))
      commit('SET_ROLES', sessionStorage.getItem('userroles'))
    },
    /*
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_PHONE', data.phone)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },*/

    // 登出
    LogOut({ commit, state }) {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_NAME', '')
      commit('SET_PHONE', '')
      removeToken()
      /*
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })*/
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
