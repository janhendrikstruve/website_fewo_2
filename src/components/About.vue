<!-- Desktop: Die Gastgeber stellen sich vor. Das runde Foto ragt über den
     Rand des Streifens, der Text fließt um den Kreis herum. -->
<template>
  <section class="about px-8 pb-14 pt-16 xl:px-14">
    <div class="about-text mx-auto max-w-[44rem] text-[#1B3C53]">
      <div
        v-reveal
        class="portrait rounded-full border-4 border-[#D2C1B6] shadow-xl shadow-[#1B3C53]/20"
      >
        <!-- Kreis 13,75rem, Bild darin um 150 % vergrößert -->
        <ResponsivePicture
          :picture="MamaPapaImg"
          alt="Susanne und Detlef Struve"
          sizes="21rem"
          picture-class="block h-full w-full overflow-hidden rounded-full"
          img-class="h-full w-full scale-150 object-cover"
        />
      </div>

      <header v-reveal class="pb-8 pt-6 text-center">
        <p class="eyebrow">Ihre Gastgeber</p>
        <h2 class="mt-3 text-6xl text-[#456882] font-berk">Moin!</h2>
      </header>

      <div v-reveal class="prosa">
        <p>
          Wir sind Susanne und Detlef Struve, und wir heißen Sie herzlich
          willkommen in unserem Ferienhaus Opa Hans! Das ehemalige Zuhause von
          Opa Hans haben wir mit viel Liebe zum Detail modernisiert, ohne
          seinen ursprünglichen Charme zu verlieren. Es liegt völlig allein im
          malerischen Wasserkoog, umgeben von reetgedeckten Häusern – eine
          Kulisse wie aus einem Film.
        </p>
        <p>
          Auf 200 m² erwarten Sie drei Schlafzimmer und drei Bäder für maximal
          sieben Gäste. Das gesamte Haus ist barrierefrei und ebenerdig, mit
          einem rollstuhlgerechten Bad. Ein echtes Schmuckstück ist das
          Familienzimmer mit einem riesigen XXL-Bett (270 x 200 cm) und eigenem
          Fernseher – hier schlafen drei Personen bequem. Für kleine Kinder
          haben wir ein Spielzimmer und stellen auf Wunsch Babyausstattung
          bereit, damit Sie mit leichtem Gepäck anreisen können. Die Küche ist
          komplett ausgestattet (Geschirrspüler, Waschmaschine), WLAN und eine
          E-Ladestation sind selbstverständlich. Haustiere und Rauchen sind
          nicht gestattet.
        </p>
      </div>

      <div v-reveal class="prosa">
        <h3>Garten, Deich und Meer</h3>
        <p>
          Der Garten mit Terrasse lädt zum Frühstücken ein, und direkt hinter
          der Pforte beginnt der Deich – ideal für morgendliche Spaziergänge.
          Der herrliche Naturbadestrand und der kleine Hafen Tetenbüll-Spieker
          sind nur 2,5 km entfernt. Ob Wattwandern, Radfahren, Kitesurfen oder
          einfach die Stille genießen: Hier findet jeder sein Urlaubsglück.
          Husum und St. Peter-Ording sind in kurzer Autofahrt zu erreichen.
        </p>
      </div>

      <div v-reveal class="prosa">
        <h3>Persönlich für Sie da</h3>
        <p>
          Wir putzen das Haus persönlich und sind während Ihres Aufenthalts
          jederzeit für Sie da – kein Callcenter, sondern direkter, familiärer
          Kontakt. Buchen Sie unkompliziert mit 20 % Anzahlung und Restzahlung
          vier Wochen vor Anreise. Unsere Stornobedingungen sind fair
          gestaffelt, und wir empfehlen eine Reiserücktrittsversicherung. 25
          begeisterte Gäste haben uns mit 4,98 Sternen bewertet; sie heben immer
          wieder die Sauberkeit, die Ruhe und die persönliche Betreuung hervor.
          Überzeugen Sie sich selbst – wir freuen uns auf Ihren Besuch!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ResponsivePicture from "./ResponsivePicture.vue";
import MamaPapaImg from "../assets/mama_papa.jpg?picture";
</script>

<style scoped>
/* Das Foto schwebt rechts und ragt über den Streifen hinaus in die Lücke.
   shape-outside lässt die Zeilen dem Kreis folgen. */
.about {
  --rand: 2rem; /* = px-8 */
  --ueberstand: 3rem; /* so weit ragt das Foto in die Lücke */
}
@media (min-width: 1280px) {
  .about {
    --rand: 3.5rem; /* = xl:px-14 */
    --ueberstand: 4rem;
  }
}
@media (min-width: 1700px) {
  .about {
    --ueberstand: 6.25rem;
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
