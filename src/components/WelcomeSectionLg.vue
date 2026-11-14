<template>
  <section class="flex flex-col justify-center min-h-screen bg-[#FFF1D5]">
    <h2
      class="mb-8 text-center text-6xl text-[#456882] sm:text-5xl font-berk font-extralight"
    >
      Ferienhaus <br class="lg:hidden" />
      Opa Hans
    </h2>
    <figure class="flex flex-col">
      <ImageSlider
        :images="pictures"
        sizes="(min-width: 1700px) 38vw, (min-width: 1024px) 42vw, 100vw"
      />
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

// Beim Build in AVIF/WebP/JPEG und mehreren Breiten erzeugt (vite-imagetools)
import HausHintenImg from "../assets/haus_hinten.jpg?picture";
import WohnzimmerImg from "../assets/wohnzimmer.jpg?picture";
import SitzeckeImg from "../assets/sitzecke.jpg?picture";

const pictures = [
  { picture: HausHintenImg, alt: "Haus hinten" },
  { picture: WohnzimmerImg, alt: "Wohnzimmer" },
  { picture: SitzeckeImg, alt: "Sitzecke" },
];
</script>
