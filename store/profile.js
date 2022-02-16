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
      .get('api-web/api/v1/profile/me')
      .then((res) => {
        dispatch('set/error', false)
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
  setProfile({ dispatch }, payload) {
    return this.$axios
      .post('api-web/api/v1/profile', payload, {
        headers: { Authorization: this.$cookies.get('access_token') },
      })
      .then((res) => {
        dispatch('set/user', res.data.data.user)
        dispatch('set/error', false)
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
  setCareer({ dispatch }, payload) {
    return this.$axios
      .post('api-web/api/v1/profile/career', payload, {
        headers: { Authorization: this.$cookies.get('access_token') },
      })
      .then((res) => {
        dispatch('set/user', res.data.data.user)
        dispatch('set/error', false)
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
  setEducation({ dispatch }, payload) {
    return this.$axios
      .post('api-web/api/v1/profile/education', payload, {
        headers: { Authorization: this.$cookies.get('access_token') },
      })
      .then((res) => {
        dispatch('set/user', res.data.data.user)
        dispatch('set/error', false)
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
  setAvatar({ dispatch }, payload) {
    return this.$axios
      .post('api-web/api/v1/uploads/profile', payload, {
        headers: { Authorization: this.$cookies.get('access_token') },
      })
      .then((res) => {
        // dispatch('set/user', res.data.data.user)
        dispatch('setDefaultAvatar', res.data.data.user_picture.id)
        dispatch('set/error', false)
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

  setDefaultAvatar({ dispatch }, payload) {
    return this.$axios
      .post(
        'api-web/api/v1/uploads/profile/default',
        { id: payload },
        {
          headers: { Authorization: this.$cookies.get('access_token') },
        }
      )
      .then((res) => {
        dispatch('set/error', false)
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
  setCover({ dispatch }, payload) {
    return this.$axios
      .post('api-web/api/v1/uploads/cover', payload, {
        headers: { Authorization: this.$cookies.get('access_token') },
      })
      .then((res) => {
        dispatch('set/error', false)
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
