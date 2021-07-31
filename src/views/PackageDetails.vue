<template>
  <div class="flex flex-col w-full p-4 space-y-5 overflow-x-auto">

    <!-- Title and back button -->
    <div class="flex text-xs">
      <button 
        @click.prevent="goBack" 
        class="text-left text-warning--light"
      >Go back</button>
      <h1 class="flex-grow font-medium text-center capitalize">Beauty Campaign</h1>
    </div>

    <div class="w-full overflow-x-auto">
      <!-- Table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr class="bg-warning--light bg-opacity-10">
            <th :class="theadClasses">
              Package Item
            </th>
            <th :class="theadClasses">
              Quantity
            </th>
            <th :class="theadClasses">
              Price
            </th>
            <th :class="theadClasses">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr
            v-for="(packageItem, index) in packageItems"
            :key="index"
            class="drop-shadow-md"
          >
            <td class="text-left" :class="tbodyClasses">
              {{ packageItem.packageItem }}
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.quantity }}
            </td>
            <td :class="tbodyClasses">
              <span :class="{'text-light': noPrice(packageItem.price)}">
                {{ packageItem.price }}
              </span>
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.amount }}
            </td>
          </tr>
          

          <hr class="my-2">
          
          
          <!-- Removable / New Items -->
          <tr
            v-for="(packageItem, index) in newItems"
            :key="index"
            class="drop-shadow-md"
          >
            <td class="text-left" :class="tbodyClasses">
              <button class="px-1 mr-1 rounded-md bg-lightest">&times;</button>
              <span>{{ packageItem.packageItem }}</span>
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.quantity }}
            </td>
            <td :class="tbodyClasses">
              <span :class="{'text-light': noPrice(packageItem.price)}">
                {{ packageItem.price }}
              </span>
            </td>
            <td :class="tbodyClasses">
              {{ packageItem.amount }}
            </td>
          </tr>

          <!-- Service Charge -->
          <tr
            class="drop-shadow-md"
          >
            <td class="text-left" :class="tbodyClasses">
              <span class="text-xm">Service Charge</span>
            </td>
            <td :class="tbodyClasses"></td>
            <td :class="tbodyClasses">
              <span class="text-xm">
                {{ formatNumber(serviceCharge.price) }} 
              </span>
            </td>
            <td :class="tbodyClasses">
              <span class="text-xm">{{ formatNumber(serviceCharge.amount) }}</span>
            </td>
          </tr>

          <!-- Total -->
          <tr
            class="drop-shadow-md"
          >
            <td class="text-left text-warning--light" :class="tbodyClasses">
              Total
            </td>
            <td :class="tbodyClasses"></td>
            <td :class="tbodyClasses"></td>
            <td :class="tbodyClasses">
              {{ formatNumber(total) }}
            </td>
          </tr>

          <tr
            class="drop-shadow-md"
          >
            <td class="text-left" :class="tbodyClasses">
              <select class="px-3 py-2 bg-white border rounded-sm shadow-xs text-muted">
                <option>Select Addons</option>
              </select>
            </td>
            <td :class="tbodyClasses"></td>
            <td :class="tbodyClasses"></td>
            <td :class="tbodyClasses">
              <button class="px-3 py-2.5 text-xs text-white bg-warning--light rounded-3xl">Select Package</button>
            </td>
          </tr>

        

        </tbody>
      </table>
    </div>


  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePackageDetailsComposable } from '@/composables/package-details'
import { useFilters } from '@/composables/filters'
export default {
  name: 'PackageDetails',
  setup() {
    const router = useRouter()
    
    const { serviceCharge, newItems, packageItems, noPrice, total } = usePackageDetailsComposable()
    const { formatNumber } = useFilters()
    
    const theadClasses = ref('px-6 py-3 text-xs font-semibold tracking-wider text-left align-middle whitespace-nowrap')
    const tbodyClasses = ref('p-4 px-6 text-xs align-middle whitespace-nowrap')

    const goBack = () => {
      router.back()
    }

    return {
      serviceCharge,
      newItems,
      packageItems,
      theadClasses,
      tbodyClasses,
      goBack,
      noPrice,
      total,
      formatNumber
    }
  }
}
</script>