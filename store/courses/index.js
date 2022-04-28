import Course from "@/models/course";

export const state = () => ({
  courses: null,
})

export const mutations = {
  setCourses(state, courses) {
    state.courses = courses
  },
}

export const actions = {
  async getCourses({ commit },page = 1) {
    const courses = await new Course()
      .page(page)
      .get()
    commit('setCourses',courses)
  }
}
