<template>
    <nav v-if="items.length" class="flex">
      <ol role="list" class="flex items-center">
        <li v-for="(item,index) in items" :key="index">
          <div class="flex items-center">
            <template v-if="index !== items.length - 1">
              <nuxt-link :to="item.href" class="text-lg  leading-6  text-gray-900">{{ item.title }}</nuxt-link>
              <div class="flex-shrink-0 h-5 w-6 text-gray-300 flex items-center justify-center">/</div>
            </template>
            <div v-else class="text-lg  leading-6  text-gray-500">{{ item.title }}</div>
          </div>
        </li>
      </ol>
    </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
  }

}
</script>
