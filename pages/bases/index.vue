<template>
  <layouts-component>

    <template #header>
      <layouts-header title="Bases"/>
    </template>

    <grid-component v-if="bases">
      <grid-card
        v-for="base in bases.data"
        :key="base.id"
        :title="base.name"
        :info="new Date(base.created_at).toDateString()"
        :to="`/courses/${base.id}`"
      >
      <logo/>
      </grid-card>
    </grid-component>

  </layouts-component>
</template>

<script>
import Logo from "~/static/icons/base.svg?inline";


export default {
  components: {Logo},

  computed: {
    bases() {
      return this.$store.state.bases.bases
    },
  },


  async fetch() {
    await this.$store.dispatch('bases/getBases')
  }

}
</script>
