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
        <form-row-title title="Work Information" subtitle="This information will be displayed publicly so be careful what you share."/>
      </template>
      <template #filters>
        <app-button>Add new</app-button>
      </template>
    </table-component>
  </users-settings-layout>
</template>

<script>
import UserWork from "@/models/user-work";

export default {
  data() {
    return {
      data: null,
      columns: [{
        label: 'Previous Company',
        prop: 'company',
      }, {
        label: 'Job title',
        prop: 'job',
      },{
        label: 'From',
        prop: 'started_at',
      },{
        label: 'To',
        prop: 'finished_at',
      },{
        label: 'Job description',
        prop: 'description',
      },],
    }
  },

  computed: {
    user() {
      return this.$store.state.users.show.user
    }
  },

  methods:  {
    async getEducation(page = 1) {
      this.data = await UserWork.page(page).find(this.$route.params.show)
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
