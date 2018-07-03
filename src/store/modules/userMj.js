import { mjLogin, mjLogout, mjGetInfo } from '@/api/mj'
import { getToken, setToken, removeToken } from '@/utils/auth'

const userMj = {
  state: {
    mjtoken: getToken(),
    mjname: '',
    mjavatar: '',
    mjroles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.mjtoken = token
    },
    SET_NAME: (state, name) => {
      state.mjname = name
    },
    SET_AVATAR: (state, avatar) => {
      state.mjavatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.mjroles = roles
    }
  },

  actions: {
    // 登录
    MjLogin({ commit }, userInfo) {
      const username = userInfo.telephone.trim()
      
      return new Promise((resolve, reject) => {
        mjLogin(username, userInfo.password)
        .then(response => {
          //const data = response.data
          //console.log(username)
          setToken(username)
          commit('SET_TOKEN', username)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    MjGetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        mjGetDetail(state.mjtoken).then(response => {
          /*const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)*/
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    MjLogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        mjLogout(state.mjtoken).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    MjFedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default userMj
