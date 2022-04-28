<template>
  <layouts-component>

    <template #header>
      <layouts-header title="Teams"/>
      <layouts-header>
        <template #title>
          <tabs-component :items="tabs"/>
        </template>
        <layouts-action/>
      </layouts-header>
    </template>


    <template #body>
      <table-component
        v-if="teams"
        @page-change="pageChange"
        @row-click="rowClick"
        hide-head
        :columns="columns"
        :data="teams">
      </table-component>
    </template>

  </layouts-component>
</template>

<script>
export default {

  data() {
    return {
      columns: [{
        label: 'Name',
        prop: 'name',
      }],

    }
  },

  computed: {
    teams() {
      return this.$store.state.teams.teams
    },
    tabs() {
      return [
        {title: 'Employers', to: '/users', active: () => this.$route.name === 'users'},
        {title: 'Teams', to: '/teams', active: () => this.$route.name === 'teams' },
      ]
    }
  },

  methods: {
    async pageChange(page) {
      await this.$store.dispatch('teams/getTeams',page)
    },
    rowClick(user)  {
      this.$router.push(`/teams/${user.id}`)
    }
  },

  async fetch() {
    await this.$store.dispatch('teams/getTeams')
  }

}
</script>
