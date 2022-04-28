<template>
    <nav v-if="items.length"  class="-mb-px overflow-y-auto flex space-x-8" aria-label="Tabs">
      <tabs-item v-for="(item,index) in items" :key="index" :item="item"/>
    </nav>
</template>

<script>
export default {
  props: {
    items:  {
      type: Array,
      default: () => []
    }
  }

}
</script>
