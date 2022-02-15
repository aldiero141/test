import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  user: {},
  phoneNumber: '',
  loading: false,
  error: '',
  errorMessage: '',
})

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]

export const actions = {
  signUp({ dispatch }, payload) {
    dispatch('set/loading', true)
    return this.$axios
      .post('api-web/api/v1/register', payload)
      .then((res) => {
        dispatch('set/error', false)
        dispatch('set/user', res.data.data.user)
        dispatch('set/phoneNumber', res.data.data.user.phone)
        dispatch('set/loading', false)
        return true
      })
      .catch((error) => {
        dispatch('set/error', false)
        dispatch(
          'set/errorMessage',
          error.response.data.error.errors.toString()
        )
        return false
      })
  },
}
