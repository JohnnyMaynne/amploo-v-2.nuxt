<template>
  <app-container class="border-b border-gray-200 py-4 sm:flex sm:items-center sm:justify-between h-14">
    <div class="flex-1 min-w-0">
      <slot name="title">
          <h1 class="text-lg leading-6 text-gray-900 sm:truncate">
            {{ title }}
          </h1>
      </slot>
    </div>
    <div v-if="!hideAction" class="mt-4 flex sm:mt-0 sm:ml-4">
      <slot>
        <layouts-info/>
      </slot>
    </div>
  </app-container>
</template>

<script>
export default {
  props: {
    title: String,
    hideAction: Boolean
  }

}
</script>
