<template>
  <div class="flex space-x-3">
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
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Tabs',
  setup() {
    const tabs = reactive([
      { text: 'Portfolio', routeName: 'Portfolio' },
      { text: 'Availability', routeName: 'Availability' },
      { text: 'Pricing Package', routeName: 'Pricing Package' },
    ])

    return { tabs }
  }
}
</script>