export const state = () => ({
    users: {},
    phoneNumber: '',
})
  
export const actions = {
    async signUp({commit}, user) {
        const response = await this.$axios.post("api-web/api/v1/register", user)
        commit('setPhoneNumber', response)
        return response
    }    
}

export const mutations = {
   setPhoneNumber(state, response) {
        state.phoneNumber = response.data.data.user.phone
   },
   setUser(state, response) {
       state.users = response.data.data.user
   }
}
