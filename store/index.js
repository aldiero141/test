import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  //   accessToken:''
})

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]

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
