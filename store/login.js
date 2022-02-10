export const state = () => ({
  token: {},
  loading: false,
})

export const actions = {
  async signIn({ commit }, payload) {
    const res = await this.$axios
      .post('api-web/api/v1/oauth/sign_in', payload)
      .then((res) => {
        commit('setToken', res)
      })
      .catch((error) => {
        commit('setError', error.response.data.error.errors.toString())
      })
    return res
  },
}

export const mutations = {
  //   setUser(state, res) {
  //     state.user = res.data.data.user
  //   },
  setToken(state, res) {
    state.token = res.data.data.user
  },
  setError(state, res) {
    state.error = res
  },
}
