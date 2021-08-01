<template>
  <div class="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 bg-black bg-opacity-90">
    <slot name="header"></slot>
    <transition name="modal">
      <slot name="modal" v-if="show"></slot>
    </transition>
    <slot name="footer">
      <div class="flex items-center justify-center pt-6 text-xs text-white">
        Built for free &nbsp;<span class="text-warning--light">&hearts;</span>&nbsp; on Peexoo
      </div>
    </slot>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup(props) {
    const show = computed(() => props.show)

    return {
      show
    }
  }
}
</script>

<style scoped>
.modal-enter-active{
  transition: ease-out 200ms;
}   
.modal-enter-from, .modal-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.modal-enter-to, .modal-leave-from {
  transform: scale(1);
  opacity: 100;
}

.modal-leave-active{
  transition: ease-in 75ms;
}
</style>