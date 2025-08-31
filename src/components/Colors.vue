<template>
  <section class="flex flex-col h-screen">
    <div 
      v-for="(color, index) in colors" 
      :key="index"
      class="flex-1"
      :style="{ backgroundColor: color }"
    ></div>
  </section>
</template>

<script>
export default {
  name: 'VerticalStripes',
  data() {
    return {
      colors: [
        '#1B3C53',
        '#456882', 
        '#D2C1B6',
        '#F9F3EF',
        '#9FB3DF',
        '#9EC6F3',
        '#BDDDE4',
        '#FFF1D5'
      ]
    }
  }
}
</script>

<style scoped>
/* Optional: Add any additional styling here */
</style>