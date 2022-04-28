<template>
  <div>
    <div class="text-lg leading-6 font-medium text-gray-900">
      {{ title }}
    </div>
    <div class="mt-1 max-w-2xl text-sm text-gray-500">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  }

}
</script>
