<template>
  <div class="p-4">
    <div class="grid grid-cols-3 gap-4">
      
      <div 
        v-for="(n, index) in 20" 
        :key="index"
        class="relative w-full rounded-lg shadow-md"
        :class="calculateSize(n)"
      >

        <!-- Image Information -->
        <div class="absolute inset-x-0 bottom-0 flex items-center justify-around px-2 py-4 text-sm bg-white">
          
          <!-- Likes -->
          <div class="flex items-center space-x-1">
            <span class="far fa-heart"></span>
            <span>{{ numberWithCommas(n * 367) }}</span>
          </div>

          <!-- Dislikes -->
          <div class="flex items-center space-x-1">
            <span class="relative far fa-heart">
              <span class="absolute w-4 h-0.5 -rotate-45 -right-0.5 top-1 transform bg-black"></span>
            </span>
            <span>{{ numberWithCommas((n * 2.5).toFixed(0)) }}</span>
          </div>

          <!-- Views -->
          <div class="flex items-center space-x-1">
            <span class="relative far fa-eye">
              <span class="absolute w-4 h-0.5 -rotate-45 -right-0.5 top-1.5 transform bg-black"></span>
            </span>
            <span>{{ numberWithCommas(n * 546) }}</span>
          </div>

        </div>
        
        <!-- Image -->
        <img 
          :src="`/images/foods/${n}.jpg`"
          class="object-cover object-center w-full h-full rounded-lg"
        />
        
      </div>

    </div>
  </div>
</template>

<script>
import { useFilters } from '@/composables/filters'
export default {
  name: 'Portfolio',
  setup() {

    const { numberWithCommas } = useFilters()

    const calculateSize = (index) => {
      if (index > 3) {
        if (index <= 5 || (index % 3 === 0 && index !== 6)) {
          return 'row-span-2'
        }
      } else {
        return 'h-56'
      }
    }

    return {
      numberWithCommas,
      calculateSize
    }
  }
}
</script>
