<template>
  <div class="p-4">
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
          @click.prevent="goToDetails(packageItem.id)"
          class="transition duration-200 cursor-pointer drop-shadow-md hover:bg-lighter"
        >
            <td class="text-left" :class="tbodyClasses">
              {{ packageItem.title }}
            </td>
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
              {{ formatNumber(packageItem.amount) }}
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useFilters } from '@/composables/filters'
export default {
  name: 'PackageList',
  setup() {
    const store = useStore()
    const router = useRouter()

    const { formatNumber } = useFilters()
    
    const packages = reactive(store.getters.getPackages)
    const theadClasses = ref('px-6 py-3 text-xs font-semibold tracking-wider text-left align-middle whitespace-nowrap')
    const tbodyClasses = ref('p-4 px-6 text-xs align-middle whitespace-nowrap')

    const goToDetails = (id) => router.push({name: 'Pricing Package', params: { id }})

    return {
      packages,
      theadClasses, 
      tbodyClasses,
      goToDetails,
      formatNumber
    }
  }
}
</script>