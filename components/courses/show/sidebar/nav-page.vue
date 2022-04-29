<template>
  <div>
    <div class="select-none group text-slate-600 flex items-center text-sm space-x-2 -mx-3 px-3 h-[30px] rounded-md cursor-pointer hover:bg-gray-200 transition">
      <component :is="`icon-${icon}`" style="bottom: 1px;"  class="relative"/>
      <div class="flex-1">Domain HTTPS</div>
      <icon-dots class="opacity-0 group-hover:opacity-100 transition"/>
<!--      <icon-plus class="opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-50 transition transform  ml-12"/>-->
    </div>
  </div>
</template>

<script>

import IconPage from "~/static/icons/page.svg?inline";
import IconQuestion from "~/static/icons/question.svg?inline";
import IconDots from "~/static/icons/dots.svg?inline";
import IconPlus from "~/static/icons/plus.svg?inline";

export default {
  components: {IconPage, IconQuestion, IconDots, IconPlus},

  props: {
    icon:  {
      type: String,
      default: 'page'
    }
  },
}
</script>
