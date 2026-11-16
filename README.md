# Ferienhaus Opa Hans – Website

Vue 3 + Vite + Tailwind.

## Schriften

Alle Schriften liegen lokal im Projekt (Pakete von [Fontsource](https://fontsource.org/))
und werden beim Build mit ausgeliefert – kein Google Fonts, keine externen Anfragen.

| Einsatz | Schrift | Paket | Verwendung |
| --- | --- | --- | --- |
| Überschriften, Navbar, Logo | **Berkshire Swash** (400) | `@fontsource/berkshire-swash` | Klasse `font-heading` (definiert in `src/assets/style.css`) |
| Fließtext | **Lato** (400, 400 kursiv, 700) | `@fontsource/lato` | Standard für `body` (`src/assets/style.css`) |

Importiert werden die Schriften in `src/App.vue` (Berkshire Swash) und `src/main.ts` (Lato).
Die Schriften sind mit `font-display: swap` eingebunden: Bis die Datei geladen ist,
zeigt der Browser kurz eine Ersatzschrift. Sieht eine Überschrift im Dev-Server
„falsch“ aus, ist meist die Datei noch nicht geladen – Seite neu laden.

## Icons

Icons (`<Icon icon="material-symbols:…">` aus `@iconify/vue`) werden **nicht** von
`api.iconify.design` geladen. Das Vite-Plugin `lokaleIcons()` in `vite.config.ts`
sucht alle verwendeten Icon-Namen in `src/` und bündelt nur diese. Neues Icon-Set:
`npm i -D @iconify-json/<prefix>` und den Prefix in `ICON_SETS` eintragen.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
