<template>
  <!-- <hr class="shadow-xl border-0 h-2 bg-[#596E79]" /> -->
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
      <p class="text-center mx-8 text-[1.2rem] tracking-tight text-[#405D72]">
        Adresse: <br>
        Klosterweg 2a,
        25882 Tetenbüll
      </p>
      
      <p class="mt-4 mx-4 text-[1.2rem] tracking-tight text-[#405D72] text-center">
        Maps Links:
      </p>
    <figure class="flex pb-4 justify-center">
      
      <button
        type="button"
        class=""
      >
    <Icon
      icon="material-icon-theme:gcp"
      width="64"
      class="text-white"
    />
      </button>
      <button
        type="button"
        class=""
      >
    <Icon
      icon="material-icon-theme:applescript"
      width="64"
      class="text-white"
    />
      </button>
      
    </figure>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
