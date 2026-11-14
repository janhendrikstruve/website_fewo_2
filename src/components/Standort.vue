<template>
  <section class="flex flex-col justify-center h-screen lg:bg-[#FFF1D5]">
    <h2 class="text-center text-6xl text-[#456882] font-berk">
      Hier findest <br />
      du uns
    </h2>

    <img
      class="map-fade mt-6"
      src="../assets/map.jpg"
      alt="Standort Ferienhaus"
    />

    <div class="mt-2 flex justify-center mx-4">
      <Icon
        icon="material-symbols:location-on-rounded"
        width="64"
        class="text-green-800 mt-2"
      />
      <p class="text-center mx-6 text-[1.6rem] tracking-tight text-[#405D72]">
        Klosterweg 2a, <br />
        25882 Tetenbüll
      </p>
    </div>

    <figure class="flex pb-4 pt-8 justify-center">
      <button
        type="button"
        class="flex justify-center items-center w-[7em] h-[7em] bg-[#F9F3EF] border-2 border-[#D2C1B6] rounded-full"
      >
        <Icon icon="logos:google-maps" width="48" class="" />
      </button>
      <button
        type="button"
        class="ml-4 flex justify-center items-center w-[7em] h-[7em] bg-[#F9F3EF] border-2 border-[#D2C1B6] rounded-full relative"
      >
        <Icon
          icon="lineicons:apple-brand"
          width="64"
          class="text-[#1B3C53] absolute -top-[-18px]"
        />
      </button>
    </figure>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
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
