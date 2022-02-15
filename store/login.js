import EasyAccess, { defaultMutations } from 'vuex-easy-access'
export const state = () => ({
  token: {},
  access_token: '',
  error: false,
  errorMessage: '',
  loading: false,
})

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]

export const actions = {
  signIn({ dispatch }, payload) {
    return this.$axios
      .post('api-web/api/v1/oauth/sign_in', payload)
      .then((res) => {
        this.$cookies.set('access_token', res.data.data.user.access_token)
        dispatch('set/error', false)
        dispatch('set/access_token', res.data.data.user.access_token)
        return true
      })
      .catch((error) => {
        dispatch('set/error', true)
        dispatch(
          'set/errorMessage',
          error.response.data.error.errors.toString()
        )
        return false
      })
  },
}
