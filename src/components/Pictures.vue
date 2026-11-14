<template>
  <section
    class="flex flex-col items-center justify-center overflow-hidden relative h-screen bg-[#FFF1D5]"
  >
    
    <h2 class="text-center text-[2.6rem] text-[#456882] font-berk">Drinnen</h2>
    
    <!-- Innen-Slider -->
    <div class="p-2 w-full max-w-md mb-8">
      <ImageSlider :images="innenImages" sizes="(min-width: 448px) 28rem, 100vw" />
    </div>
    <h2 class="pt-2 text-center text-[2.6rem] text-[#456882] font-berk">Draußen</h2>
    
    <!-- Außen-Slider -->
    <div class="p-2 w-full max-w-md">
      <ImageSlider :images="aussenImages" sizes="(min-width: 448px) 28rem, 100vw" />
    </div>
  </section>
</template>

<script setup>
import ImageSlider from './ImageSlider.vue';

// Bilder importieren
// Beim Build in AVIF/WebP/JPEG und mehreren Breiten erzeugt (vite-imagetools)
import WohnzimmerImg from '../assets/wohnzimmer.jpg?picture';
import SitzeckeImg from '../assets/sitzecke.jpg?picture';
import VogelImg from '../assets/vogel.jpg?picture';

// Innen-Bilder
const innenImages = [
  { picture: WohnzimmerImg, alt: 'Wohnzimmer' },
  { picture: SitzeckeImg, alt: 'Sitzecke' },
];

// Außen-Bilder
const aussenImages = [
  { picture: VogelImg, alt: 'Vogel' },
];
</script>