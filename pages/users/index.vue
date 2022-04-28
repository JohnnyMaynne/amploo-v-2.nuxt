<template>
  <layouts-component>

    <template #header>
      <layouts-header title="Users"/>
      <layouts-header>
        <template #title>
          <tabs-component  :items="tabs"/>
        </template>
        <layouts-action/>
      </layouts-header>
    </template>


    <template #body>
        <table-component
            v-if="users"
            @page-change="pageChange"
            @row-click="rowClick"
            bulk-action
            hide-head
            :columns="columns"
            :data="users">
          <template #name="{ row }">
            <table-cells-user :user="row"/>
          </template>
          <template #email="{ row }">
            <table-cells-link :href="`mailto:${row.email}`">{{ row.email }}</table-cells-link>
          </template>
          <template #phone="{ row }">
            <table-cells-link :href="`tel:${row.phone}`">{{ row.phone }}</table-cells-link>
          </template>
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
      },{
        label: 'Team',
        prop: 'team.name',
      },{
        label: 'Email',
        prop: 'email',
      },{
        label: 'Gender',
        prop: 'gender',
      },{
        label: 'Phone',
        prop: 'phone',
      }],

    }
  },

  computed: {
    users() {
      return this.$store.state.users.users
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
      await this.$store.dispatch('users/getUsers',page)
    },
    rowClick(user)  {
      this.$router.push(`/users/${user.id}/personal`)
    }
  },

  async fetch() {
    await this.$store.dispatch('users/getUsers')
  }

}
</script>
