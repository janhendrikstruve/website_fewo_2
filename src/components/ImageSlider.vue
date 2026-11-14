<!-- ImageSlider.vue: Bilder-Karussell, das mit der Breite mitwächst -->
<template>
  <div class="flex w-full flex-col items-center">
    <div
      class="group relative w-full overflow-hidden"
      :class="frameClass"
      :style="{ aspectRatio }"
      @touchstart.passive="handleTouchStart"
      @touchmove.passive="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div
        class="flex h-full transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <ResponsivePicture
          v-for="(img, index) in images"
          :key="index"
          :picture="img.picture"
          :alt="img.alt"
          :sizes="sizes"
          :loading="index === 0 ? 'eager' : 'lazy'"
          picture-class="block h-full w-full shrink-0"
          img-class="h-full w-full object-cover"
          draggable="false"
        />
      </div>

      <!-- Bildunterschrift, falls das aktuelle Bild eine hat -->
      <Transition name="caption" mode="out-in">
        <p
          v-if="images[currentIndex]?.caption"
          :key="currentIndex"
          class="pointer-events-none absolute bottom-3 left-3 rounded-full bg-[#1B3C53]/65 px-3 py-1 text-sm text-[#F9F3EF] backdrop-blur-sm"
        >
          {{ images[currentIndex].caption }}
        </p>
      </Transition>

      <!-- Pfeile (nur bei mehr als einem Bild) -->
      <template v-if="images.length > 1">
        <button
          type="button"
          class="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-[#1B3C53] shadow transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#456882]"
          aria-label="Vorheriges Bild"
          @click="prev"
        >
          <Icon icon="material-symbols:chevron-left-rounded" width="1.75rem" />
        </button>
        <button
          type="button"
          class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-[#1B3C53] shadow transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#456882]"
          aria-label="Nächstes Bild"
          @click="next"
        >
          <Icon icon="material-symbols:chevron-right-rounded" width="1.75rem" />
        </button>
      </template>
    </div>

    <!-- Punkte-Navigation -->
    <div v-if="images.length > 1" class="mt-4 flex justify-center gap-2">
      <button
        v-for="(img, index) in images"
        :key="'dot-' + index"
        type="button"
        :aria-label="`Bild ${index + 1}: ${img.alt}`"
        :aria-current="currentIndex === index"
        @click="currentIndex = index"
        :class="[
          'h-3 w-3 rounded-full transition-colors',
          currentIndex === index ? 'bg-[#456882]' : 'bg-[#D2C1B6]',
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import ResponsivePicture from "./ResponsivePicture.vue";

const props = defineProps({
  // [{ picture: <Import mit ?picture>, alt: "…", caption?: "…" }]
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
  // Seitenverhältnis des Bildbereichs; Bilder werden passend zugeschnitten
  aspectRatio: {
    type: String,
    default: "3 / 2",
  },
  // Zusätzliche Klassen für den Bildbereich, z. B. Rahmen und Schatten
  frameClass: {
    type: [String, Array, Object],
    default: "",
  },
  // Anzeigebreite für die Bildauswahl des Browsers (CSS-sizes-Syntax)
  sizes: {
    type: String,
    default: "100vw",
  },
});

const currentIndex = ref(0);
const touchStartX = ref(0);
const touchEndX = ref(0);

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
}

function handleTouchStart(event) {
  touchStartX.value = event.touches[0].clientX;
  touchEndX.value = touchStartX.value;
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

  touchStartX.value = 0;
  touchEndX.value = 0;
}
</script>

<style scoped>
.caption-enter-active,
.caption-leave-active {
  transition: opacity 0.2s ease;
}
.caption-enter-from,
.caption-leave-to {
  opacity: 0;
}
</style>
