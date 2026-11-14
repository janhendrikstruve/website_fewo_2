<template>
  <section
    class="flex flex-col pb-16 pt-14"
  >
    <p class="eyebrow text-center">Anfahrt</p>
    <h2
      class="mt-3 text-center text-5xl text-[#456882] font-berk xl:text-6xl"
    >
      Hier findest <br />
      du uns
    </h2>

    <ResponsivePicture
      :picture="MapImg"
      alt="Karte der Halbinsel Eiderstedt mit dem Standort des Ferienhauses"
      sizes="(min-width: 1700px) 29vw, (min-width: 1024px) 40vw, 100vw"
      img-class="map-fade mt-6"
    />

    <div class="mx-4 mt-4 flex items-center justify-center">
      <Icon
        icon="material-symbols:location-on-rounded"
        width="3rem"
        class="text-green-800"
      />
      <p class="mx-4 text-left text-2xl leading-snug text-[#405D72]">
        Klosterweg 2a, <br />
        25882 Tetenbüll
      </p>
    </div>

    <!-- Route in der Karten-App öffnen -->
    <div class="flex justify-center gap-4 pt-8">
      <a
        :href="googleMapsUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="In Google Maps öffnen"
        title="In Google Maps öffnen"
        class="karten-knopf flex justify-center items-center w-[7em] h-[7em] bg-[#F9F3EF] border-2 border-[#D2C1B6] rounded-full"
      >
        <Icon icon="logos:google-maps" width="3rem" class="" />
      </a>
      <a
        :href="appleMapsUrl"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="In Apple Karten öffnen"
        title="In Apple Karten öffnen"
        class="karten-knopf flex justify-center items-center w-[7em] h-[7em] bg-[#F9F3EF] border-2 border-[#D2C1B6] rounded-full relative"
      >
        <Icon
          icon="lineicons:apple-brand"
          width="4rem"
          class="text-[#1B3C53] absolute top-[1.125rem]"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ResponsivePicture from "./ResponsivePicture.vue";
import MapImg from "../assets/map.jpg?picture";

const adresse = encodeURIComponent("Klosterweg 2a, 25882 Tetenbüll");
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${adresse}`;
const appleMapsUrl = `https://maps.apple.com/?q=${adresse}`;
</script>

<style scoped>
.karten-knopf {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}
.karten-knopf:hover,
.karten-knopf:focus-visible {
  transform: translateY(-0.2rem);
  background-color: #fff8f3;
  box-shadow: 0 0.6rem 1.2rem rgba(27, 60, 83, 0.15);
  outline: none;
}
.karten-knopf:focus-visible {
  border-color: #456882;
}

/* Blendet oberen und unteren Bildrand weich ins Transparente aus,
   damit die Karte nahtlos in den Hintergrund übergeht.
   :deep, weil das <img> in ResponsivePicture liegt (scoped greift dort
   sonst nicht). */
:deep(.map-fade) {
  --fade: 5%;
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 var(--fade),
    #000 calc(100% - var(--fade)),
    transparent
  );
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 var(--fade),
    #000 calc(100% - var(--fade)),
    transparent
  );
}
</style>
