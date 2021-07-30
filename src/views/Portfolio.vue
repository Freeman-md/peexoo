<template>
  <div class="px-4 py-2">
    
    <!-- Sort -->
    <div class="flex items-center justify-end mb-2 space-x-4 text-sm" v-show="profileCard">
      
      <span>Sort By Image Category</span>
      <div class="relative">
        <div class="flex items-center justify-between px-4 py-2 cursor-pointer space-x-7 bg-warning--lighter" @click.prevent="toggleDropdown">
          <span>All</span>
          <span class="text-opacity-50 fa fa-caret-down text-lighter"></span>
        </div>
        <transition name="dropdown">
          <div class="absolute right-0 z-40 flex flex-col items-end w-56 px-4 py-3 mt-0 space-y-2 origin-top-right bg-white rounded-md shadow-md " v-if="showDropdown">
          <span
            v-for="(category, index) in categories"
            :key="index"
            class="text-xs"
            :class="{'text-dark': index !== 1, 'font-semibold': index === 1}"
          >
              {{ category }}
            </span>
          </div>
        </transition>
      </div>

    </div>
    
    <transition name="images">
      <div class="grid grid-cols-3 gap-4">
        <a 
          v-for="(n, index) in 20" 
          :key="index"
          class="relative w-full rounded-lg shadow-md"
          :class="calculateSize(n)"
          :href="`/images/foods/${n}.jpg`"
          data-lightbox="home-images"
        >

          <!-- Like Image -->
          <button class="absolute p-2 text-white rounded-full fas fa-heart bg-warning right-2 top-2"></button>

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
          
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useImages } from '@/composables/images'
import { useFilters } from '@/composables/filters'
export default {
  name: 'Portfolio',
  setup() {
    const store = useStore()

    const showDropdown = ref(true)

    const { images } = useImages()
    const { numberWithCommas } = useFilters()

    const categories = reactive([
      'Food', 'Wedding Images', 'Portraits', 'Model Shots'
    ])

    const calculateSize = (index) => {
      if (index > 3) {
        if (index <= 5 || (index % 3 === 0 && index !== 6)) {
          return 'row-span-2'
        }
      } else {
        return 'h-56'
      }
    }

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const profileCard = computed(() => store.getters.getProfileCard)

    return {
      showDropdown,
      images,
      numberWithCommas,
      calculateSize,
      profileCard,
      categories,
      toggleDropdown
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active{
  transition: ease-out 200ms;
}   
.dropdown-enter-from, .dropdown-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.dropdown-enter-to, .dropdown-leave-from {
  transform: scale(1);
  opacity: 100;
}

.dropdown-leave-active{
  transition: ease-in 75ms;
}

.images-enter-active{
  transition: ease-out 200ms;
}   
.images-enter-from, .dropdown-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.images-enter-to, .dropdown-leave-from {
  transform: scale(1);
  opacity: 100;
}

.images-leave-active{
  transition: ease-in 75ms;
}
</style>
