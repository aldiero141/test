import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  access_token: '',
})

export const mutations = {
  ...defaultMutations(state()),
  setAccessToken(state, res) {
    state.access_token = res
  },
}
export const plugins = [EasyAccess()]

export const actions = {
  nuxtServerInit({ commit }) {
    if (this.$cookies.get('access_token')) {
      commit('setAccessToken', this.$cookies.get('access_token'))
      // dispatch('set/access_token', this.$cookies.get('access_token'))
    }
  },
}
