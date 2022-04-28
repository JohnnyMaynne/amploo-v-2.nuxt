<template>
  <layouts-component>

    <template #header>
      <layouts-header title="Surveys"/>
    </template>

    <grid-component v-if="surveys">
      <grid-card
        v-for="survey in surveys.data"
        :key="survey.id"
        :title="survey.name"
        :info="new Date(survey.created_at).toDateString()"
        :to="`/surveys/${survey.id}`"
      >
        <logo/>
      </grid-card>
    </grid-component>

  </layouts-component>
</template>

<script>
import Logo from "~/static/icons/survey.svg?inline";


export default {
  components: {Logo},

  computed: {
    surveys() {
      return this.$store.state.surveys.surveys
    },
  },


  async fetch() {
    await this.$store.dispatch('surveys/getSurveys')
  }

}
</script>
