<template>
  <div class="relative w-full p-4 bg-blue-500">
    <h1>This is the Availability page</h1>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Availability',
  components: { },
  setup() {
    const startDate = reactive(new Date())

    return {
      startDate
    }
  }
}
</script>
