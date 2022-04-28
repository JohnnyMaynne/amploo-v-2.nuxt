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
       <form-row-title title="Eduaction Information" subtitle="This information will be displayed publicly so be careful what you share."/>
      </template>
      <template #filters>
        <app-button>Add new</app-button>
      </template>
    </table-component>
  </users-settings-layout>
</template>

<script>
import UserEducation from "@/models/user-education";

export default {
  data() {
    return {
      data: null,
      columns: [{
        label: 'School name',
        prop: 'school_name',
      },{
        label: 'Degree',
        prop: 'degree',
      },{
        label: 'Major',
        prop: 'major',
      },{
        label: 'From',
        prop: 'started_at',
      },{
        label: 'To',
        prop: 'finished_at',
      },{
        label: 'GPA',
        prop: 'gpa',
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
      this.data = await UserEducation.page(page).find(this.$route.params.show)
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
