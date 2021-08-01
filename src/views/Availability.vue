<template>
  <div class="flex flex-col items-start w-full p-4 space-y-2">
    <DatePicker v-model="date" is-range color="orange" :attributes="attrs" />
    
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
import { DatePicker } from 'v-calendar';
export default {
  name: 'Availability',
  components: { DatePicker },
  setup() {
    const date = reactive(new Date())
    const attrs = reactive([
      {
        highlight: {
          start: { 
            fillMode: 'solid', 
            style: {
              background: '#F29F05'
            },
            contentStyle: {
              color: 'white'
            }, 
          },
          base: { 
            fillMode: 'solid', 
            style: {
              background: '#F29F05'
            },
            contentStyle: {
              color: 'white'
            }, 
          },
          end: { 
            fillMode: 'solid', 
            style: {
              background: '#F29F05'
            },
            contentStyle: {
              color: 'white'
            }, 
          },
        },
        dates: { start: new Date(2021, 7, 11), end: new Date(2021, 7, 19) },
      },
      {
        key: 'today',
        highlight: {
          style: {
            background: '#F29F05'
          },
          contentStyle: {
            color: 'white'
          },
          contentClass: 'italic',
        },
        dates: new Date(),
      },
    ])

    return {
      attrs,
      date
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
