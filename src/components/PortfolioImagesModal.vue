<template>
  <transition name="modalBox">
    <Modal v-show="show" :show="show" @click.self="toggleModal">
      
      <template v-slot:modal>
        <div class="flex flex-col items-center justify-center px-4 pt-6 space-y-16 sm:px-0" @click.self="toggleModal">

          <!-- Active Image -->
          <div class="flex flex-col items-center sm:items-start md:3/5 sm:3/4 lg:w-1/2 rounded-t-md rounded-r-md h-96">
            <img :src="image" class="object-cover object-center w-full h-full rounded-t-md rounded-r-md" />
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
              :class="{'scale-125 border border-warning--light': image === `/images/foods/${n}.jpg`}"
              @click.prevent="changeImage(`/images/foods/${n}.jpg`)"
            />
          </div>
          
        </div>
      </template>
    
    </Modal>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useFilters } from '@/composables/filters'

import Modal from '@/components/Modal'
export default {
  name: 'PortfolioImagesModal',
  components: { Modal },
  props: {
    showModal: {
      type: Boolean, 
      required: true,
      default: false
    },
    activeImage: {
      required: true
    }
  },
  setup(props, ctx) {
    const { numberWithCommas } = useFilters()
    
    const show = computed(() => props.showModal)
    const image = computed(() => props.activeImage)

    const toggleModal = () => {
      ctx.emit('toggleModal')
    }

    const changeImage = (image) => {
      ctx.emit('changeImage', {image})
    }

    return {
      show,
      image,
      toggleModal,
      changeImage,
      numberWithCommas
    }
  }
}
</script>

<style>
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