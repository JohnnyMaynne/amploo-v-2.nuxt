<template>
  <div class="px-1 flex items-center">
    <div class="separator"></div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    editor: Object,
  }
}
</script>

<style>
.separator {
  background: #ebecf0;
  display: inline-block;
  height: 24px;
  width: 1px;
}
</style>
