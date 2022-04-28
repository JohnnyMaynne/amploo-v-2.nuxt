<template>
    <div :class="isClasses">
      <slot/>
    </div>
</template>

<script>
export default {
  props: {
    is: 'String'
  },

  computed: {
    isClasses() {
      switch (this.is) {
          case 'h1':
            return 'text-6xl/leading-none/font-normal'
          case 'h2':
            return 'text-6xl/leading-none/font-normal'
          case 'h3':
            return 'text-6xl/leading-none/font-normal'
          case 'h4':
            return 'text-6xl/leading-none/font-normal'
          case 'h5':
            return 'text-6xl/leading-none/font-normal'
          case 'h6':
            return 'text-6xl/leading-none/font-normal'
          default:
      }
    }
  }
}
</script>
