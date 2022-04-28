<template>
  <component
    :is="is"
    :to="item.to"
    :class="[item.active() ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300']"
    class="cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
    {{ item.title }}
  </component>
</template>

<script>
export default {
  props:  {
    item: Object
  },

  computed: {
    is() {
      return this.item.to ? 'nuxt-link' : 'div'
    }
  }

}
</script>
