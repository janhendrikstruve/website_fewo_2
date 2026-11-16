import { fileURLToPath, URL } from "node:url";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import { getIconData } from "@iconify/utils";

import { defineConfig, loadEnv, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { imagetools } from "vite-imagetools";

// Bilder: `import foto from "../assets/foto.jpg?picture"` erzeugt beim Build
// AVIF, WebP und JPEG in allen Breiten unten – nie größer als das Original
// (zu große Breiten kürzt vite-imagetools automatisch). Welche Datei geladen
// wird, entscheidet der Browser anhand von `sizes` in <ResponsivePicture>.
// Die Originale in src/assets bleiben unverändert.
const BILD_BREITEN = "480;800;1200;1600;2000;2560";

function bildVarianten(url: URL) {
  if (!url.searchParams.has("picture")) return new URLSearchParams();
  return new URLSearchParams({
    w: BILD_BREITEN,
    format: "avif;webp;jpg",
    as: "picture",
  });
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Proxy für den Belegungskalender: /belegung-quelle → Nextcloud-Freigabe.
  // Nötig, weil Nextcloud den direkten Abruf von einer fremden Website (CORS)
  // meist nicht erlaubt. Gilt nur für den Dev-Server; im Hosting muss
  // derselbe Pfad ebenfalls auf die Freigabe zeigen.
  // Ohne BELEGUNG_QUELLE liefert der Dev-Server stattdessen mock/Belegung.xlsx.
  const proxy: Record<string, object> = {};
  const plugins = [
    vue(),
    vueJsx(),
    imagetools({ defaultDirectives: bildVarianten }),
    lokaleIcons(),
  ];
  if (env.BELEGUNG_QUELLE) {
    const quelle = new URL(env.BELEGUNG_QUELLE);
    proxy["/belegung-quelle"] = {
      target: quelle.origin,
      changeOrigin: true,
      rewrite: () => quelle.pathname + quelle.search,
    };
  } else {
    plugins.push(mockBelegung());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: true, // alternativ: '0.0.0.0'
      port: 5173,
      proxy,
    },
  };
});

function mockBelegung(): Plugin {
  const datei = fileURLToPath(new URL("./mock/Belegung.xlsx", import.meta.url));
  return {
    name: "mock-belegung",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/belegung-quelle", (_req, res) => {
        res.setHeader(
          "content-type",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        );
        res.setHeader("cache-control", "no-store");
        res.end(readFileSync(datei));
      });
    },
  };
}

// Icons lokal statt von api.iconify.design (schneller, kein Ausfallrisiko,
// keine IP-Übertragung an Dritte – DSGVO). Durchsucht src/ nach Namen wie
// "material-symbols:home-rounded" und stellt genau diese Icons als
// `virtual:icons` bereit; src/main.ts registriert sie vor dem Start.
// Neues Icon-Set? `npm i -D @iconify-json/<prefix>` und unten eintragen.
const ICON_SETS = ["material-symbols", "logos", "lineicons"];

function lokaleIcons(): Plugin {
  const id = "virtual:icons";
  const require = createRequire(import.meta.url);
  const src = fileURLToPath(new URL("./src", import.meta.url));
  const muster = new RegExp(`["'\`](${ICON_SETS.join("|")}):([a-z0-9-]+)["'\`]`, "g");

  function dateien(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const pfad = join(dir, e.name);
      if (e.isDirectory()) return dateien(pfad);
      return /\.(vue|ts|js)$/.test(e.name) ? [pfad] : [];
    });
  }

  return {
    name: "lokale-icons",
    resolveId: (i) => (i === id ? "\0" + id : undefined),
    load(i) {
      if (i !== "\0" + id) return;
      const icons: Record<string, object> = {};
      for (const datei of dateien(src)) {
        this.addWatchFile(datei);
        for (const [, prefix, name] of readFileSync(datei, "utf8").matchAll(muster)) {
          const set = require(`@iconify-json/${prefix}/icons.json`);
          const daten = getIconData(set, name);
          if (!daten) this.warn(`Icon nicht gefunden: ${prefix}:${name}`);
          else icons[`${prefix}:${name}`] = { width: set.width, height: set.height, ...daten };
        }
      }
      return `export default ${JSON.stringify(icons)};`;
    },
  };
}
