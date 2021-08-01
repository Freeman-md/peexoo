<template>
  <div class="p-4 bg-bg-color">
    <div class="relative w-full h-screen">
      <div class="w-full h-32 bg-center bg-no-repeat bg-cover rounded-md bg-home-background"></div>

      <!-- Profile Card -->
      <transition name="profileCard">
        <ProfileCard v-if="profileCard" />
      </transition>
      
      <div class="flex" :class="{'flex-row-reverse lg:pl-16': profileCard}">
        <div :class="{'lg:w-3/4': profileCard, 'w-full': !profileCard}">

          <div class="flex flex-col py-4 space-y-3">
            
            <!-- Tabs -->
            <div class="sticky z-30 flex items-center justify-between py-2 bg-white top-12" :class="{'px-12 -mx-4': !profileCard}">
              <div class="hidden space-x-2 md:flex" v-show="!profileCard">
                <img class="w-10 h-10 rounded-full" src="/images/profile-picture.png" />
                <button 
                  class="text-xs font-medium text-warning" 
                  @click.prevent="toggleProfileCard"
                >
                  Show Card
                </button>
              </div>
              <Tabs/>
            </div>
            
            <!-- Router View for children routes and components -->
            <router-view v-slot="{Component}">
              <transition name="route" mode="out-in">
                <component :is="Component"></component>
              </transition>
            </router-view>

          </div>
              
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ProfileCard from '@/components/ProfileCard.vue'
import Tabs from '@/components/Tabs.vue'
export default {
  name: 'Home',
  components: { ProfileCard, Tabs, },
  setup() {
    const store = useStore()
    const router = useRouter()

    const profileCard = computed(() => store.getters.getProfileCard)

    const toggleProfileCard = () => {
      store.commit('toggleProfileCard')
    }

    router.push({ name: 'Portfolio' })

    return {
      profileCard,
      toggleProfileCard
    }
  }
}
</script>

<style scoped>
.profileCard-enter-active{
  transition: ease-out 200ms;
}   
.profileCard-enter-from, .profileCard-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.profileCard-enter-to, .profileCard-leave-from {
  transform: scale(1);
  opacity: 100;
}

.profileCard-leave-active{
  transition: ease-in 75ms;
}

/* Route Transitions */
.route-enter-from {
  opacity: 0;
  transform: translate(-20px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translate(20px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>