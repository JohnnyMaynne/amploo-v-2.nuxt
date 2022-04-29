<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <courses-show-header-component/>
    <div class="flex-1 flex">
      <courses-show-sidebar-component/>
      <div class="flex-1">
        <editor-component/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',

}
</script>
