<template>
  <layouts-component>

    <template #header>
      <layouts-header title="Courses"/>
    </template>

    <grid-component v-if="courses">
      <grid-card
        v-for="course in courses.data"
        :key="course.id"
        :title="course.name"
        :info="new Date(course.created_at).toDateString()"
        :to="`/courses/${course.id}`"
      >
        <logo/>
      </grid-card>
    </grid-component>

  </layouts-component>
</template>

<script>
import Logo from "~/static/icons/course.svg?inline";


export default {
  components: {Logo},

  computed: {
    courses() {
      return this.$store.state.courses.courses
    },
  },


  async fetch() {
    await this.$store.dispatch('courses/getCourses')
  }

}
</script>
