import Users from "~/models/user";

export const state = () => ({
  surveys: null,
})

export const mutations = {
  setSurveys(state, surveys) {
    state.surveys = surveys
  },
}

export const actions = {
  async getSurveys ({ commit },page = 1) {
    const surveys = await new Users()
      .include('team')
      .page(page)
      .get()
    commit('setSurveys',surveys)
  }
}
