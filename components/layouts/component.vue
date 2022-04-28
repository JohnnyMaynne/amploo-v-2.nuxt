<template>
  <main class="flex-1 h-screen flex flex-col">
    <slot name="header"/>
    <slot name="body">
      <div class="flex-1 pt-6 pb-16 px-4 sm:px-6 lg:px-8">
        <slot/>
      </div>
    </slot>
    <slot name="footer"/>
  </main>
</template>

<script>
export default {

}
</script>
