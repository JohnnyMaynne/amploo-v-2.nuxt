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
        <form-row-title title="Balance Leave" subtitle="This information will be displayed publicly so be careful what you share."/>
      </template>
      <template #filters>
        <app-button>Add new</app-button>
      </template>
    </table-component>
  </users-settings-layout>
</template>

<script>
import UserLeaveBalance from "@/models/user-leave-balance";

export default {
  data() {
    return {
      data: null,
      columns: [{
        label: 'Leave',
        prop: 'leave',
      },{
        label: 'Current',
        prop: 'Current',
      },{
        label: 'Available',
        prop: 'available',
      },{
        label: 'Scheduled',
        prop: 'scheduled',
      },{
        label: 'From',
        prop: 'started_at',
      },{
        label: 'To',
        prop: 'finished_at',
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
      this.data = await UserLeaveBalance.page(page).find(this.$route.params.show)
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
