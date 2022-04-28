<template>
  <div class="fixed bottom-0 right-0 left-64 z-50 bg-gray-100 h-14 border-b flex items-center justify-between space-x-3 shadow-2xl text-sm border-t px-8">
    <div class="flex items-center space-x-3">
      <app-hover rounded :title="$parent.$data.selected.length" type="primary" class="bg-gray-300" />
      <app-hover type="primary" title="Export"/>
      <app-hover type="primary" title="Delete"/>
    </div>

    <app-hover @click="resetSelected" icon="x-icon" rounded type="primary"/>
  </div>
</template>

<script>
export default {
  methods: {
    resetSelected() {
      this.$parent.$data.selected = []
    }
  }


}
</script>
