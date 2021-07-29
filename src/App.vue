<template>
  <div>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/shared/Header.vue'
export default {
  name: 'App',
  components: { Header, }
}
</script>
