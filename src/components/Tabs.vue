<template>
  <div :class="{'flex-grow text-center justify-center': !profileCard}">
    <div class="flex px-4 space-x-3 bg-white ">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="{name: tab.routeName}"
        class="px-5 py-1.5 text-xs text-center transition duration-200 rounded-3xl hover:bg-warning--light hover:bg-opacity-10"
        active-class="font-semibold bg-opacity-10 bg-warning--light"
      >
        {{ tab.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, computed } from 'vue'
export default {
  name: 'Tabs',
  setup() {
    const store = useStore()
    
    const tabs = reactive([
      { text: 'Portfolio', routeName: 'Portfolio' },
      { text: 'Availability', routeName: 'Availability' },
      { text: 'Pricing Package', routeName: 'Pricing Packages' },
    ])

    const profileCard = computed(() => store.getters.getProfileCard)

    return { tabs, profileCard }
  }
}
</script>