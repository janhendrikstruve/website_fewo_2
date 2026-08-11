<template>
  <section class="flex flex-col justify-center min-h-screen lg:bg-[#FFF1D5] py-16">
    <h2 class="text-center text-6xl text-[#456882] font-berk">
      Impressum
    </h2>


    <div class="mx-4 mt-10 lg:mx-auto lg:max-w-5xl">
      <div
        class="mx-4 rounded-[2.5rem] border-2 border-[#D2C1B6] bg-[#FFF8F3] px-6 py-10 shadow-sm md:px-12"
      >
        <h3 class="text-center text-4xl text-[#456882] font-berk">
          Angaben gemäß § 5 DDG
        </h3>

        <div class="mt-12 grid items-start gap-12 lg:grid-cols-[1.05fr_1.2fr]">
          <address class="not-italic space-y-2 text-[1.6rem] tracking-tight text-[#405D72]">
            <p class="font-semibold text-[#1B3C53]">Hans Mustermann</p>
            <p>Software Consulting Mustermann</p>
            <p>Hauptstraße 2</p>
            <p>99999 Musterstadt</p>
          </address>

          <div class="space-y-8">
            <a
              href="tel:+499991234567"
              class="group flex items-center gap-6"
              aria-label="Telefonnummer anrufen"
            >
              <span
                class="flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-full border-2 border-[#D2C1B6] bg-[#F9F3EF] transition-transform duration-200 group-hover:scale-105"
              >
                <Icon
                  icon="material-symbols:call-rounded"
                  width="34"
                  class="text-green-800"
                />
              </span>
              <span class="min-w-0">
                <span class="block text-sm uppercase tracking-widest text-[#456882]">
                  Telefon
                </span>
                <span
                  class="block truncate text-[1.6rem] tracking-tight text-[#405D72] transition-colors group-hover:text-[#456882]"
                >
                  0999 1234567
                </span>
              </span>
            </a>

            <div class="flex items-center gap-6">
              <span
                class="flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-full border-2 border-[#D2C1B6] bg-[#F9F3EF]"
              >
                <Icon
                  icon="mdi:fax"
                  width="34"
                  class="text-green-800"
                />
              </span>
              <div class="min-w-0">
                <p class="text-sm uppercase tracking-widest text-[#456882]">Fax</p>
                <p class="truncate text-[1.6rem] tracking-tight text-[#405D72]">
                  0999 12345678
                </p>
              </div>
            </div>

            <a
              href="mailto:mustermann@xy.de"
              class="group flex items-center gap-6"
              aria-label="E-Mail senden"
            >
              <span
                class="flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-full border-2 border-[#D2C1B6] bg-[#F9F3EF] transition-transform duration-200 group-hover:scale-105"
              >
                <Icon
                  icon="material-symbols:mail-rounded"
                  width="34"
                  class="text-green-800"
                />
              </span>
              <span class="min-w-0">
                <span class="block text-sm uppercase tracking-widest text-[#456882]">
                  E-Mail
                </span>
                <span
                  class="block truncate text-[1.6rem] tracking-tight text-[#405D72] transition-colors group-hover:text-[#456882]"
                >
                  mustermann@xy.de
                </span>
              </span>
            </a>
          </div>
        </div>

        <div class="mt-12 border-t-2 border-[#D2C1B6] pt-8">
          <p class="text-center text-[1.3rem] tracking-tight text-[#405D72] opacity-80">
            Verantwortlich für den Inhalt: Hans Mustermann
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>