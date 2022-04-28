import Users from "~/models/user";

export const state = () => ({
  users: null,
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async getUsers ({ commit },page = 1) {
    const users = await new Users()
      .include('team')
      .page(page)
      .get()
    commit('setUsers',users)
  }
}
