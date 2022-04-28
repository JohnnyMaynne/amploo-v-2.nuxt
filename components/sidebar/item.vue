<template>
  <component @click="item.action()" :is="is" :class="[ active ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50']" :to="item.to" class="cursor-pointer group flex items-center px-2 py-2 text-sm rounded-md">
    <component stroke-width="1.5" :class="[active ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500']"  class="mr-2 flex-shrink-0 h-6 w-6 " :is="item.icon"/>
    {{ item.title }}
  </component>
</template>

<script>
export default {
  props: {
    item: Object
  },

  computed: {
    active() {
      return this.item.to === this.$route.path
    },
    is() {
      return this.item.to ? 'nuxt-link' : 'div'
    }
  }
}
</script>
