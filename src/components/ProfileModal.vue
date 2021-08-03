<template>
  <transition name="modalBox">
    <Modal v-show="show" :show="show">
    
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
</template>

<script>
import {computed} from 'vue'
import Modal from '@/components/Modal'
export default {
  name: 'ProfileModal',
  components: {Modal,},
  props: ['showModal'],
  setup(props, ctx) {
    const show = computed(() => props.showModal)

    const toggleModal = () => {
      ctx.emit('closeModal')
    }

    return {
      show,
      toggleModal
    }
  }
}
</script>