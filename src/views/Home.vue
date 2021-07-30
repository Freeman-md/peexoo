<template>
  <div class="p-4">
    <div class="relative w-full h-screen">
      <div class="w-full h-32 bg-center bg-no-repeat bg-cover rounded-md bg-home-background"></div>

      <!-- Profile Card -->
      <ProfileCard />
      
      <div class="flex flex-row-reverse pl-16">
        <div class="w-3/4">

          <div class="flex flex-col py-4 space-y-2">
            
            <!-- Tabs -->
            <Tabs />
            
            <!-- Router View for children routes and components -->
            <router-view></router-view>

          </div>
              
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import Tabs from '@/components/Tabs.vue'
export default {
  name: 'Home',
  components: { ProfileCard, Tabs, }
}
</script>
