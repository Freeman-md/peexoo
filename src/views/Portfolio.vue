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
          <div class="absolute right-0 z-10 flex flex-col items-end w-56 px-4 py-3 mt-0 space-y-2 origin-top-right bg-white rounded-md shadow-md " v-if="showDropdown">
          <span
            v-for="(category, index) in categories"
            :key="index"
            class="text-xs transition duration-200 cursor-pointer hover:text-dark"
            :class="{'text-dark': index !== 1, 'font-semibold': index === 1}"
          >
              {{ category }}
            </span>
          </div>
        </transition>
      </div>

    </div>
    
    <!-- Portfolio Images -->
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

    <!-- Modal -->
    <transition name="modalBox">
      <Modal v-show="showModal" :show="showModal" @click.self="toggleModal">
        
        <template v-slot:modal>
          <div class="flex flex-col items-center justify-center px-4 pt-6 space-y-20 sm:px-0" @click.self="toggleModal">

            <!-- Active Image -->
            <div class="flex flex-col items-center sm:items-start md:3/5 sm:3/4 lg:w-1/2 rounded-t-md rounded-r-md h-96">
              <img :src="activeImage" class="object-cover object-center w-full h-full rounded-t-md rounded-r-md" />
              <!-- Image Information -->
              <div class="flex items-center justify-around px-4 py-3 space-x-8 text-xs bg-white rounded-b-md ">

                <div class="flex space-x-6">
                  <!-- Activities -->
                  <span
                    class="flex items-center justify-center w-6 h-6 text-xs rounded-full far fa-heart bg-lighter"
                  >
                  </span>

                  <span
                    class="relative flex items-center justify-center w-6 h-6 text-xs rounded-full far fa-heart bg-lighter"
                  >
                    <span class="absolute w-4 h-0.5 -rotate-45 right-1 top-2.5 transform bg-black"></span>
                  </span>
                </div>
                
                <!-- Likes -->
                <div class="flex items-center space-x-1">
                  <span class="far fa-heart"></span>
                  <span>{{ numberWithCommas(5349) }}</span>
                </div>

                <!-- Dislikes -->
                <div class="flex items-center space-x-1">
                  <span class="relative far fa-heart">
                    <span class="absolute w-4 h-0.5 -rotate-45 -right-0.5 top-1 transform bg-black"></span>
                  </span>
                  <span>{{ numberWithCommas(23) }}</span>
                </div>

                <!-- Views -->
                <div class="flex items-center space-x-1">
                  <span class="relative far fa-eye">
                    <span class="absolute w-4 h-0.5 -rotate-45 -right-0.5 top-1.5 transform bg-black"></span>
                  </span>
                  <span>{{ numberWithCommas(24023) }}</span>
                </div>

              </div>
            </div>

            <!-- Image Gallery -->
            <div class="flex w-full p-4 space-x-6 overflow-auto">
              <img  
                v-for="(n, index) in 20"
                :key="index"
                :src="`/images/foods/${n}.jpg`"
                class="w-16 h-16 transition duration-200 transform rounded-md cursor-pointer hover:scale-125"
                :class="{'scale-125 border border-warning--light': activeImage === `/images/foods/${n}.jpg`}"
                @click.prevent="changeImage(`/images/foods/${n}.jpg`)"
              />
            </div>
            
          </div>
        </template>
      
      </Modal>
    </transition>

  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useFilters } from '@/composables/filters'
import { gsap } from 'gsap'

import Modal from '@/components/Modal'
export default {
  name: 'Portfolio',
  components: {Modal,},
  setup() {
    const store = useStore()

    const showDropdown = ref(true)
    const activeImage = ref(null)
    const showModal = ref(false)
    
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
        return !profileCard ? 'lg:w-72 h-56' : 'h-56'
      }
    }

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const profileCard = computed(() => store.getters.getProfileCard)

    const setActiveImage = (image) => {
      activeImage.value = image
      toggleModal()
    }

    const changeImage = (image) => {
      activeImage.value = image
    }

    const toggleModal = () => {
      showModal.value = !showModal.value
    }

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "scale(1)";
    }

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
      })
    }

    return {
      showDropdown,      
      numberWithCommas,
      calculateSize,
      profileCard,
      categories,
      toggleDropdown,
      activeImage, 
      setActiveImage,
      showModal, 
      toggleModal,
      changeImage,
      enter, 
      beforeEnter
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active, 
.imageBox-enter-active, 
.images-enter-active {
  transition: ease-out 200ms;
}   
.dropdown-enter-from,
.dropdown-leave-to, 
.imageBox-enter-from, 
.imageBox-leave-to,
.images-enter-from, 
.images-leave-to  {
  transform: scale(0.9);
  opacity: 0;
}
.dropdown-enter-to, 
.dropdown-leave-from, 
.imageBox-enter-to, 
.imageBox-leave-from,
.images-enter-to, 
.images-leave-from {
  transform: scale(1);
  opacity: 100;
}

.dropdown-leave-active, 
.imageBox-leave-active,
.images-leave-active {
  transition: ease-in 75ms;
}

.modalBox-enter-active{
  transition: ease-out 200ms;
}   
.modalBox-enter-from, .modalBox-leave-to {
  opacity: 0;
}
.modalBox-enter-to, .modalBox-leave-from {
  opacity: 100;
}

.modalBox-leave-active{
  transition: ease-in 75ms;
}
</style>