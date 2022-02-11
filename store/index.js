import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => {
  return {
    auth: '',
  }
}

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]

export const getters = {
  auth: (state) => {
    return state.auth
  },
}

// export const mutations = {
//   setAuth(state, auth) {
//     state.auth = auth
//   },
// }

export const actions = {
  // nuxtServerInit({ commit }) {
  //   let token = null
  //   if (this.$cookies.get('access_token')) {
  //     const parsed = this.$cookies.get('access_token')
  //     token = parsed.token
  //   }
  //   commit('setAuth', token)
  // },
}
