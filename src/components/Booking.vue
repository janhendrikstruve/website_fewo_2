<template>
  <section
    class="flex flex-col min-h-screen p-4 justify-center bg-[#FFF1D5]"
  >
    <h2
      class="mb-12 text-center text-5xl text-[#456882] sm:text-6xl font-berk"
    >
      Verfügbarkeit
    </h2>

    <!-- Kalender: 4 Monate (Desktop 2×2, Handy untereinander) -->
    <div v-if="configured && !error" class="flex flex-col items-center gap-4">
      <Calendar
        :attributes="attributes"
        :columns="isMobile ? 1 : 2"
        :rows="isMobile ? 4 : 2"
        :min-date="heute"
        locale="de"
        :first-day-of-week="2"
        borderless
        class="belegung rounded border-4 border-[#D2C1B6] p-2"
      />
      <div class="flex gap-6 text-[1rem] text-[#405D72]">
        <span class="flex items-center gap-2">
          <span class="inline-block h-4 w-4 rounded bg-[#E8B4A0]"></span>
          belegt
        </span>
        <span class="flex items-center gap-2">
          <span
            class="inline-block h-4 w-4 rounded border border-[#D2C1B6] bg-[#FFF8F3]"
          ></span>
          frei
        </span>
      </div>
      <p v-if="loading" class="text-[#405D72]">Belegung wird geladen …</p>
    </div>

    <!-- Platzhalter, solange keine Tabelle verknüpft ist oder Laden fehlschlägt -->
    <div
      v-else
      class="mx-auto flex max-w-md flex-col items-center gap-4 rounded border-4 border-[#D2C1B6] bg-[#F9F3EF] px-6 py-10 text-center"
    >
      <Icon
        icon="material-symbols:calendar-month-outline-rounded"
        width="56"
        class="text-[#456882]"
      />
      <p class="text-[1.2rem] tracking-tight text-[#405D72]">
        Unser Belegungskalender ist bald wieder hier zu sehen.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { Icon } from "@iconify/vue";
import { Calendar } from "v-calendar";
import "v-calendar/style.css";
import { useBelegung } from "@/composables/useBelegung";

const { buchungen, loading, error, configured, laden } = useBelegung();

const heute = new Date();

// Belegt sind die Nächte von Anreise bis zum Tag vor der Abreise.
// Der Abreisetag selbst bleibt frei, damit dort neue Gäste anreisen können.
const attributes = computed(() =>
  buchungen.value.map((b, i) => {
    const letzteNacht = new Date(b.end);
    letzteNacht.setDate(letzteNacht.getDate() - 1);
    return {
      key: `buchung-${i}`,
      highlight: {
        fillMode: "solid",
        style: { backgroundColor: "#E8B4A0" },
        contentStyle: { color: "#1B3C53" },
      },
      dates: { start: b.start, end: letzteNacht < b.start ? b.start : letzteNacht },
    };
  }),
);

const isMobile = ref(false);
function checkScreenSize() {
  isMobile.value = window.innerWidth < 768;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  laden();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>

<style scoped>
/* Hellere Seitenfarbe als Kalenderhintergrund. Über die Variable der
   Bibliothek, sonst überschreibt deren Stylesheet die Farbe mit Weiß. */
.belegung {
  --vc-bg: #fff8f3;
  background-color: #fff8f3;
}

.belegung :deep(.vc-title),
.belegung :deep(.vc-weekday) {
  color: #456882;
}
</style>
