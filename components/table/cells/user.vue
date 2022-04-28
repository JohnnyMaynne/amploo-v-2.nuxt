<template>
    <div class="flex items-center">
      <app-detail :user="user">
        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
      </app-detail>
      <div class="ml-3">{{ user.name }}</div>
    </div>
</template>

<script>
export default {
  props: {
    user: Object
  }

}
</script>
