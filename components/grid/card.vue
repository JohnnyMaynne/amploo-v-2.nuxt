<template>
    <component :is="is" :to="to" class="cursor-pointer group cursor-pointer hover:bg-gray-50 hover:border-gray-300 shadow-sm border rounded-md p-4 pr-2.5 min-h-[140px] flex flex-col">
      <div v-if="$slots.default" class="flex justify-between mb-4">
        <slot/>
      </div>
      <div class="text-base text-gray-900 flex-1 mb-2.5">{{ title }}</div>
      <div class="text-xs font-normal text-gray-500">{{ info }}</div>
    </component>
</template>

<script>
export default {
    props: {
      to: String,
      title: String,
      info: String,
    },

    computed: {
      is() {
        return this.to ? 'nuxt-link' : 'div'
      }
    }
}
</script>
