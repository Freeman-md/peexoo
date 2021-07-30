<template>
  <div>
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr class="bg-warning--light bg-opacity-10">
          <th :class="theadClasses">
            Title
          </th>
          <th :class="theadClasses">
            Category
          </th>
          <th :class="theadClasses">
            Items
          </th>
          <th :class="theadClasses">
            Date Created
          </th>
          <th :class="theadClasses">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(packageItem, index) in packages"
          :key="index"
        >
            <th class="text-left" :class="tbodyClasses">
              {{ packageItem.title }}
            </th>
            <td :class="tbodyClasses">
              {{ packageItem.category }}
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.items }}
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.createdAt }}
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.amount }}
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'PackageList',
  setup() {
    const store = useStore()
    
    const packages = reactive(store.getters.getPackages)
    const theadClasses = ref('px-6 py-3 text-xs font-semibold text-left uppercase align-middle whitespace-nowrap')
    const tbodyClasses = ref('p-4 px-6 text-xs align-middle whitespace-nowrap')

    return {
      packages,
      theadClasses, 
      tbodyClasses
    }
  }
}
</script>