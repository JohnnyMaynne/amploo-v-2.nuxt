<template>
  <div class="px-3 relative inline-block text-left">
      <nuxt-link to="profile" type="button" :class="[active ? 'bg-white' : 'hover:bg-gray-200']" class="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left  text-gray-700  focus:outline-none" aria-expanded="false" aria-haspopup="true">
            <span class="flex w-full justify-between items-center">
              <span class="flex min-w-0 items-center justify-between space-x-3">
                <img class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="">
                <span class="flex-1 flex flex-col min-w-0">
                  <span class="text-gray-900 text-sm truncate">{{  $auth.user.name }}</span>
                  <span class="text-gray-500 text-sm truncate">@{{  $auth.user.email }}</span>
                </span>
              </span>
            </span>
      </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    active() {
      return 'profile' === this.$route.name
    },
  }
}
</script>
