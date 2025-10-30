<template>
  <div class="w-full h-4 bg-gradient-to-b from-[#FFF1D5] to-[#FFF8F3]"></div>
  <section class="flex flex-col justify-center h-screen">
      <h2
      class="text-center text-7xl font-bold text-[#456882] sm:text-6xl font-oleo"
    >
      Hier findest <br> du Uns
    </h2>
    
      <img
        class="mt-10"
        src="../assets/map.jpg"
        alt="Ansicht hinten"
      />
      <div class="mt-2 flex justify-center mx-4">
      <Icon
      icon="material-symbols:location-on-rounded"
      width="64"
      class="text-red-700 mt-2"
    />
      <p class="text-center mx-6 text-[1.6rem] tracking-tight text-[#405D72] ">
        Klosterweg 2a, <br>
        25882 Tetenbüll
      </p>
      </div>
      
    <figure class="flex pb-4 pt-8 justify-center">
      
      <button
        type="button"
        class="flex justify-center items-center w-[7em] h-[7em] bg-[#FFF1D5] border-4 border-[#D2C1B6] rounded-full"
      >
    <Icon
      icon="logos:google-maps"
      width="48"
      class=""
    />
      </button>
      <button
        type="button"
        class="ml-4 flex justify-center items-center w-[7em] h-[7em] bg-[#FFF1D5] border-4 border-[#D2C1B6] rounded-full"
      >
    <Icon
      icon="lineicons:apple-brand"
      width="64"
      class="text-[#1B3C53]"
    />
      </button>
      
    </figure>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
