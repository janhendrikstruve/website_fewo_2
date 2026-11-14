<!-- Trenner zwischen zwei Abschnitten: Linie – Möwen – Linie -->
<template>
  <div class="mx-auto flex w-2/3 items-center gap-4" aria-hidden="true">
    <span class="h-px flex-1 bg-gradient-to-r from-transparent to-[#D2C1B6]"></span>
    <Moewen class="h-5 w-5 text-[#C5AE9F]" />
    <span class="h-px flex-1 bg-gradient-to-l from-transparent to-[#D2C1B6]"></span>
  </div>
</template>

<script setup>
import Moewen from "./Moewen.vue";
</script>
