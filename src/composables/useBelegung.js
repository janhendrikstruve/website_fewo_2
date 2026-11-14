import { ref } from "vue";

/**
 * Liest die Belegung aus einer Tabelle (CSV oder Excel .xlsx), z. B. einer
 * Nextcloud-Freigabe. Die Datei wird über VITE_BELEGUNG_URL abgerufen
 * (empfohlen: /belegung-quelle, der Proxy auf die Nextcloud-Freigabe).
 *
 * Erwartetes Format (erste Zeile = Überschriften). Bei .xlsx wird das Blatt
 * "Belegung" gelesen, sonst das erste Blatt:
 *   Anreise    | Abreise
 *   14.06.2027 | 21.06.2027
 *
 * Weitere Spalten (z. B. Notizen) werden ignoriert. Daten dürfen echte
 * Datumszellen oder Text als TT.MM.JJJJ bzw. JJJJ-MM-TT sein.
 */
const QUELLE_URL = import.meta.env.VITE_BELEGUNG_URL;

export function useBelegung() {
  const buchungen = ref([]); // [{ start: Date, end: Date }]
  const loading = ref(false);
  const error = ref(null);
  const configured = Boolean(QUELLE_URL);

  async function laden() {
    if (!configured) return;
    loading.value = true;
    error.value = null;
    try {
      const res = await fetch(QUELLE_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      buchungen.value = await parseDatei(await res.arrayBuffer());
    } catch (e) {
      console.error("Belegung konnte nicht geladen werden:", e);
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  return { buchungen, loading, error, configured, laden };
}

/** Erkennt das Format am Inhalt: .xlsx ist ein ZIP-Archiv (beginnt mit "PK"). */
async function parseDatei(buffer) {
  const bytes = new Uint8Array(buffer, 0, Math.min(2, buffer.byteLength));
  if (bytes[0] === 0x50 && bytes[1] === 0x4b) {
    // Excel-Bibliothek nur laden, wenn sie gebraucht wird
    const { default: readXlsxFile } = await import("read-excel-file/browser");
    const sheets = await readXlsxFile(buffer);
    const sheet =
      sheets.find((s) => s.sheet.trim().toLowerCase() === "belegung") ??
      sheets[0];
    return parseRows(sheet ? sheet.data : []);
  }
  return parseBuchungen(new TextDecoder("utf-8").decode(buffer));
}

export function parseBuchungen(csv) {
  return parseRows(parseCsv(csv));
}

function istLeer(c) {
  return c === null || c === undefined || String(c).trim() === "";
}

function parseRows(allRows) {
  const rows = allRows.filter((r) => r.some((c) => !istLeer(c)));
  if (rows.length === 0) return [];

  const header = rows[0].map((h) => String(h ?? "").trim().toLowerCase());
  let iStart = header.indexOf("anreise");
  let iEnd = header.indexOf("abreise");
  let dataRows = rows.slice(1);
  if (iStart === -1 || iEnd === -1) {
    // Keine passenden Überschriften: erste zwei Spalten verwenden
    iStart = 0;
    iEnd = 1;
    if (parseDatum(rows[0][0])) dataRows = rows;
  }

  const result = [];
  for (const row of dataRows) {
    const start = parseDatum(row[iStart]);
    const end = parseDatum(row[iEnd]);
    if (!start || !end || end < start) continue;
    result.push({ start, end });
  }
  return result;
}

function parseDatum(value) {
  if (value instanceof Date) {
    // Excel-Datumszellen kommen als Mitternacht UTC an
    return makeDate(
      value.getUTCFullYear(),
      value.getUTCMonth() + 1,
      value.getUTCDate(),
    );
  }
  if (istLeer(value)) return null;
  const s = String(value).trim();
  let m = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{2}|\d{4})$/);
  if (m) {
    const year = m[3].length === 2 ? 2000 + Number(m[3]) : Number(m[3]);
    return makeDate(year, Number(m[2]), Number(m[1]));
  }
  m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) return makeDate(Number(m[1]), Number(m[2]), Number(m[3]));
  return null;
}

function makeDate(y, mo, d) {
  const date = new Date(y, mo - 1, d);
  // Ungültige Daten wie 31.02. aussortieren
  return date.getMonth() === mo - 1 && date.getDate() === d ? date : null;
}

/** Minimaler CSV-Parser (Komma-getrennt, Anführungszeichen erlaubt). */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}
