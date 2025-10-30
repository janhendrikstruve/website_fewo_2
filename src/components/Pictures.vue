<template>
  <section
    class="flex flex-col items-center justify-center overflow-hidden relative h-screen bg-[#FFF1D5]"
  >
    
    <h2 class="text-center text-4xl font-bold text-[#456882] sm:text-6xl font-oleo">Innen:</h2>
    
    <!-- Innen-Slider -->
    <div class="w-full max-w-md mb-8">
      <ImageSlider :images="innenImages" />
    </div>
    <h2 class="text-center text-4xl font-bold text-[#456882] sm:text-6xl font-oleo">Außen:</h2>
    
    <!-- Außen-Slider -->
    <div class="w-full max-w-md">
      <ImageSlider :images="aussenImages" />
    </div>
  </section>
</template>

<script setup>
import ImageSlider from './ImageSlider.vue';

// Bilder importieren
import WohnzimmerImg from '../assets/wohnzimmer.jpg';
import SitzeckeImg from '../assets/sitzecke.jpg';
import VogelImg from '../assets/vogel.jpg';

// Innen-Bilder
const innenImages = [
  { src: WohnzimmerImg, alt: 'wohnzimmer' },
  { src: SitzeckeImg, alt: 'Sitzecke' },
];

// Außen-Bilder
const aussenImages = [
  { src: VogelImg, alt: 'Vogel' },
];
</script>