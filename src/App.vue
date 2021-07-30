<template>
  <div>
    <Header />
    <router-view class="mt-14"/>
  </div>
</template>

<script>
import Header from '@/shared/Header.vue'
export default {
  name: 'App',
  components: { Header, }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
}
</style>