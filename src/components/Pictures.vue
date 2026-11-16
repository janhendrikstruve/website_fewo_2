<!-- Handy: weitere Eindrücke, drinnen und draußen -->
<template>
  <section class="px-5 pb-16 pt-14 sm:px-8">
    <p v-reveal class="eyebrow text-center">Eindrücke</p>

    <div v-reveal class="mx-auto mt-3 max-w-md">
      <h2 class="text-center text-5xl text-[#456882] font-heading">Drinnen</h2>
      <ImageSlider
        class="mt-6"
        :images="innenImages"
        sizes="(min-width: 448px) 28rem, 100vw"
        frame-class="rounded border-4 border-[#D2C1B6] shadow-xl shadow-[#1B3C53]/15"
      />
    </div>

    <div v-reveal class="mx-auto mt-12 max-w-md">
      <h2 class="text-center text-5xl text-[#456882] font-heading">Draußen</h2>
      <ImageSlider
        class="mt-6"
        :images="aussenImages"
        sizes="(min-width: 448px) 28rem, 100vw"
        frame-class="rounded border-4 border-[#D2C1B6] shadow-xl shadow-[#1B3C53]/15"
      />
    </div>
  </section>
</template>

<script setup>
import ImageSlider from "./ImageSlider.vue";

// Beim Build in AVIF/WebP/JPEG und mehreren Breiten erzeugt (vite-imagetools)
import WohnzimmerImg from "../assets/wohnzimmer.jpg?picture";
import SitzeckeImg from "../assets/sitzecke.jpg?picture";
import VogelImg from "../assets/vogel.jpg?picture";

const innenImages = [
  { picture: WohnzimmerImg, alt: "Wohnzimmer", caption: "Wohnzimmer" },
  { picture: SitzeckeImg, alt: "Sitzecke", caption: "Sitzecke" },
];

const aussenImages = [{ picture: VogelImg, alt: "Möwe am Strand" }];
</script>
