import { nhLogin, nhLogout, nhGetInfo } from '@/api/nh'
import { getToken, setToken, removeToken } from '@/utils/auth'

const userNh = {
  state: {
    nhtoken: getToken(),
    nhname: '',
    nhavatar: '',
    nhroles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.nhtoken = token
    },
    SET_NAME: (state, name) => {
      state.nhname = name
    },
    SET_AVATAR: (state, avatar) => {
      state.nhavatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.nhroles = roles
    }
  },

  actions: {
    // 登录
    NhLogin({ commit }, userInfo) {
      const username = userInfo.telephone.trim()
      
      return new Promise((resolve, reject) => {
        nhLogin(username, userInfo.password)
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
    NhGetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        nhGetInfo(state.nhtoken).then(response => {
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
    NhLogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        nhLogout(state.nhtoken).then(() => {
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
    NhFedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default userNh
