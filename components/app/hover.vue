<template>
   <button @click="$emit('click')" :class="[colorClass,roundedClass]" class="flex items-center space-x-1 rounded-md cursor-pointer transition-all text-xs ">
    <component class="w-4 h-4" :is="icon"/>
    <span v-if="title" class="flex items-center space-x-1">
         <span> {{ title }} </span>
        <slot name="append"/>
     </span>
   </button>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    rounded: Boolean,
    active: Boolean,
    selected: Boolean,
    icon: String,
    size: String,
  },

  computed: {
    colorClass() {
      if (this.selected) return 'bg-blue-500 text-white'

      switch (this.type) {
        case 'red':
          return this.active ? 'bg-red-200 text-red-600' : 'text-red-500 hover:bg-red-100 hover:text-red-600'
        default:
          return this.active ? 'bg-gray-200 text-gray-600' : 'text-gray-500 hover:bg-gray-200 hover:text-gray-600'

      }
    },
    roundedClass() {
        return this.rounded
          ? 'flex items-center justify-center rounded-full ' + (this.size ?? 'w-6 h-6')
          : 'px-2 py-1'
      },
    },
}
</script>
