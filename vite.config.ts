import { fileURLToPath, URL } from "node:url";
import { readFileSync } from "node:fs";

import { defineConfig, loadEnv, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Proxy für den Belegungskalender: /belegung-quelle → Nextcloud-Freigabe.
  // Nötig, weil Nextcloud den direkten Abruf von einer fremden Website (CORS)
  // meist nicht erlaubt. Gilt nur für den Dev-Server; im Hosting muss
  // derselbe Pfad ebenfalls auf die Freigabe zeigen.
  // Ohne BELEGUNG_QUELLE liefert der Dev-Server stattdessen mock/Belegung.xlsx.
  const proxy: Record<string, object> = {};
  const plugins = [vue(), vueJsx()];
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
