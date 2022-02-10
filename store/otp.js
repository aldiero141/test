export const state = () => ({
  user: {},
  token: {},
  loading: false,
})

export const actions = {
  async otpRequest({ commit }, payload) {
    const res = await this.$axios.post(
      'api-web/api/v1/register/otp/request',
      payload
    )
    commit('setUser', res)
    return res
  },
  async otpMatch({ commit }, payload) {
    commit('setLoading', true)
    const res = await this.$axios.post(
      'api-web/api/v1/register/otp/match',
      payload
    )
    commit('setToken', res)
    commit('setLoading', false)
    return res
  },
}

export const mutations = {
  setUser(state, res) {
    state.user = res.data.data.user
  },
  setToken(state, res) {
    state.access_token = res.data.data.user.user
  },
  setLoading(state, res) {
    state.loading = res
  },
}
