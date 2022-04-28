<template>
  <div class="flex items-center justify-between pb-5">
    <div class="flex items-center space-x-3">
      <slot name="action"></slot>
    </div>

    <div class="flex items-center space-x-3">
      <slot name="filters"> </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
