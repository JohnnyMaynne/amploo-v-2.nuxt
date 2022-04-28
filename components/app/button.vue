<template>
  <component :disabled="disabled" :is="is" :to="to" :class="[typeClasses,sizeClasses]" class="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    to: String,
    type: String,
    size: String,
    loaded: Boolean,
    disabled: Boolean,
  },

  computed: {
    is() {
      return this.to ? 'nuxt-link' : 'button'
    },
    typeClasses() {
      if(this.disabled)
        return 'border-transparent text-white bg-gray-700 cursor-not-allowed'

      switch (this.type) {
        default:
          return 'border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500'
      }
    },
    sizeClasses() {
      switch (this.size) {
        default:
          return ''
      }
    }
  }

}
</script>
