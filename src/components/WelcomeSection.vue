<template>
  <!-- <hr class="shadow-xl border-0 h-2 bg-[#596E79]" /> -->
  <section class="flex flex-col justify-center h-screen">
    <h2
      class="mb-8 text-center text-7xl font-bold text-[#456882] sm:text-6xl font-oleo"
    >
      Ferienhaus <br> Opa Hans
    </h2>
    <figure class="flex flex-col">
      <img
        class="mt-2 mx-2 shadow-xl"
        src="../assets/haus_hinten.jpg"
        alt="Ansicht hinten"
      />
      <p class="mt-4 mx-8 text-[1.2rem] tracking-tight text-[#405D72]">
        Unser Ferienhaus bietet 200 qm barrierefreie Wohnfläche in ruhiger
        Alleinlage – ideal für einen entspannten, nachhaltigen Urlaub. Es liegt nur 2,5 km
        von einer idyllischen Badestelle entfernt.
      </p>
      <a 
:href="`https://www.traum-ferienwohnungen.de/${listingId}/#kalender`"
target="_blank"
rel="noopener noreferrer"
class="flex items-center justify-center m-10 bg-[#dff9ff] border-4 border-[#D2C1B6] rounded"
>
<Icon icon="material-symbols:subdirectory-arrow-right" class="mr-2 text-gray-600" width="32" />
<img 
src="https://static.traum-ferienwohnungen.de/images/vermieten/tfw-logo.png"
alt="Traum-Ferienwohnungen.de"
width="200"
class="px-4 py-2 mt-1.5 "
/>
</a>
    </figure>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>