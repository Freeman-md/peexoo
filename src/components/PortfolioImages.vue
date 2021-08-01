<template>
  <transition name="imageBox">
    <div class="grid sm:grid-cols-3 sm:gap-4 2xs:gap-6 xs:gap-6 xs:grid-cols-2 2xs:grid-cols-2 lg:gap-4 lg:grid-cols-3" :class="{'md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-4': !profileCard}">
      <transition-group 
        appear
        name="images"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <a 
        v-for="(n, index) in 20" 
        :key="index"
        class="relative w-full rounded-lg shadow-md"
        :class="calculateSize(n)"
        @click.prevent="setActiveImage(`/images/foods/${n}.jpg`)"
      >

        <!-- Like Image -->
        <button class="absolute p-2 text-white rounded-full fas fa-heart bg-warning right-2 top-2"></button>

        <!-- Image Information -->
        <div class="absolute inset-x-0 bottom-0 items-center justify-around hidden px-2 py-4 text-sm bg-white sm:flex">
          
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
      </transition-group>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useFilters } from '@/composables/filters'
import { useImages } from '@/composables/images'
export default {
  name: 'PortfolioImages',
  props: ['profileCard'],
  setup(props, ctx) {
    const { numberWithCommas } = useFilters()
    const { calculateSize, setActiveImage, beforeEnter, enter } = useImages(ctx, profileCard)

    const profileCard = computed(() => props.profileCard)

    return {
      numberWithCommas, 
      profileCard, 
      calculateSize, 
      setActiveImage, 
      beforeEnter, 
      enter
    }
  }
}
</script>

<style scoped>
.imageBox-enter-active, 
.images-enter-active {
  transition: ease-out 200ms;
}   
.imageBox-enter-from, 
.imageBox-leave-to,
.images-enter-from, 
.images-leave-to  {
  transform: scale(0.9);
  opacity: 0;
}
.imageBox-enter-to, 
.imageBox-leave-from,
.images-enter-to, 
.images-leave-from {
  transform: scale(1);
  opacity: 100;
} 
.imageBox-leave-active,
.images-leave-active {
  transition: ease-in 75ms;
}
</style>