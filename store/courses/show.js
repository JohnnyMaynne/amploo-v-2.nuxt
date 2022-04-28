import Users from "~/models/user";

export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async getUser ({ commit }, id) {
    const user = await Users.find(id)
    commit('setUser',user)
  },
}
