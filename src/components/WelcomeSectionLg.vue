<template>
  <section class="flex flex-col justify-center min-h-screen bg-[#FFF1D5]">
    <h2
      class="mb-8 text-center text-6xl text-[#456882] sm:text-5xl font-berk font-extralight"
    >
      Ferienhaus <br class="lg:hidden" />
      Opa Hans
    </h2>
    <figure class="flex flex-col">
      <ImageSlider :images="pictures" />
      <p class="mt-4 mx-8 text-[1.2rem] tracking-tight text-[#405D72]">
        Unser Ferienhaus bietet 200 qm barrierefreie Wohnfläche in ruhiger
        Alleinlage – ideal für einen entspannten, nachhaltigen Urlaub. Es liegt
        nur 2,5 km von einer idyllischen Badestelle entfernt.
      </p>
    </figure>
  </section>
</template>

<script setup>
import ImageSlider from "./ImageSlider.vue";

import HausHintenImg from "../assets/haus_hinten.jpg";
import WohnzimmerImg from "../assets/wohnzimmer.jpg";
import SitzeckeImg from "../assets/sitzecke.jpg";

const pictures = [
  { src: HausHintenImg, alt: "Haus hinten" },
  { src: WohnzimmerImg, alt: "Wohnzimmer" },
  { src: SitzeckeImg, alt: "Sitzecke" },
];
</script>
