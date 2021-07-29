<template>
  <div class="shadow-md">
    <div class="responsive-container">
      <div class="flex items-center justify-between py-4">

        <!-- Logo -->
        <div class="w-20">
          <img src="/images/peexoo-logo.png" alt="Peexoo" />
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center justify-between w-1/2 text-sm font-semibold text-dark">

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
          <div class="flex items-center space-x-1">
            <span class="cursor-pointer text-warning">Join Peexoo</span>
            <span class="fas fa-caret-down text-secondary"></span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Header',
  setup() {
    const links = reactive([
      { text: 'Business Manager', name: 'Home' },
      { text: 'MarketPlace', name: 'Home' },
      { text: 'XooCam', name: 'Home' }
    ])

    return {
      links
    }
  }
}
</script>