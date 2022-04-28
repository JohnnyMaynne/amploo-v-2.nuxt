<template>
  <a :href="href" @click.stop class="underline decoration-gray-200 transition hover:text-gray-700 hover:decoration-gray-300 underline-offset-4 decoration-1">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    href: String
  }
}
</script>
