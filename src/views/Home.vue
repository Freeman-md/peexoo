<template>
  <div class="p-4">
    <div class="relative w-full h-screen">
      <div class="w-full h-32 bg-center bg-no-repeat bg-cover rounded-md bg-home-background"></div>

      <ProfileCard />

    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
export default {
  name: 'Home',
  components: { ProfileCard, }
}
</script>
