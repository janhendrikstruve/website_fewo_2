// Mini-Anbindung an einen lokalen ONLYOFFICE Document Server (nur zum Testen).
//
// Öffnet mock/Belegung.xlsx im ONLYOFFICE-Editor im Browser und schreibt
// gespeicherte Änderungen zurück in die Datei. Die Website liest dieselbe
// Datei im Dev-Server unter /belegung-quelle.
//
// Start: npm run mock:office   →   http://<server>:5174/
//
// Der Document Server wird über denselben Port mit ausgeliefert (Reverse
// Proxy), damit der Editor auch funktioniert, wenn nur Port 5174
// weitergeleitet wird (z. B. VS-Code-Portweiterleitung auf localhost).
//
// Umgebungsvariablen (optional):
//   OFFICE_PORT       Port dieses Servers                (Standard 5174)
//   ONLYOFFICE_PORT   Port des Document Servers          (Standard 80)
//   ONLYOFFICE_JWT    JWT-Secret, sonst aus mock/.office-jwt-secret

import { createServer, request as httpRequest } from "node:http";
import { connect } from "node:net";
import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import { readFileSync, statSync, writeFileSync, renameSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const FILE = join(here, "Belegung.xlsx");
const PORT = Number(process.env.OFFICE_PORT ?? 5174);
const DS_PORT = Number(process.env.ONLYOFFICE_PORT ?? 80);
const SECRET =
  process.env.ONLYOFFICE_JWT ??
  readFileSync(join(here, ".office-jwt-secret"), "utf8").trim();

// Der Document Server läuft mit --network host, erreicht uns also lokal.
const INTERN = `http://127.0.0.1:${PORT}`;

// ---------- JWT (HS256), so wie ONLYOFFICE es erwartet ----------
const b64url = (buf) => Buffer.from(buf).toString("base64url");

function signJwt(payload) {
  const head = b64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = b64url(JSON.stringify(payload));
  const sig = createHmac("sha256", SECRET).update(`${head}.${body}`).digest();
  return `${head}.${body}.${b64url(sig)}`;
}

function verifyJwt(token) {
  const [head, body, sig] = String(token ?? "").split(".");
  if (!head || !body || !sig) return null;
  const expected = createHmac("sha256", SECRET)
    .update(`${head}.${body}`)
    .digest();
  const given = Buffer.from(sig, "base64url");
  if (given.length !== expected.length || !timingSafeEqual(given, expected))
    return null;
  return JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
}

// Neuer Schlüssel pro Dateiversion, sonst zeigt ONLYOFFICE eine alte Kopie.
function documentKey() {
  const st = statSync(FILE);
  return createHash("sha256")
    .update(`${st.mtimeMs}-${st.size}`)
    .digest("hex")
    .slice(0, 32);
}

function editorPage() {
  const config = {
    documentType: "cell",
    document: {
      fileType: "xlsx",
      key: documentKey(),
      title: "Belegung.xlsx",
      url: `${INTERN}/_mock/datei`,
      permissions: { edit: true, download: true },
    },
    editorConfig: {
      callbackUrl: `${INTERN}/_mock/callback`,
      lang: "de",
      region: "de-DE",
      user: { id: "gastgeber", name: "Gastgeber" },
      customization: { forcesave: true, autosave: true },
    },
  };
  config.token = signJwt(config);

  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Belegung bearbeiten</title>
  <style>html,body{margin:0;height:100%}#editor{height:100%}</style>
</head>
<body>
  <div id="editor"></div>
  <script src="/web-apps/apps/api/documents/api.js"></script>
  <script>
    if (typeof DocsAPI === "undefined") {
      document.body.innerHTML =
        "<p style='font:16px sans-serif;padding:2em'>ONLYOFFICE ist nicht erreichbar " +
        "(erwartet auf 127.0.0.1:${DS_PORT}). " +
        "Läuft der Container? (sudo podman ps)</p>";
    } else {
      new DocsAPI.DocEditor("editor", ${JSON.stringify(config)});
    }
  </script>
</body>
</html>`;
}

async function readBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return Buffer.concat(chunks).toString("utf8");
}

// Status 2 = alle haben das Dokument geschlossen, 6 = Speichern (Strg+S)
async function handleCallback(req, res) {
  const raw = JSON.parse((await readBody(req)) || "{}");
  const data = verifyJwt(raw.token);
  if (!data) {
    console.warn("Callback mit ungültigem Token abgelehnt");
    res.writeHead(403, { "content-type": "application/json" });
    return res.end(JSON.stringify({ error: 1 }));
  }

  if ((data.status === 2 || data.status === 6) && data.url) {
    const dl = await fetch(data.url);
    if (!dl.ok) throw new Error(`Download fehlgeschlagen: HTTP ${dl.status}`);
    const tmp = `${FILE}.tmp`;
    writeFileSync(tmp, Buffer.from(await dl.arrayBuffer()));
    renameSync(tmp, FILE);
    console.log(`${new Date().toLocaleTimeString("de-DE")} Belegung.xlsx gespeichert`);
  }
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: 0 }));
}

// ---------- Reverse Proxy zum Document Server ----------
function forwardHeaders(req) {
  return {
    ...req.headers,
    host: `127.0.0.1:${DS_PORT}`,
    "x-forwarded-host": req.headers.host ?? `localhost:${PORT}`,
    "x-forwarded-proto": "http",
  };
}

function proxyHttp(req, res) {
  const up = httpRequest(
    {
      host: "127.0.0.1",
      port: DS_PORT,
      method: req.method,
      path: req.url,
      headers: forwardHeaders(req),
    },
    (upRes) => {
      res.writeHead(upRes.statusCode ?? 502, upRes.headers);
      upRes.pipe(res);
    },
  );
  up.on("error", () => {
    if (!res.headersSent) res.writeHead(502);
    res.end("ONLYOFFICE nicht erreichbar");
  });
  req.pipe(up);
}

// WebSocket-Verbindungen (Co-Editing) roh durchreichen
function proxyUpgrade(req, socket, head) {
  const up = connect(DS_PORT, "127.0.0.1", () => {
    const headers = forwardHeaders(req);
    let raw = `${req.method} ${req.url} HTTP/1.1\r\n`;
    for (const [k, v] of Object.entries(headers)) {
      for (const val of [].concat(v)) raw += `${k}: ${val}\r\n`;
    }
    up.write(raw + "\r\n");
    if (head?.length) up.write(head);
    up.pipe(socket);
    socket.pipe(up);
  });
  const close = () => {
    up.destroy();
    socket.destroy();
  };
  up.on("error", close);
  socket.on("error", close);
}

const server = createServer(async (req, res) => {
  try {
    const path = new URL(req.url, "http://x").pathname;
    if (req.method === "GET" && path === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      return res.end(editorPage());
    }
    if (req.method === "GET" && path === "/_mock/datei") {
      res.writeHead(200, {
        "content-type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "cache-control": "no-store",
      });
      return res.end(readFileSync(FILE));
    }
    if (req.method === "POST" && path === "/_mock/callback") {
      return await handleCallback(req, res);
    }
    return proxyHttp(req, res);
  } catch (e) {
    console.error(e);
    res.writeHead(500, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: 1 }));
  }
});
server.on("upgrade", proxyUpgrade);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Editor: http://localhost:${PORT}/  (Datei: ${FILE})`);
});
