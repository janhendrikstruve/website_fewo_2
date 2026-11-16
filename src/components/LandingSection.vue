<template>
  <section class="relative text-center">
    <h2
      ref="h2Element"
      class="font-heading absolute top-[15vh] left-1/2 transform -translate-x-1/2 text-8xl tracking-tight text-[#ffffff] sm:text-6xl"
      style="text-shadow: 0.25rem 0.25rem 0.375rem black"
    >
      Moin!
    </h2>
    <a
      href="#ferienhaus"
      aria-label="Weiter zum Ferienhaus"
      class="absolute top-[85vh] left-1/2 z-10 rounded-full text-[#1B3C53] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3C53]"
      style="animation: bounceX 2s infinite ease-in-out"
    >
      <Icon icon="material-symbols:keyboard-double-arrow-down" width="4rem" />
    </a>
    <!-- Erstes Bild der Seite: sofort laden. Hochformat 4:5, also so
         breit wie 80 % der Fensterhöhe. -->
    <ResponsivePicture
      :picture="SeehundImg"
      alt="Seehund"
      sizes="80vh"
      loading="eager"
      img-class="object-cover h-screen"
    />

    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF1D5] to-transparent pointer-events-none"
    ></div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ResponsivePicture from "./ResponsivePicture.vue";
import SeehundImg from "../assets/seehund.jpg?picture";
</script>

<style>
@keyframes bounceX {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -0.75rem);
  }
}
</style>

