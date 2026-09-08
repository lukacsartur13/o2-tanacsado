// A letölthető munkaköri leírás mintát a közös forrásból (src/lib/job-description.ts)
// generálja. Futtatás: node scripts/write-template.mjs  (Node 22.18+ / 24: natív TS-olvasás)
import { writeFileSync, mkdirSync } from "node:fs";

const { toPlainText } = await import("../src/lib/job-description.ts");
const dir = new URL("../public/letoltes/", import.meta.url);
mkdirSync(dir, { recursive: true });
writeFileSync(new URL("munkakori-leiras-minta.txt", dir), toPlainText() + "\n");
console.log("public/letoltes/munkakori-leiras-minta.txt frissítve");
