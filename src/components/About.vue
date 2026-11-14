<!-- Desktop: Die Gastgeber stellen sich vor. Das runde Foto ragt über den
     Rand des Streifens, der Text fließt um den Kreis herum. -->
<template>
  <section class="about px-8 pb-14 pt-16 xl:px-14">
    <div class="about-text mx-auto max-w-[44rem] text-[#1B3C53]">
      <div
        v-reveal
        class="portrait rounded-full border-4 border-[#D2C1B6] shadow-xl shadow-[#1B3C53]/20"
      >
        <!-- Kreis 13,75rem; Ausschnitt auf den Seehund gelegt -->
        <ResponsivePicture
          :picture="SeehundImg"
          alt="Seehund am Nordseestrand"
          sizes="14rem"
          picture-class="block h-full w-full overflow-hidden rounded-full"
          img-class="seehund h-full w-full object-cover"
        />
      </div>

      <header v-reveal class="pb-8 pt-6 text-center">
        <p class="eyebrow">Ihre Gastgeber</p>
        <h2 class="mt-3 text-6xl text-[#456882] font-berk">Moin!</h2>
      </header>

      <div v-reveal class="prosa">
        <p>
          Wir sind Susanne und Detlef Struve und freuen uns, dass Sie zu uns
          gefunden haben. Herzlich willkommen im Ferienhaus Opa Hans! Hier hat
          früher Opa Hans gewohnt. Wir haben sein Zuhause mit viel Liebe zum
          Detail modernisiert und dabei darauf geachtet, dass es seinen
          Charme behält.
        </p>
        <p>
          Das Haus steht ganz für sich inmitten grüner Wiesen im Wasserkoog,
          einem Ortsteil von Tetenbüll auf der Halbinsel Eiderstedt. Direkte
          Nachbarn gibt es nicht, Verkehr auch nicht – dafür viel Himmel, Ruhe
          und die reetgedeckten Häuser des Koogs, eine Kulisse wie aus einem
          Film. Unser Bauernhof liegt nur 250 m entfernt. Dort halten wir
          Rinder, die Sie auf den Weiden rund ums Haus grasen sehen.
        </p>
      </div>

      <div v-reveal class="prosa">
        <h3>Platz für die ganze Familie</h3>
        <p>
          Auf 200 m² finden bis zu sieben Gäste Platz, mit drei Schlafzimmern
          und drei Bädern. Das gesamte Haus ist ebenerdig und barrierefrei,
          eines der Bäder ist rollstuhlgerecht. Unser Schmuckstück ist das
          Familienzimmer: In dem riesigen XXL-Bett (270 x 200 cm) schlafen
          drei Personen bequem, ein eigener Fernseher gehört dazu.
        </p>
        <p>
          Die Kleinen haben ihr eigenes Spielzimmer, und auf Wunsch stellen
          wir Ihnen Babyausstattung bereit, damit Sie mit leichtem Gepäck
          anreisen können. Die Küche ist komplett ausgestattet, auch
          Geschirrspüler und Waschmaschine sind da. WLAN und eine
          E-Ladestation sind bei uns selbstverständlich. Bitte haben Sie
          Verständnis dafür, dass Haustiere und Rauchen im Haus nicht
          gestattet sind.
        </p>
      </div>

      <div v-reveal class="prosa">
        <h3>Garten, Deich und Meer</h3>
        <p>
          Frühstücken Sie in Ruhe auf der Terrasse im Garten. Gleich hinter
          der Pforte beginnt der Deich, wie gemacht für einen Spaziergang am
          Morgen. Zum Naturbadestrand und zum kleinen Hafen Tetenbüll-Spieker
          sind es nur 2,5 km. Ob Wattwandern, Radfahren, Kitesurfen oder
          einfach die Stille genießen: Hier findet jeder sein Urlaubsglück.
          Und wenn Ihnen nach etwas Trubel ist, sind Sie mit dem Auto schnell
          in Husum oder St. Peter-Ording.
        </p>
      </div>

      <div v-reveal class="prosa">
        <h3>Persönlich für Sie da</h3>
        <p>
          Bei uns landen Sie in keinem Callcenter. Wir putzen das Haus selbst,
          wohnen gleich nebenan auf dem Hof und sind während Ihres Aufenthalts
          jederzeit für Sie da. 25 Gäste haben uns bisher mit 4,98 Sternen
          bewertet. Besonders oft loben sie die Sauberkeit, die Ruhe und die
          persönliche Betreuung, und darüber freuen wir uns sehr.
        </p>
        <p>
          Die Buchung ist unkompliziert: 20 % Anzahlung, der Rest vier Wochen
          vor Anreise. Unsere Stornobedingungen sind fair gestaffelt, eine
          Reiserücktrittsversicherung empfehlen wir trotzdem. Wir freuen uns
          darauf, Sie bald bei uns an der Nordsee zu begrüßen!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ResponsivePicture from "./ResponsivePicture.vue";
import SeehundImg from "../assets/seehund.jpg?picture";
</script>

<style scoped>
/* Das Foto schwebt rechts und ragt über den Streifen hinaus in die Lücke.
   shape-outside lässt die Zeilen dem Kreis folgen. */
.about {
  --rand: 2rem; /* = px-8 */
  --ueberstand: 1.5rem; /* so weit ragt das Foto in die Lücke */
}
@media (min-width: 1280px) {
  .about {
    --rand: 3.5rem; /* = xl:px-14 */
    /* Das Foto ragt etwa zur Hälfte in die Lücke. Die Lücke wächst von
       ca. 75px (1280px Fenster) bis ca. 200px (1920px), daher wächst
       auch der Überstand mit der Fensterbreite. */
    --ueberstand: clamp(1.75rem, 9.6vw - 5.5rem, 5.5rem);
  }
}
.portrait {
  float: right;
  width: 13.75rem;
  height: 13.75rem;
  margin-right: calc(-1 * var(--rand) - var(--ueberstand));
  margin-left: 1.5rem;
  margin-bottom: 0.75rem;
  shape-outside: circle(50%);
  shape-margin: 1.25rem;
  background-color: #fff1d5;
}

/* Seehund mittig in den Kreis rücken */
:deep(.seehund) {
  object-position: 50% 62%;
  transform: scale(1.35);
}

.prosa p {
  font-size: 1.125rem;
  line-height: 1.75;
  text-wrap: pretty;
}
@media (min-width: 1700px) {
  /* Breiter Streifen: größere Schrift hält die Zeilen angenehm kurz */
  .prosa p {
    font-size: 1.1875rem;
  }
}
.prosa p + p {
  margin-top: 1rem;
}
.prosa h3 {
  margin-top: 2.25rem;
  margin-bottom: 0.5rem;
  font-family: "Berkshire Swash", cursive;
  font-size: 1.75rem;
  line-height: 1.2;
  color: #456882;
}
</style>
