<template>
  <div class="fixed top-0 z-20 w-full bg-white shadow-md">
    <div class="responsive-container">
      <div class="flex items-center justify-between py-4">

        <!-- Logo -->
        <div class="w-20">
          <img src="/images/peexoo-logo.png" alt="Peexoo" />
        </div>

        <!-- Navigation Links -->
        <div class="items-center justify-between hidden w-1/2 text-xs font-semibold lg:text-sm md:flex text-dark">

          <div class="flex items-center space-x-4">
            <router-link 
              v-for="(link, index) in links"
              :key="index"
              :to="{name: link.name}"
            >
              {{ link.text }}
            </router-link>
          </div>

          <!-- Join Peexoo -->
          <div class="relative">
            <div class="flex items-center space-x-1" @click.prevent="toggleDropdown">
              <span class="cursor-pointer text-warning">Join Peexoo</span>
              <span class="fas fa-caret-down text-secondary"></span>
            </div>
            <transition name="dropdown">
              <div class="absolute right-0 z-10 flex flex-col items-start w-32 px-4 py-3 mt-4 space-y-2 origin-top-right bg-white rounded-md shadow-md " v-if="showDropdown">
              <span class="text-xs transition duration-200 cursor-pointer hover:text-dark">
                Log In
              </span>
              <span class="text-xs transition duration-200 cursor-pointer hover:text-dark">
                Sign Up
              </span>
              </div>
            </transition>
          </div>

        </div>

        <!-- Profile Image -->
        <div class="flex space-x-2 md:hidden" v-show="!profileCard">
          <img class="w-10 h-10 rounded-full" src="/images/profile-picture.png" @click.prevent="toggleProfileCard"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Header',
  setup() {
    const store = useStore()

    const showDropdown = ref(false)
    
    const links = reactive([
      { text: 'Business Manager', name: 'Home' },
      { text: 'MarketPlace', name: 'Home' },
      { text: 'XooCam', name: 'Home' }
    ])

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value
    }

    const toggleProfileCard = () => {
      store.commit('toggleProfileCard')
    }

    return {
      links, 
      showDropdown, 
      toggleDropdown,
      toggleProfileCard
    }
  }
}
</script>

<style scoped>
.dropdown-enter-active {
  transition: ease-out 200ms;
}   
.dropdown-enter-from,
.dropdown-leave-to  {
  transform: scale(0.9);
  opacity: 0;
}
.dropdown-enter-to, 
.dropdown-leave-from{
  transform: scale(1);
  opacity: 100;
}

.dropdown-leave-active {
  transition: ease-in 75ms;
}

</style>