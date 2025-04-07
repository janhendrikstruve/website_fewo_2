<template>
  <div class="bg-[#FFF8F3]">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
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
            <Bars3Icon class="h-8 w-8 text-white" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900"
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
    <!-- Hier faengt body an -->
    <div class="relative isolate lg:px-8">
      <div class="mx-auto max-w-2xl sm:py-48 lg:py-56">
        <div class="relative text-center">
          <h1
            class="absolute top-[15vh] left-1/2 transform -translate-x-1/2 text-6xl font-bold tracking-tight text-[#ffffff] sm:text-6xl"
            style="text-shadow: 4px 4px 6px black"
          >
            Moin!
          </h1>
          <img
            class="object-cover h-screen"
            src="../assets/seehund.jpg"
            alt="Ansicht hinten"
          />
        </div>
        <!-- Abschnitt Bullet Points -->
        <div
          class="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto md:mt-20 md:grid-cols-4 mt-8"
        >
          <div
            class="bg-white h-12 flex shadow-lg items-center justify-center col-span-2 border rounded-md"
          >
            ⭐ Fünf Sterne vom Tourismusverband
          </div>

          <div
            class="bg-white h-12 flex shadow-lg items-center justify-center col-span-2 border rounded-md"
          >
            🌊 Badestelle nur 2,5 KM entfernt
          </div>
          <div
            class="bg-white h-12 flex shadow-lg items-center justify-center border rounded-md"
          >
            🌸 Ferien am Deich
          </div>

          <div
            class="bg-white h-12 flex shadow-lg items-center justify-center border rounded-md"
          >
            🌅 Alleinlage
          </div>

          <div
            class="bg-white h-12 flex shadow-lg items-center justify-center border rounded-md"
          >
            Barrierefrei
          </div>

          <div
            class="bg-white h-12 flex shadow-lg items-center justify-center border rounded-md"
          >
            ✨ Top Ausstattung
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import HomeView from "./HomeView.vue";

const navigation = [
  { name: "Ferienhaus", href: "#" },
  { name: "Umgebung", href: "#" },
  { name: "Preise und Buchung", href: "#" },
  { name: "Kontakt", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>
