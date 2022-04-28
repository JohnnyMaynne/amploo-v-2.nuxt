<template>
  <div v-if="data" class="h-full">
    <table-bulk v-if="selected.length"/>
    <!--  -->
    <table-header v-if="topAction">
      <template #action><slot name="action"/></template>
      <template #filters><slot name="filters"/></template>
    </table-header>
    <!--  -->
    <table-wrap>
      <!--  -->
      <table class="min-w-full divide-y divide-gray-300">
        <thead v-if="columns.length && !hideHead" class="bg-gray-50">
          <tr>
            <th class="w-6"></th>
            <th v-if="bulkAction" scope="col" class="relative w-12 px-4"></th>
            <th v-for="(column,index) in columns" :key="`head + ${index}`" scope="col" :width="column.width" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" >
              {{column.label}}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(item,index) in data.data" :key="`row + ${index}`" @click="rowClick(item)" :class="[ selectedRow(item.id) ? 'bg-gray-100' : 'hover:bg-gray-50 cursor-pointer' ]" class="group">
              <td class="w-6"></td>
              <td v-if="bulkAction" @click.stop :class="[selectedRow(item.id) ? 'opacity-100' : 'opacity-100']" class="relative w-4 pl-3">
                <formulate-input v-model="selected" :value="item.id" type="checkbox" wrapper-class="mb-0"	/>
              </td>
              <td v-for="(column,index) in columns" :key="`cell  + ${index}`" :width="column.width" class="whitespace-nowrap px-3 py-3.5 text-sm text-gray-500">
                <slot :name="column.prop" :row="item">
                  <span class="text-gray-500">{{itemValue(item, column)}}</span>
                </slot>
              </td>
            </tr>
        </tbody>
      </table>
      <app-pagination @current-change="pageChange" :current="data.current_page" :total="data.total"  :perPage="data.per_page" />
    </table-wrap>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
    },
    hideHead: {
      type: Boolean,
      default: false
    },
    bulkAction: {
      type: Boolean,
      default: false
    },
    topAction: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      selected: []
    }
  },

  methods: {
    itemValue (item, column) {
      return column.prop.split('.').reduce((o,i)=> o[i], item)
    },
    selectedRow(id) {
      return this.selected.includes(id)
    },
    rowClick(value) {
        this.$emit('row-click',value)
    },
    pageChange(value) {
        this.$emit('page-change',value)
    },
  },

}
</script>
