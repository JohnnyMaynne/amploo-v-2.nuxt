<template>
  <users-settings-layout>
    <table-component
      :columns="columns"
      :data="data"
      top-action
      @page-change="getEducation"
      @row-click="rowClick"
    >
      <template #action>
        <form-row-title title="Dependents Information" subtitle="This information will be displayed publicly so be careful what you share."/>
      </template>
      <template #filters>
        <app-button>Add new</app-button>
      </template>
    </table-component>
  </users-settings-layout>
</template>

<script>
import UserWork from "@/models/user-work";
import UserDependent from "@/models/user-dependent";

export default {
  data() {
    return {
      data: null,
      columns: [{
        label: 'Name',
        prop: 'name',
      }, {
        label: 'Dependents',
        prop: 'dependents',
      },{
        label: 'From',
        prop: 'started_at',
      },{
        label: 'Phone',
        prop: 'phone',
      }],
    }
  },

  computed: {
    user() {
      return this.$store.state.users.show.user
    }
  },

  methods:  {
    async getEducation(page = 1) {
      this.data = await UserDependent.page(page).find(this.$route.params.show)
    },
    rowClick(user)  {

    }
  },

  async fetch()
  {
    await this.getEducation()
  }

}
</script>
