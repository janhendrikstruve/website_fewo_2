<template>
  <section class="flex flex-col justify-center min-h-screen bg-[#FFF1D5]">
    <div class="grid grid-cols-5 items-center relative">
      <h2
        class="text-center text-5xl text-[#456882] sm:text-6xl font-berk col-start-3"
      >
        Moin!
      </h2>
      <div class="absolute -right-[6.25rem] -top-12 col-start-5 w-[13.75rem] h-[13.75rem] rounded-full border-4 border-[#D2C1B6] overflow-hidden">
        <!-- Kreis 13,75rem, Bild darin um 150 % vergrößert -->
        <ResponsivePicture
          :picture="MamaPapaImg"
          alt="Susanne und Detlef Struve"
          sizes="21rem"
          img-class="w-full h-full object-cover scale-150 rounded-full"
        />
      </div>
    </div>

    <p class="text-base mt-36 mx-10 text-[#1B3C53] text-justify">
      Wir sind Susanne und Detlef Struve, und wir heißen Sie herzlich willkommen
      in unserem Ferienhaus Opa Hans! Das ehemalige Zuhause von Opa Hans haben
      wir mit viel Liebe zum Detail modernisiert, ohne seinen ursprünglichen
      Charme zu verlieren. Es liegt völlig allein im malerischen Wasserkoog,
      umgeben von reetgedeckten Häusern – eine Kulisse wie aus einem Film. Auf
      200 m² erwarten Sie drei Schlafzimmer und drei Bäder für maximal sieben
      Gäste. Das gesamte Haus ist barrierefrei und ebenerdig, mit einem
      rollstuhlgerechten Bad. Ein echtes Schmuckstück ist das Familienzimmer mit
      einem riesigen XXL-Bett (270 x 200 cm) und eigenem Fernseher – hier
      schlafen drei Personen bequem. Für kleine Kinder haben wir ein Spielzimmer
      und stellen auf Wunsch Babyausstattung bereit, damit Sie mit leichtem
      Gepäck anreisen können. Die Küche ist komplett ausgestattet
      (Geschirrspüler, Waschmaschine), WLAN und eine E-Ladestation sind
      selbstverständlich. Haustiere und Rauchen sind nicht gestattet.
      <br /><br />
      Der Garten mit Terrasse lädt zum Frühstücken ein, und direkt hinter der
      Pforte beginnt der Deich – ideal für morgendliche Spaziergänge. Der
      herrliche Naturbadestrand und der kleine Hafen Tetenbüll-Spieker sind nur
      2,5 km entfernt. Ob Wattwandern, Radfahren, Kitesurfen oder einfach die
      Stille genießen: Hier findet jeder sein Urlaubsglück. Husum und St.
      Peter-Ording sind in kurzer Autofahrt zu erreichen.
      <br /><br />
      Wir putzen das Haus persönlich und sind während Ihres Aufenthalts
      jederzeit für Sie da – kein Callcenter, sondern direkter, familiärer
      Kontakt. Buchen Sie unkompliziert mit 20 % Anzahlung und Restzahlung vier
      Wochen vor Anreise. Unsere Stornobedingungen sind fair gestaffelt, und wir
      empfehlen eine Reiserücktrittsversicherung. 25 begeisterte Gäste haben uns
      mit 4,98 Sternen bewertet; sie heben immer wieder die Sauberkeit, die Ruhe
      und die persönliche Betreuung hervor. Überzeugen Sie sich selbst – wir
      freuen uns auf Ihren Besuch!
    </p>
  </section>
</template>

<script setup>
import ResponsivePicture from "./ResponsivePicture.vue";
import MamaPapaImg from "../assets/mama_papa.jpg?picture";
</script>
