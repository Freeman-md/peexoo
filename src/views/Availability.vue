<template>
  <div class="flex flex-col items-start w-full p-4 space-y-2">
    <litepie-datepicker
      as-single
      use-range
      overlay
      :formatter="formatter"
      v-model="startDate"
    ></litepie-datepicker>
    <div class="flex flex-col space-y-2">
      
      <!-- Item -->
      <div class="flex items-center space-x-10 text-xs">
        <div class="flex items-center space-x-3 text-warning--light">
          <span>&bull;</span>
          <span>Booked</span>
        </div>
        <span class="pl-2.5 text-lighter">Orange shaded dates are booked dates</span>
      </div>

      <!-- Item -->
      <div class="flex items-center space-x-10 text-xs text-lighter">
        <div class="flex items-center space-x-3">
          <span>&bull;</span>
          <span class="text-black">Available</span>
        </div>
        <span>Unshaded dates are free dates</span>
      </div>
      
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import LitepieDatepicker from 'litepie-datepicker';
export default {
  name: 'Availability',
  components: { LitepieDatepicker },
  setup() {
    const startDate = reactive([])
    const formatter = reactive({
      date: 'DD MMM YYYY',
      month: 'MMM'
    })

    return {
      startDate,
      formatter
    }
  }
}
</script>

<style scoped>
button {
  background-color: #F29F05;
  color: white;
}
</style>
