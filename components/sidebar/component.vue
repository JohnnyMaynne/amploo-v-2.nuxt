<template>
  <div class="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
    <div class="flex items-center flex-shrink-0 px-6">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow">
    </div>
    <div class="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
       <sidebar-user/>

       <sidebar-search/>

       <sidebar-nav/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
