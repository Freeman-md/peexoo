<template>
  <div class="absolute w-1/4 px-6 pt-8 pb-6 bg-white border rounded-md border-opacity-40 border-warning top-7 left-7">

    <button 
      class="absolute text-xs font-medium top-2 right-2 text-warning"
      @click.prevent="toggleProfileCard"
    >
      Hide
    </button>
    
    <div class="flex flex-col space-y-4">

      <!-- Profile Picture -->
      <div class="w-24 h-24 mx-auto rounded-full">
        <img src="/images/profile-picture.png" class="object-center w-24 h-24 rounded-full" @click.prevent="toggleModal" />
      </div>

      <!-- Name and Bio -->
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-semibold">Ekemini Mark</h1>
        <p class="text-xs text-center">
          I’m a wedding and portrait photographer based in Lagos, Nigeria. I’ve been shooting weddings since I was in high school (before I ever had my driver’s license!).
        </p>
      </div>

      <!-- Account Activities Summary -->
      <div class="flex justify-between space-x-6">
        
        <!-- Views -->
        <div class="flex flex-col items-start">
          <span class="text-sm font-semibold">22.1K</span>
          <span class="text-xs text-dark">Total Views</span>
        </div>

        <!-- Likes -->
        <div class="flex flex-col items-start">
          <span class="flex items-center space-x-1">
            <span class="far fa-heart text-secondary"></span>
            <span class="text-sm font-semibold">13.1K</span>
          </span>
          <span class="text-xs text-dark">Total Likes</span>
        </div>

        <!-- Camera Lens -->
        <div class="flex flex-col items-start">
          <span class="text-sm font-semibold">Sony 92J</span>
          <span class="text-xs text-dark">Camera Lens</span>
        </div>

      </div>

      <!-- Category -->
      <div class="flex items-center justify-between space-x-2 text-xs">
        <span class="text-dark">Category</span>
        <div>
          <span 
            v-for="(category, index) in categories"
            :key="index"
          >
            &bull; {{ category }}
          </span>
        </div>
      </div>

      <!-- Location -->
      <div class="flex items-start justify-start space-x-4 text-xs">
        <span class="text-dark">Location</span>
        <span>Lagos, Nigeria</span>
      </div>

      <!-- Email -->
      <div class="flex items-center justify-center pt-6 space-x-1 text-xs text-center">
        <span class="transform rotate-180 fas text-warning--light fa-share-alt"></span>
        <router-link to="/">www.peexoo.ai/anijohnson</router-link>
      </div>

      <!-- Social Media Accounts - Book -->
      <div class="flex items-center justify-center space-x-4">
        <span
          v-for="(social, index) in socials"
          :key="index"
          class="flex items-center justify-center w-6 h-6 text-xs rounded-full bg-lighter"
          :class="social"
        >
        </span>
        <router-link to="/" class="px-4 py-1.5 text-xs text-white bg-warning--light rounded-3xl">Book Now</router-link>
      </div>

      <!-- Built By -->
      <div class="flex items-center justify-center pt-6 text-xs">
        Built &nbsp;<span class="text-warning--light">&hearts;</span>&nbsp; on Peexoo
      </div>

    </div>

    <transition name="modalBox">
      <Modal v-show="showModal" :show="showModal">
      
        <template v-slot:header>
          <button 
            class="px-4 py-1.5 mt-4 text-xs text-white bg-white bg-opacity-10 rounded-3xl"
            @click.prevent="toggleModal"
          >
            Close Image
          </button>
        </template>
        
        <template v-slot:modal>
          <img src="/images/profile-picture-large.png" class="border-none rounded-full outline-none w-72 h-72" />
        </template>
      
      </Modal>
    </transition>

  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import Modal from '@/components/Modal'
export default {
  name: 'ProfileCard',
  components: { Modal, },
  setup() {
    const store = useStore()
    
    const showModal = ref(false)

    const categories = reactive(['Food', 'Portrait', 'Wedding', 'Model'])
    const socials = reactive(['fab fa-facebook-f', 'fab fa-instagram', 'fas fa-envelope'])

    const toggleProfileCard = () => {
      store.commit('toggleProfileCard')
    }

    const toggleModal = () => {
      showModal.value = !showModal.value
    }

    return {
      categories,
      socials,
      toggleProfileCard,
      showModal,
      toggleModal
    }
  }
}
</script>


<style scoped>
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