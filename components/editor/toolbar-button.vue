<template>
    <button @click="item.action" type="button" class="relative z-50 rounded flex h-8 items-center justify-center w-8 hover:bg-gray-100 text-gray-600">
        <component :is="item.icon" class="w-5 h-5"/>
    </button>
</template>

<script>
export default {
  props: {
    item: Object,
    editor: Object,
  }

}
</script>
