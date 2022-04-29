<template>
  <div class="h-14 border-b flex items-center px-5">
    <div class="flex items-center space-x-2">
      <nuxt-link to="/courses" class="cursor-pointer hover:opacity-60 flex items-center space-x-2">
        <chevron-left-icon stroke-width="1.5"/>
        <div>Courses</div>
      </nuxt-link>
      <div class="flex items-center text-gray-400 space-x-2">
        <span>/</span>
        <span>PHP with Laravel for Beginners</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
