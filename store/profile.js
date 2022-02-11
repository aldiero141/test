// import EasyAccess, { defaultMutations } from 'vuex-easy-access'

// export const state = () => ({
//   user: {},
// })

// export const mutations = {
//   ...defaultMutations(state),
// }

// export const plugins = EasyAccess()

// export const actions = {
//   getProfile({ dispatch }) {
//     return this.$axios
//       .get('api-web/api/v1/profile/me', {
//         headers: { Authorization: this.$cookies.get('access_token') },
//       })
//       .then((res) => {
//         dispatch('set/user', res.data.data.user)
//         return true
//       })
//       .catch((error) => {
//         console.log(error)
//         return false
//       })
//   },
// }

import EasyAccess, { defaultMutations } from 'vuex-easy-access'
export const state = () => ({
  user: {},
  error: false,
  errorMessage: '',
})
export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]
export const actions = {
  getProfile({ dispatch }) {
    return this.$axios
      .get('api-web/api/v1/profile/me', {
        headers: { Authorization: this.$cookies.get('access_token') },
      })
      .then((res) => {
        dispatch('set/user', res.data.data.user)
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
