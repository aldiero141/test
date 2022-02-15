import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  user: {},
  token: {},
  loading: false,
})

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]

export const actions = {
  async otpRequest({ dispatch }, payload) {
    dispatch('set/loading', true)
    const res = await this.$axios.post(
      'api-web/api/v1/register/otp/request',
      payload
    )
    dispatch('set/user', res)
    dispatch('set/loading', false)
    return res
  },
  async otpMatch({ dispatch }, payload) {
    dispatch('set/loading', true)
    const res = await this.$axios.post(
      'api-web/api/v1/register/otp/match',
      payload
    )
    dispatch('set/token', res)
    dispatch('set/loading', false)
    return res
  },
}
