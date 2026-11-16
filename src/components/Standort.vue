<template>
  <section
    class="flex flex-col pb-16 pt-14"
  >
    <p class="eyebrow text-center">Anfahrt</p>
    <h2
      class="mt-3 text-center text-5xl text-[#456882] font-heading xl:text-6xl"
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

    <!-- Adresse als Postkarte, Route per P.S. in der Karten-App öffnen -->
    <div class="postkarte relative mx-4 mt-4 rounded-sm border border-[#D2C1B6] bg-[#F9F3EF] px-6 pb-5 pt-6 shadow-md shadow-[#1B3C53]/10">
      <div class="absolute right-4 top-4 flex h-14 w-12 rotate-[4deg] items-center justify-center border-2 border-dashed border-[#E8B4A0] bg-white text-[#456882]" aria-hidden="true">
        <Icon icon="material-symbols:location-on-rounded" width="1.75rem" />
      </div>
      <p class="font-heading text-2xl text-[#456882]">Ferienhaus Opa Hans</p>
      <address class="mt-3 space-y-1 text-lg not-italic text-[#1B3C53]">
        <p class="border-b border-dotted border-[#D2C1B6] pb-1">Klosterweg 2a</p>
        <p class="border-b border-dotted border-[#D2C1B6] pb-1">25882 Tetenbüll</p>
      </address>
      <p class="mt-5 text-lg text-[#405D72]">
        <span class="font-heading text-xl text-[#456882]">P.S.</span>
        Route planen mit
        <a :href="googleMapsUrl" target="_blank" rel="noopener noreferrer" class="karten-link">
          <Icon icon="logos:google-maps" width="0.85rem" /> Google Maps</a>
        oder
        <a :href="appleMapsUrl" target="_blank" rel="noopener noreferrer" class="karten-link">
          <Icon icon="lineicons:apple-brand" width="1.05rem" class="-mt-0.5" /> Apple Karten</a>
      </p>
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
/* Postkarte liegt leicht schräg */
.postkarte {
  rotate: -1deg;
}

.karten-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  color: #456882;
  white-space: nowrap;
  border-bottom: 2px solid #e8b4a0;
  transition: border-color 0.2s ease;
}
.karten-link:hover,
.karten-link:focus-visible {
  border-color: #456882;
  outline: none;
}
.karten-link:focus-visible {
  border-radius: 2px;
  box-shadow: 0 0 0 2px #456882;
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
