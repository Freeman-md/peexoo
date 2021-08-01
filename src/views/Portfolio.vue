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
    <PortfolioImages 
      :profileCard="profileCard" 
      @setActiveImage="setActiveImage" 
    />

    <!-- Modal -->
    <PortfolioImagesModal 
      :activeImage="activeImage" 
      :showModal="showModal"
      @toggleModal="toggleModal" 
      @changeImage="changeImage"
    />

  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'

import Modal from '@/components/Modal'
import PortfolioImages from '@/components/PortfolioImages'
import PortfolioImagesModal from '@/components/PortfolioImagesModal'
export default {
  name: 'Portfolio',
  components: { Modal, PortfolioImages, PortfolioImagesModal },
  setup() {
    const store = useStore()
  
    const showDropdown = ref(true)
    const showModal = ref(false)
    const activeImage = ref(null)

    const categories = reactive([ 'Food', 'Wedding Images', 'Portraits', 'Model Shots' ])

    const profileCard = computed(() => store.getters.getProfileCard)

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const toggleModal = () => {
      showModal.value = !showModal.value
    }

    const setActiveImage = ({image}) => {
      activeImage.value = image
      toggleModal()
    }

    const changeImage = ({image}) => {
      activeImage.value = image
    }

    return { showDropdown, toggleDropdown, profileCard, categories, showModal, toggleModal, activeImage,changeImage, setActiveImage }
  }
}
</script>

<style scoped>
.dropdown-enter-active {
  transition: ease-out 200ms;
}   
.dropdown-enter-from, .dropdown-leave-to  {
  transform: scale(0.9);
  opacity: 0;
}
.dropdown-enter-to, .dropdown-leave-from {
  transform: scale(1);
  opacity: 100;
}
.dropdown-leave-active {
  transition: ease-in 75ms;
}
</style>