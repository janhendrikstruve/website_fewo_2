<!-- Fußzeile der Desktop-Ansicht -->
<template>
  <footer class="relative bg-[#456882] text-[#F9F3EF]">
    <div
      class="mx-auto flex max-w-5xl flex-col items-center px-8 pb-8 pt-12 text-center"
    >
      <Moewen class="h-8 w-8 text-[#F9F3EF]/70" />
      <p class="mt-3 text-4xl font-heading">Ferienhaus Opa Hans</p>
      <p class="mt-3 text-balance italic text-[#F9F3EF]/85">
        Fernab von allem Trubel fängt der Urlaub schon an der Gartenpforte an.
      </p>

      <nav
        class="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2"
        aria-label="Fußzeile"
      >
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="rounded underline-offset-4 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F3EF]"
          >{{ item.name }}</a
        >
      </nav>

      <p
        class="mt-8 w-full border-t border-[#F9F3EF]/20 pt-6 text-sm text-[#F9F3EF]/75"
      >
        © {{ jahr }} Detlef Struve · Tetenbüll, Halbinsel
        Eiderstedt
      </p>
    </div>
  </footer>
</template>

<script setup>
import Moewen from "./Moewen.vue";

defineProps({
  navigation: { type: Array, default: () => [] },
});

const jahr = new Date().getFullYear();
</script>
