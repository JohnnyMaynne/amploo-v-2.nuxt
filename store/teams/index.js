import Team from "@/models/Team";

export const state = () => ({
  teams: null,
})

export const mutations = {
  setTeams(state, teams) {
    state.teams = teams
  },
}

export const actions = {
  async getTeams ({ commit },page = 1) {
    const teams = await new Team()
      .include(['usersCount'])
      .page(page)
      .get()
    commit('setTeams',teams)
  }
}
