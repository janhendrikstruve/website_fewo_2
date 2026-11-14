<template>
  <!-- <div class="bg-[#FFF8F3]"> -->
  <div class="bg-[#FFF8F3]">
    <header
      class="absolute inset-x-0 top-0 z-50 transition-shadow duration-300 lg:fixed"
      :class="{ 'lg:shadow-lg lg:shadow-[#1B3C53]/20': gescrollt }"
    >
      <nav
        class="flex items-center justify-between p-6 lg:h-16 lg:px-8 lg:py-0 lg:bg-[#456882]"
        aria-label="Hauptmenü"
      >
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <!-- img class="h-20 w-auto" src="../assets/logo.jpg" alt="" -->
            <!-- Kein Logo mehr -->
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <!-- <Bars3Icon class="h-8 w-8 text-white" aria-hidden="true" /> -->
            <Icon
              icon="fontisto:nav-icon-a"
              class="text-[#ffffff] shadow-2xl shadow-black"
              width="2rem"
            />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
          <a
            v-for="item in desktopNavigation"
            :key="item.name"
            :href="item.href"
            class="nav-link font-berk text-xl leading-6 text-[#F9F3EF] xl:text-2xl"
            :class="{ 'is-active': item.href === aktiv }"
            :aria-current="item.href === aktiv ? 'true' : undefined"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!-- Leerer Platzhalter anstatt login -->
        </div>
      </nav>
      <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div class="relative isolate">
      <!-- Nur das passende Layout wird eingebaut (nicht bloß per CSS
           versteckt), sonst lädt der Browser Bilder, Kalender und
           Belegungstabelle beider Layouts. -->
      <div v-if="isDesktop" class="pt-16">
        <!-- Zwei durchlaufende beige Streifen: links das Haus und die
             Gastgeber, rechts Kalender, Anfahrt und Kontakt. Die Abschnitte
             stapeln sich je Streifen mit ihrem natürlichen Abstand.
             Spalten: Rand | links | Lücke | rechts | Rand. Ab 1700px gelten
             die Verhältnisse der Full-HD-Ansicht. -->
        <div
          class="relative grid grid-cols-[1.5rem_minmax(0,1fr)_4.5rem_22rem_1.5rem] xl:grid-cols-[2rem_minmax(0,1fr)_5.5rem_35.5rem_2rem] min-[1700px]:grid-cols-[4.74fr_37.9fr_19fr_29fr_9.5fr]"
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
            <WelcomeSectionLg id="ferienhaus" class="scroll-mt-16" />
            <SectionDivider />
            <About id="ueber-uns" class="scroll-mt-16" />

            <!-- Abschluss des Streifens: füllt den Platz bis zur Fußzeile,
                 egal wie hoch der rechte Streifen gerade ist. -->
            <div class="relative min-h-[20rem] flex-1 overflow-hidden">
              <ResponsivePicture
                :picture="SeehundImg"
                alt="Seehund am Nordseestrand"
                sizes="(min-width: 1700px) 38vw, 50vw"
                picture-class="absolute inset-0"
                img-class="ausklang h-full w-full object-cover"
              />
            </div>
          </div>

          <div class="streifen col-start-4 row-start-1">
            <Booking id="verfuegbarkeit" class="scroll-mt-16" />
            <SectionDivider />
            <Standort id="standort" class="scroll-mt-16" />
            <SectionDivider />
            <Impressum id="kontakt" class="scroll-mt-16" />
          </div>
        </div>

        <SiteFooter :navigation="desktopNavigation" />
      </div>
      <div v-else class="mx-auto sm:py-48">
        <LandingSection />

        <WelcomeSection />

        <div
          class="w-full h-4 bg-gradient-to-b from-[#FFF8F3] to-[#FFF1D5] min-[1200px]:hidden"
        ></div>

        <Pictures />

        <Standort />

        <div
          class="w-full h-4 bg-gradient-to-b from-[#FFF8F3] to-[#FFF1D5] min-[1200px]:hidden"
        ></div>

        <Booking />
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import HomeView from "./HomeView.vue";
import WelcomeSection from "@/components/WelcomeSection.vue";
import WelcomeSectionLg from "@/components/WelcomeSectionLg.vue";
import LandingSection from "@/components/LandingSection.vue";
import Pictures from "@/components/Pictures.vue";
import { Icon } from "@iconify/vue";
import Standort from "@/components/Standort.vue";
import Colors from "@/components/Colors.vue";
import Booking from "@/components/Booking.vue";
import About from "@/components/About.vue";
import Impressum from "@/components/Impressum.vue";
import SectionDivider from "@/components/SectionDivider.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import Moewen from "@/components/Moewen.vue";
import ResponsivePicture from "@/components/ResponsivePicture.vue";
import SeehundImg from "@/assets/seehund.jpg?picture";

const navigation = [
  { name: "Ferienhaus", href: "#" },
  { name: "Verfügbarkeit", href: "#" },
  { name: "Über uns", href: "#" },
  { name: "Preise und Buchung", href: "#" },
  { name: "Standort", href: "#" },
  { name: "Kontakt + Impressum", href: "#" },
];

// Menü der Desktop-Ansicht: nur Punkte, zu denen es einen Abschnitt gibt.
// ("Preise und Buchung" fehlt, bis es dazu Inhalt gibt.)
const desktopNavigation = [
  { name: "Ferienhaus", href: "#ferienhaus" },
  { name: "Verfügbarkeit", href: "#verfuegbarkeit" },
  { name: "Über uns", href: "#ueber-uns" },
  { name: "Standort", href: "#standort" },
  { name: "Kontakt + Impressum", href: "#kontakt" },
];

const mobileMenuOpen = ref(false);

// Gleiche Grenze wie Tailwinds lg-Breakpoint (1024px)
const desktopQuery = window.matchMedia("(min-width: 1024px)");
const isDesktop = ref(desktopQuery.matches);
const onLayoutChange = (e) => (isDesktop.value = e.matches);
desktopQuery.addEventListener("change", onLayoutChange);
onBeforeUnmount(() =>
  desktopQuery.removeEventListener("change", onLayoutChange),
);

// Beim Scrollen: Schatten unter der Menüleiste und aktiver Menüpunkt.
// Aktiv ist der Abschnitt, dessen Anfang zuletzt über die Bildmitte
// gewandert ist. Die Streifen laufen nebeneinander; bei Gleichstand gewinnt
// der frühere Menüpunkt.
const gescrollt = ref(false);
const aktiv = ref(desktopNavigation[0].href);
let frame = 0;

function aktualisiere() {
  frame = 0;
  gescrollt.value = window.scrollY > 8;
  if (!isDesktop.value) return;

  const mitte = window.innerHeight * 0.45;
  let bester = desktopNavigation[0].href;
  let besterTop = -Infinity;
  for (const { href } of desktopNavigation) {
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
  aktiv.value = amEnde ? desktopNavigation.at(-1).href : bester;
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

/* Seehund-Foto: blendet oben weich aus dem Beige ein (wie die Karte) */
:deep(.ausklang) {
  object-position: 50% 58%;
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 30%);
  mask-image: linear-gradient(to bottom, transparent, #000 30%);
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
