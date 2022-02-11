export const state = () => ({
  token: {},
  error: false,
  errorMessage: '',
  loading: false,
})

export const actions = {
  signIn({ commit }, payload) {
    return this.$axios
      .post('api-web/api/v1/oauth/sign_in', payload)
      .then((res) => {
        commit('setError', false)
        commit('setToken', res)
        return true
      })
      .catch((error) => {
        commit('setError', true)
        commit('setErrorMessage', error.response.data.error.errors.toString())
        return false
      })
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
  setErrorMessage(state, res) {
    state.errorMessage = res
  },
}
