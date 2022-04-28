import Board from "@/models/board";

export const state = () => ({
  boards: null,
})

export const mutations = {
  setBoards(state, boards) {
    state.boards = boards
  },
}

export const actions = {
  async getBoards ({ commit },page = 1) {
    const boards = await new Board()
      .page(page)
      .get()
    commit('setBoards',boards)
  }
}
