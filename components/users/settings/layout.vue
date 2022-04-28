<template>
  <layouts-component v-if="user">

    <template #header>
      <layouts-header hide-action>
        <template #title>
            <app-breadcrumbs :items="breadcrumbs"/>
        </template>
      </layouts-header>

      <layouts-header hide-action>
        <template #title>
          <tabs-component :items="tabs"/>
        </template>
      </layouts-header>
    </template>

    <formulate-form class="space-y-8 divide-y divide-gray-200 pb-12">
      <div class="space-y-10">
        <slot/>
      </div>
    </formulate-form>

  </layouts-component>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return [
        {title: 'Users',  href:  '/users' },
        {title: this.user?.name,  href:  '#' },
      ]
    },
    user() {
      return this.$store.state.users.show.user
    },
    tabs() {
      return [
        {title: 'Personal', to: `/users/${this.$route.params.show}/personal`, active: () => this.$route.name === 'users-show-personal'},
        {title: 'Education', to: `/users/${this.$route.params.show}/education`, active: () => this.$route.name === 'users-show-education' },
        {title: 'Work', to: `/users/${this.$route.params.show}/work`, active: () => this.$route.name === 'users-show-work' },
        {title: 'Dependents', to: `/users/${this.$route.params.show}/dependents`, active: () => this.$route.name === 'users-show-dependents' },
        {title: 'Leave', to: `/users/${this.$route.params.show}/leave`, active: () => this.$route.name === 'users-show-leave' },
        {title: 'Documents', to: `/users/${this.$route.params.show}/documents`, active: () => this.$route.name === 'users-show-documents' },
        {title: 'Payroll', to: `/users/${this.$route.params.show}/payroll`, active: () => this.$route.name === 'users-show-payroll' },
        {title: 'Permission ', to: `/users/${this.$route.params.show}/permission`, active: () => this.$route.name === 'users-show-permission' },
        {title: 'Survays ', to: `/users/${this.$route.params.show}/survays`, active: () => this.$route.name === 'users-show-survays' },
        {title: 'Courses ', to: `/users/${this.$route.params.show}/courses`, active: () => this.$route.name === 'users-show-courses' },
        {title: 'Tasks ', to: `/users/${this.$route.params.show}/tasks`, active: () => this.$route.name === 'users-show-tasks' },
      ]
    }
  },
  async fetch() {
    await this.$store.dispatch('users/show/getUser',this.$route.params.show)
  }
}
</script>
