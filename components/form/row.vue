<template>
  <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
    <div class="block text-sm  text-gray-700 sm:mt-px sm:pt-2">
      {{ title }}
    </div>
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
