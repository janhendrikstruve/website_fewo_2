<template>
  <section class="relative text-center">
    <h2
      class="font-oleo absolute top-[15vh] left-1/2 transform -translate-x-1/2 text-8xl font-bold tracking-tight text-[#ffffff] sm:text-6xl"
      style="text-shadow: 4px 4px 6px black"
    >
      Moin!
    </h2>
    <Icon
      icon="material-symbols:keyboard-double-arrow-down"
      width="64"
      class="absolute top-[85vh] left-1/2 z-10 text-[#1B3C53] border-1 border-black"
      style="animation: bounceX 2s infinite ease-in-out"
    />
    <img
      class="object-cover h-screen"
      src="../assets/seehund.jpg"
      alt="Ansicht hinten"
    />

    <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FFF8F3] to-transparent pointer-events-none"
    ></div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style>
@keyframes bounceX {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -12px);
  }
}
</style>
