export const state = () => ({
  user: {},
  phoneNumber: '',
  loading: false,
  error: '',
  errorMessage: '',
})

export const actions = {
  signUp({ commit }, payload) {
    commit('setLoading', true)
    return this.$axios
      .post('api-web/api/v1/register', payload)
      .then((res) => {
        commit('setError', false)
        commit('setUser', res)
        commit('setPhoneNumber', res)
        commit('setLoading', false)
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
  setPhoneNumber(state, res) {
    state.phoneNumber = res.data.data.user.phone
  },
  setUser(state, res) {
    state.user = res.data.data.user
  },
  setLoading(state, res) {
    state.loading = res
  },
  setError(state, res) {
    state.error = res
  },
  setErrorMessage(state, res) {
    state.errorMessage = res
  },
}
