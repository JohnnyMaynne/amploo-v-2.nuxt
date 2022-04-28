<template>
  <nav class="px-3 mt-6">
    <div class="space-y-1">
      <sidebar-item v-for="item in menu" :key="item.title" :item="item"/>
    </div>
    <div class="mt-8">
      <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Education</h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
        <sidebar-item  v-for="item in education" :key="item.title" :item="item"/>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Management</h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
        <sidebar-item  v-for="item in management" :key="item.title" :item="item"/>
      </div>
    </div>
    <div class="mt-8">
      <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Other</h3>
      <div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
        <sidebar-item  v-for="item in settings" :key="item.title" :item="item"/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {to: '/', title: 'Dashboard', 'icon': 'dashboard-icon'},
        {to: '/users', title: 'Employees', 'icon': 'users-icon'},
      ],

      education: [
        {to: '/courses', title: 'Courses', 'icon': 'layout-grid-icon'},
        {to: '/bases', title: 'Knowledge base', 'icon': 'database-icon'},
      ],

      management: [
        {to: '/onboarding', title: 'Onboarding', 'icon': 'atom-icon'},
        {to: '/surveys', title: 'Surveys', 'icon': 'checkbox-icon'},
      ],

      settings: [
        {to: '/settings', title: 'Settings', 'icon': 'adjustments-icon'},
      ]
    }
  }

}
</script>
