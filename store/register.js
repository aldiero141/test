export const state = () => ({
  user: {},
  phoneNumber: '',
  loading: false,
  //   error: '',
})

export const actions = {
  async signUp({ commit }, payload) {
    commit('setLoading', true)
    const res = await this.$axios.post('api-web/api/v1/register', payload)
    commit('setUser', res)
    commit('setPhoneNumber', res)
    commit('setLoading', false)
    return res
  },
}

export const mutations = {
  setPhoneNumber(state, res) {
    state.phoneNumber = res.data.data.user.phone
  },
  setUser(state, res) {
    state.user = res.data.data.user
  },
  setLoading(state, res) {
    state.loading = res
  },
  //   setError(state, res) {
  //     state.error = res
  //   },
}
