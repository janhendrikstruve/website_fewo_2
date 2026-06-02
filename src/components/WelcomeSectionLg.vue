<template>
  <section class="flex flex-col justify-center h-screen bg-[#FFF1D5]">
    <h2
      class="mb-8 text-center text-6xl text-[#456882] sm:text-5xl font-berk font-extralight"
    >
      Ferienhaus <br class="lg:hidden" />
      Opa Hans
    </h2>
    <figure class="flex flex-col">
      <fwb-carousel :pictures="pictures" class="" />
      <p class="mt-4 mx-8 text-[1.2rem] tracking-tight text-[#405D72]">
        Unser Ferienhaus bietet 200 qm barrierefreie Wohnfläche in ruhiger
        Alleinlage – ideal für einen entspannten, nachhaltigen Urlaub. Es liegt
        nur 2,5 km von einer idyllischen Badestelle entfernt.
      </p>
    </figure>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { FwbCarousel } from "flowbite-vue";

const pictures = [
  { src: "/src/assets/haus_hinten.jpg", alt: "Haus hinten" },
  { src: "/src/assets/wohnzimmer.jpg", alt: "Wohnzimmer" },
  { src: "/src/assets/sitzecke.jpg", alt: "Sitzecke" },
];
</script>
