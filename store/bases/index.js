import Base from "@/models/base";

export const state = () => ({
  bases: null,
})

export const mutations = {
  setBases(state, bases) {
    state.bases = bases
  },
}

export const actions = {
  async getBases({ commit },page = 1) {
    const bases = await new Base()
      .page(page)
      .get()
    commit('setBases',bases)
  }
}
