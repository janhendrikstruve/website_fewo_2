<!-- Desktop: Begrüßung mit Bildern und den wichtigsten Eckdaten -->
<template>
  <section class="px-8 pb-16 pt-14 xl:px-12">
    <header v-reveal class="text-center">
      <p class="eyebrow">Nordsee · Halbinsel Eiderstedt</p>
      <h1
        class="mt-3 text-balance text-5xl leading-tight text-[#456882] font-berk xl:text-6xl"
      >
        Ferienhaus Opa Hans
      </h1>
      <p
        class="mx-auto mt-4 max-w-[30rem] text-balance text-lg italic text-[#405D72]"
      >
        Fernab von allem Trubel fängt der Urlaub schon an der Gartenpforte an.
      </p>
    </header>

    <figure v-reveal class="mt-10">
      <ImageSlider
        :images="pictures"
        sizes="(min-width: 1700px) 34vw, (min-width: 1280px) 45vw, 55vw"
        frame-class="rounded border-4 border-[#D2C1B6] shadow-xl shadow-[#1B3C53]/15"
      />
      <figcaption
        class="mx-auto mt-8 max-w-[38rem] text-center text-xl leading-relaxed text-[#405D72]"
      >
        Unser Ferienhaus bietet 200 qm barrierefreie Wohnfläche in ruhiger
        Alleinlage – ideal für einen entspannten, nachhaltigen Urlaub. Es liegt
        nur 2,5 km von einer idyllischen Badestelle entfernt.
      </figcaption>
    </figure>

    <!-- Eckdaten, alle aus dem Text weiter unten. So viele Spalten, wie
         nebeneinander passen (je mindestens 10,5rem) – nie überlappend. -->
    <ul
      v-reveal
      class="mx-auto mt-10 grid w-full max-w-[44rem] grid-cols-[repeat(auto-fit,minmax(10.5rem,1fr))] gap-x-6 gap-y-5"
    >
      <li
        v-for="fakt in fakten"
        :key="fakt.text"
        class="flex items-center gap-3"
      >
        <span
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#D2C1B6] bg-[#F9F3EF]"
        >
          <Icon :icon="fakt.icon" width="1.5rem" class="text-green-800" />
        </span>
        <span class="min-w-0 leading-snug text-[#405D72]">
          <strong class="block font-bold text-[#1B3C53]">{{ fakt.wert }}</strong>
          {{ fakt.text }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import ImageSlider from "./ImageSlider.vue";

// Beim Build in AVIF/WebP/JPEG und mehreren Breiten erzeugt (vite-imagetools)
import HausHintenImg from "../assets/haus_hinten.jpg?picture";
import WohnzimmerImg from "../assets/wohnzimmer.jpg?picture";
import SitzeckeImg from "../assets/sitzecke.jpg?picture";

const pictures = [
  { picture: HausHintenImg, alt: "Haus hinten", caption: "Blick vom Garten" },
  { picture: WohnzimmerImg, alt: "Wohnzimmer", caption: "Wohnzimmer" },
  { picture: SitzeckeImg, alt: "Sitzecke", caption: "Sitzecke" },
];

const fakten = [
  { icon: "material-symbols:home-rounded", wert: "200 m²", text: "Wohnfläche" },
  { icon: "material-symbols:bed-rounded", wert: "3 Schlafzimmer", text: "bis 7 Gäste" },
  { icon: "material-symbols:shower-rounded", wert: "3 Bäder", text: "1 rollstuhlgerecht" },
  { icon: "material-symbols:accessible-forward-rounded", wert: "Barrierefrei", text: "und ebenerdig" },
  { icon: "material-symbols:beach-access-rounded", wert: "2,5 km", text: "zum Badestrand" },
  { icon: "material-symbols:ev-station-rounded", wert: "WLAN", text: "& E-Ladestation" },
];
</script>
