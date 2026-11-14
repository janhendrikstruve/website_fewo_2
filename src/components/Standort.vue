<template>
  <section
    class="flex flex-col justify-center min-h-screen lg:min-h-0 lg:justify-start lg:pb-16 lg:pt-14"
  >
    <p class="eyebrow text-center max-lg:hidden">Anfahrt</p>
    <h2
      class="text-center text-6xl text-[#456882] font-berk lg:mt-3 lg:text-5xl xl:text-6xl"
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

    <div class="mt-2 flex justify-center mx-4 lg:mt-4 lg:items-center">
      <Icon
        icon="material-symbols:location-on-rounded"
        width="4rem"
        class="text-green-800 mt-2 lg:mt-0 lg:h-12 lg:w-12"
      />
      <p
        class="text-center mx-6 text-[1.6rem] tracking-tight text-[#405D72] lg:mx-4 lg:text-left lg:text-2xl lg:leading-snug lg:tracking-normal"
      >
        Klosterweg 2a, <br />
        25882 Tetenbüll
      </p>
    </div>

    <!-- Route in der Karten-App öffnen -->
    <div class="flex pb-4 pt-8 justify-center lg:gap-2 lg:pb-0">
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
        class="karten-knopf ml-4 flex justify-center items-center w-[7em] h-[7em] bg-[#F9F3EF] border-2 border-[#D2C1B6] rounded-full relative"
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
   damit die Karte nahtlos in den Hintergrund übergeht. */
.map-fade {
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
