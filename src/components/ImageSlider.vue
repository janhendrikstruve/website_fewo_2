<!-- ImageSlider.vue -->
<template>
  <div class="flex flex-col items-center">
    <div class="overflow-hidden relative w-full">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img.src"
          :alt="img.alt"
          class="min-w-full object-contain"
        />
      </div>
    </div>
    
    <!-- Punkte-Navigation -->
    <div class="mt-4 flex justify-center gap-2">
      <button
        v-for="(img, index) in images"
        :key="'dot-' + index"
        @click="currentIndex = index"
        :class="[
          'w-3 h-3 rounded-full transition-colors',
          currentIndex === index ? 'bg-black' : 'bg-gray-400',
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props für die Bilder
const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

const currentIndex = ref(0);
const touchStartX = ref(0);
const touchEndX = ref(0);

function handleTouchStart(event) {
  touchStartX.value = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX.value = event.touches[0].clientX;
}

function handleTouchEnd() {
  const delta = touchEndX.value - touchStartX.value;
  const swipeThreshold = 50; // Mindestbewegung in px
  
  if (delta > swipeThreshold && currentIndex.value > 0) {
    currentIndex.value--;
  } else if (
    delta < -swipeThreshold &&
    currentIndex.value < props.images.length - 1
  ) {
    currentIndex.value++;
  }
  
  // Reset
  touchStartX.value = 0;
  touchEndX.value = 0;
}
</script>