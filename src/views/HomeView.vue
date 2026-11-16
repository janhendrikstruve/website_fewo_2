<template>
  <!-- <div class="bg-[#FFF8F3]"> -->
  <div class="bg-[#FFF8F3]">
    <header class="absolute inset-x-0 top-0 z-50 lg:fixed">
      <nav
        class="flex h-14 items-center justify-between px-4 transition-[background-color,box-shadow] duration-300 lg:h-16 lg:bg-[#456882] lg:px-8"
        :class="{ 'lg:shadow-lg lg:shadow-[#1B3C53]/20': gescrollt }"
        aria-label="Hauptmenü"
      >
        <div class="hidden lg:block lg:flex-1"></div>

        <button
          type="button"
          class="-mr-2 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full text-[#F9F3EF] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F3EF] lg:hidden"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Menü öffnen</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" />
        </button>

        <div class="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="nav-link font-heading text-xl leading-6 text-[#F9F3EF] xl:text-2xl"
            :class="{ 'is-active': item.href === aktiv }"
            :aria-current="item.href === aktiv ? 'true' : undefined"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:block lg:flex-1"></div>
      </nav>

      <!-- Handy-Menü: schiebt sich von rechts herein -->
      <TransitionRoot as="template" :show="mobileMenuOpen">
        <Dialog class="relative z-50 lg:hidden" @close="mobileMenuOpen = false">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="fixed inset-0 bg-[#1B3C53]/40 backdrop-blur-sm"
              aria-hidden="true"
            />
          </TransitionChild>

          <TransitionChild
            as="template"
            enter="transform transition duration-300 ease-out"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition duration-200 ease-in"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-[#456882] px-6 pb-8 pt-3 text-[#F9F3EF] shadow-2xl"
            >
              <div class="flex h-11 items-center justify-between">
                <DialogTitle class="font-heading text-2xl">Opa Hans</DialogTitle>
                <button
                  type="button"
                  class="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F3EF]"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Menü schließen</span>
                  <XMarkIcon class="h-8 w-8" aria-hidden="true" />
                </button>
              </div>

              <ul class="mt-8 divide-y divide-[#F9F3EF]/15">
                <li v-for="item in navigation" :key="item.name">
                  <a
                    :href="item.href"
                    class="flex items-center justify-between rounded py-4 font-heading text-3xl transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F9F3EF]"
                    :class="item.href === aktiv ? 'text-white' : 'text-[#F9F3EF]/80'"
                    :aria-current="item.href === aktiv ? 'true' : undefined"
                    @click.prevent="geheZu(item.href)"
                  >
                    {{ item.name }}
                    <Moewen
                      v-if="item.href === aktiv"
                      class="h-6 w-6 text-[#F9F3EF]/70"
                    />
                  </a>
                </li>
              </ul>

              <div class="mt-auto flex flex-col items-center pt-10 text-center">
                <Moewen class="h-8 w-8 text-[#F9F3EF]/60" />
                <p class="mt-3 italic text-[#F9F3EF]/85">
                  Fragen? Rufen Sie uns gern an.
                </p>
                <a
                  href="tel:+4948659299"
                  class="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F9F3EF] px-6 py-3 font-bold text-[#1B3C53] shadow-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#456882]"
                >
                  <PhoneIcon class="h-5 w-5" aria-hidden="true" />
                  04865 / 9299
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
    </header>
    <div class="relative isolate">
      <!-- Nur das passende Layout wird eingebaut (nicht bloß per CSS
           versteckt), sonst lädt der Browser Bilder, Kalender und
           Belegungstabelle beider Layouts. -->
      <div v-if="isDesktop" class="pt-16">
        <!-- Zwei durchlaufende beige Streifen: links das Haus und die
             Gastgeber, rechts Kalender, Anfahrt und Kontakt. Die Abschnitte
             stapeln sich je Streifen mit ihrem natürlichen Abstand.
             Spalten: Rand | links | Lücke | rechts | Rand. Ab 1280px überall
             dieselben Verhältnisse (wie Full HD), damit Abstände nicht an
             einer Grenze springen. Links mindestens 30rem für den Text, rechts mindestens 38,25rem, damit der
             Kalender zweispaltig mit Rand Platz hat. -->
        <div
          class="relative grid grid-cols-[1.5rem_minmax(0,1fr)_2.25rem_22rem_1.5rem] xl:grid-cols-[4.74fr_minmax(30rem,37.9fr)_9.5fr_minmax(38.25rem,29fr)_9.5fr]"
        >
          <!-- Möwen in der Lücke zwischen den Streifen (reiner Schmuck) -->
          <div
            class="pointer-events-none relative col-start-3 row-start-1 hidden min-[1700px]:block"
            aria-hidden="true"
          >
            <Moewen
              class="absolute left-1/2 top-[14rem] h-24 w-24 -translate-x-1/2 -rotate-6 text-[#456882]/[0.13]"
            />
            <Moewen
              class="absolute right-[14%] top-[64%] h-16 w-16 -scale-x-100 rotate-6 text-[#456882]/[0.1]"
            />
          </div>

          <div class="streifen col-start-2 row-start-1">
            <WelcomeSection id="ferienhaus" class="scroll-mt-16" />
            <SectionDivider />
            <About id="ueber-uns" class="scroll-mt-16" />
          </div>

          <div class="streifen col-start-4 row-start-1">
            <Booking id="verfuegbarkeit" class="scroll-mt-16" />
            <SectionDivider />
            <Standort id="standort" class="scroll-mt-16" />
            <SectionDivider />
            <Impressum id="kontakt" class="scroll-mt-16" />
          </div>
        </div>

        <SiteFooter :navigation="navigation" />
      </div>
      <!-- Handy: dieselben Abschnitte untereinander auf einem beigen
           Streifen, getrennt durch die Möwen-Trenner -->
      <div v-else class="bg-[#FFF1D5]">
        <LandingSection />

        <WelcomeSection id="ferienhaus" />
        <SectionDivider />
        <Pictures />
        <SectionDivider />
        <Booking id="verfuegbarkeit" />
        <SectionDivider />
        <About id="ueber-uns" kurz />
        <SectionDivider />
        <Standort id="standort" />
        <SectionDivider />
        <Impressum id="kontakt" />

        <SiteFooter :navigation="navigation" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { Bars3Icon, PhoneIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import WelcomeSection from "@/components/WelcomeSection.vue";
import LandingSection from "@/components/LandingSection.vue";
import Pictures from "@/components/Pictures.vue";
import Standort from "@/components/Standort.vue";
import Booking from "@/components/Booking.vue";
import About from "@/components/About.vue";
import Impressum from "@/components/Impressum.vue";
import SectionDivider from "@/components/SectionDivider.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import Moewen from "@/components/Moewen.vue";

// Menüpunkte für Handy, Desktop und Fußzeile – nur Abschnitte, die es gibt.
// ("Preise und Buchung" fehlt, bis es dazu Inhalt gibt.)
const navigation = [
  { name: "Ferienhaus", href: "#ferienhaus" },
  { name: "Verfügbarkeit", href: "#verfuegbarkeit" },
  { name: "Über uns", href: "#ueber-uns" },
  { name: "Standort", href: "#standort" },
  { name: "Kontakt + Impressum", href: "#kontakt" },
];

const mobileMenuOpen = ref(false);

// Handy-Menü: erst schließen, dann zum Abschnitt scrollen. Während das
// Menü offen ist, sperrt es das Scrollen der Seite.
async function geheZu(href) {
  const warOffen = mobileMenuOpen.value;
  mobileMenuOpen.value = false;
  await nextTick();
  setTimeout(
    () => {
      document.querySelector(href)?.scrollIntoView();
      history.replaceState(null, "", href);
    },
    warOffen ? 250 : 0,
  );
}

// Gleiche Grenze wie Tailwinds lg-Breakpoint (1024px)
const desktopQuery = window.matchMedia("(min-width: 1024px)");
const isDesktop = ref(desktopQuery.matches);
const onLayoutChange = (e) => (isDesktop.value = e.matches);
desktopQuery.addEventListener("change", onLayoutChange);
onBeforeUnmount(() =>
  desktopQuery.removeEventListener("change", onLayoutChange),
);

// Beim Scrollen: Schatten unter der Desktop-Leiste und aktiver Menüpunkt.
// Aktiv ist der Abschnitt, dessen Anfang zuletzt über die Bildmitte
// gewandert ist. Die Streifen laufen nebeneinander; bei Gleichstand gewinnt
// der frühere Menüpunkt.
const gescrollt = ref(false);
const aktiv = ref(navigation[0].href);
let frame = 0;

function aktualisiere() {
  frame = 0;
  gescrollt.value = window.scrollY > 8;

  const mitte = window.innerHeight * 0.45;
  let bester = navigation[0].href;
  let besterTop = -Infinity;
  for (const { href } of navigation) {
    const el = document.querySelector(href);
    if (!el) continue;
    const { top, bottom } = el.getBoundingClientRect();
    if (top <= mitte && bottom > mitte && top > besterTop) {
      bester = href;
      besterTop = top;
    }
  }
  // Ganz unten zählt der letzte Abschnitt, auch wenn er die Mitte nicht erreicht
  const amEnde =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4;
  aktiv.value = amEnde ? navigation.at(-1).href : bester;
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(aktualisiere);
}

onMounted(() => {
  aktualisiere();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  cancelAnimationFrame(frame);
});
</script>

<style scoped>
/* Beiger Streifen mit ganz leichtem Papier-Schatten */
.streifen {
  display: flex;
  flex-direction: column;
  background-color: #fff1d5;
  box-shadow: 0 0 2.5rem rgba(210, 193, 182, 0.35);
}

/* Menülink: Unterstrich wächst beim Überfahren aus der Mitte */
.nav-link {
  position: relative;
  padding-block: 0.375rem;
  border-radius: 0.25rem;
  outline: none;
}
.nav-link::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 2px;
  border-radius: 1px;
  background-color: #f9f3ef;
  transform: scaleX(0);
  transition: transform 0.25s ease-out;
}
.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}
.nav-link:focus-visible {
  box-shadow: 0 0 0 2px #f9f3ef;
}
</style>
