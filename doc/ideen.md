# Was auf der Seite noch fehlt

Stand: 16.11.2026. Sortiert nach Wichtigkeit.

## Rechtlich nötig

- [ ] **Datenschutzerklärung** – gibt es noch nicht. Für eine Website in
  Deutschland Pflicht, auch ohne Cookies: Der Server speichert Zugriffe, die
  Seite verlinkt auf Google Maps und Apple Karten und lädt den
  Belegungskalender von Nextcloud. Gehört neben das Impressum und in den
  Footer. Text sollte jemand mit Ahnung prüfen.

## Was Gäste suchen und nicht finden

- [ ] **Preise** – meist die erste Frage. Preis pro Nacht, Saisonzeiten,
  Endreinigung, Kurabgabe, Mindestaufenthalt. Spart viele Rückfragen.
  In `src/views/HomeView.vue` ist „Preise und Buchung“ schon als fehlender
  Menüpunkt vermerkt.
- [ ] **Ausstattungsliste** – bisher nur Eckdaten (WLAN, E-Ladestation).
  Interessant: Küche (Spülmaschine, Kaffeemaschine), Waschmaschine,
  Fernseher, Terrasse, Grill, Parkplatz, Bettwäsche und Handtücher,
  Babybett und Hochstuhl. Als kompakte Liste mit Icons.
- [ ] **Grundriss oder Zimmerübersicht** – welche Betten in welchem Zimmer
  stehen. Bei sieben Gästen und einem barrierefreien Haus wichtig.
- [ ] **Bewertungen** – „4,98 Sterne von 25 Gästen“ steht nur im Fließtext
  unter „Über uns“. Zwei, drei kurze Zitate von Gästen, gut sichtbar
  platziert, schaffen Vertrauen.
- [ ] **Anfrageformular** – bisher nur Telefon und E-Mail. Ein Formular mit
  Anreise, Abreise, Personenzahl und Nachricht senkt die Hürde.
  Braucht ein Backend oder einen Formular-Dienst.

## Gut zu haben

- [ ] **Umgebung und Ausflugsziele** – St. Peter-Ording, Husum, Westerhever
  Leuchtturm, Wattenmeer, Radwege, gern mit Entfernungen. Hilft auch bei
  Google.
- [ ] **FAQ** – An- und Abreisezeiten, Haustiere (nein), Stornierung,
  Anzahlung. Einiges steht schon im Text, ist dort aber schwer zu finden.

## Technik und Kleinigkeiten

- [ ] **Vorschau für WhatsApp und Facebook** – in `index.html` fehlen
  `og:`-Tags, ein geteilter Link zeigt deshalb kein Bild.
- [ ] **Strukturierte Daten** (Schema.org `LodgingBusiness`) – damit kann
  Google Adresse, Bewertung usw. direkt in den Suchergebnissen zeigen.
- [ ] **Favicon** – nur `favicon.ico`, kein Icon für Apple-Geräte oder
  hochauflösende Bildschirme. Die Möwen würden sich anbieten.
- [ ] **Du und Sie gemischt** – bei Standort steht „Hier findest du uns“,
  sonst wird überall gesiezt.
