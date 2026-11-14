<template>
  <section class="flex flex-col px-4 pb-20 pt-14">
    <p class="eyebrow text-center">Kontakt</p>
    <h2
      class="mt-3 text-center text-5xl text-[#456882] font-berk xl:text-6xl"
    >
      Impressum
    </h2>

    <div
      v-reveal
      class="mx-auto mt-10 w-full max-w-md rounded border-4 border-[#D2C1B6] bg-[#FFF8F3] px-6 py-8 text-[#405D72] shadow-xl shadow-[#1B3C53]/10 sm:px-8"
    >
      <p class="text-center text-xs uppercase tracking-widest text-[#456882]">
        Angaben gemäß § 5 DDG
      </p>

      <!-- Anbieter -->
      <address class="mt-5 not-italic text-center">
        <p class="text-3xl leading-tight text-[#456882] font-berk">
          Detlef und Susanne Struve
        </p>
        <p class="mt-3 text-[1.15rem] tracking-tight">
          Klosterweg 2<br />
          25882 Tetenbüll
        </p>
      </address>

      <div class="my-7 flex items-center gap-3" aria-hidden="true">
        <span class="h-px flex-1 bg-[#D2C1B6]"></span>
        <Icon
          icon="material-symbols:home-rounded"
          width="1.25rem"
          class="text-[#D2C1B6]"
        />
        <span class="h-px flex-1 bg-[#D2C1B6]"></span>
      </div>

      <!-- Kontakt -->
      <ul class="space-y-5">
        <li>
          <a
            href="tel:+4948659299"
            class="group flex items-center gap-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#456882]"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#D2C1B6] bg-[#F9F3EF] transition-transform duration-200 group-hover:scale-105"
            >
              <Icon
                icon="material-symbols:call-rounded"
                width="1.5rem"
                class="text-green-800"
              />
            </span>
            <span class="min-w-0">
              <span
                class="block text-xs uppercase tracking-widest text-[#456882]"
              >
                Telefon
              </span>
              <span
                class="block text-[1.15rem] tracking-tight transition-colors group-hover:text-[#1B3C53]"
              >
                04865 / 9299
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            href="mailto:info@Ferienwohnung-Eiderstedt-Nordsee.de"
            class="group flex items-center gap-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#456882]"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#D2C1B6] bg-[#F9F3EF] transition-transform duration-200 group-hover:scale-105"
            >
              <Icon
                icon="material-symbols:mail-rounded"
                width="1.5rem"
                class="text-green-800"
              />
            </span>
            <span class="min-w-0">
              <span
                class="block text-xs uppercase tracking-widest text-[#456882]"
              >
                E-Mail
              </span>
              <span
                class="block break-words text-[1.15rem] tracking-tight transition-colors group-hover:text-[#1B3C53]"
              >
                info@<wbr />Ferienwohnung-<wbr />Eiderstedt-<wbr />Nordsee.de
              </span>
            </span>
          </a>
        </li>
      </ul>

      <p
        class="mt-8 border-t border-[#D2C1B6] pt-5 text-center text-sm tracking-tight opacity-90"
      >
        Herausgeber und verantwortlich für den Inhalt:<br />
        Detlef und Susanne Struve
      </p>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
