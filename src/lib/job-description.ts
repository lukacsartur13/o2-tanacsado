/**
 * Munkaköri leírás minta – a weboldalon megjelenő és letölthető sablon
 * közös forrása. A `public/letoltes/munkakori-leiras-minta.txt` fájlt a
 * `toPlainText()` kimenetével tartjuk szinkronban.
 */

export interface TemplateSection {
  title: string;
  /** Kitöltési útmutató (a mintán szürkén). */
  hint: string;
  /** Példaszöveg vagy kitöltendő sorok. */
  lines: string[];
}

export const JOB_DESCRIPTION_TEMPLATE: { title: string; sections: TemplateSection[] } = {
  title: "Munkaköri leírás",
  sections: [
    {
      title: "1. Alapadatok",
      hint: "A munkaszerződéssel megegyező adatok.",
      lines: [
        "Munkakör megnevezése: ……………………………………",
        "Szervezeti egység: ……………………………………",
        "Közvetlen felettes (munkakör): ……………………………………",
        "A munkakör betöltője: ……………………………………",
        "Munkavégzés helye: ……………………………………",
        "Érvényesség kezdete: ……………………………………",
      ],
    },
    {
      title: "2. A munkakör célja",
      hint: "Egy-két mondat: miért létezik ez a munkakör a cégben, milyen eredményért felel.",
      lines: [
        "Példa: A munkakör célja a beérkező vevői rendelések pontos és határidőre történő feldolgozása, a vevőkkel való kapcsolattartás és a kiszállítás koordinálása a raktárral.",
      ],
    },
    {
      title: "3. Fő feladatok",
      hint: "5–8 pont, a legfontosabbtól a kevésbé fontos felé. A lényeges tevékenységek, nem minden apró teendő.",
      lines: [
        "1. ……………………………………",
        "2. ……………………………………",
        "3. ……………………………………",
        "4. ……………………………………",
        "5. ……………………………………",
        "6. ……………………………………",
        "Egyéb, a munkakörhöz kapcsolódó, a közvetlen felettes által meghatározott eseti feladatok ellátása.",
      ],
    },
    {
      title: "4. Hatáskör és döntési jogkör",
      hint: "Miről dönthet a munkakör betöltője egyedül, mihez kell jóváhagyás, milyen összeghatárig, mit írhat alá.",
      lines: [
        "Önállóan dönt: ……………………………………",
        "Felettesi jóváhagyással dönt: ……………………………………",
        "Kötelezettségvállalási / aláírási jogkör: ……………………………………",
      ],
    },
    {
      title: "5. Felelősség",
      hint: "Miért felel: eredmény, minőség, határidő, eszközök, adatok, jogszabályi megfelelés. Kinek számol be, milyen rendszerességgel.",
      lines: [
        "Felelős: ……………………………………",
        "Beszámolási kötelezettség: ……………………………………",
      ],
    },
    {
      title: "6. Kapcsolatok",
      hint: "Kivel dolgozik együtt a cégen belül és kívül.",
      lines: [
        "Belső kapcsolatok: ……………………………………",
        "Külső kapcsolatok (ügyfelek, beszállítók, hatóságok): ……………………………………",
      ],
    },
    {
      title: "7. Helyettesítés",
      hint: "Ki helyettesíti, és kit helyettesít távollét esetén.",
      lines: [
        "A munkakör betöltőjét helyettesíti: ……………………………………",
        "A munkakör betöltője helyettesíti: ……………………………………",
      ],
    },
    {
      title: "8. A munkakör betöltésének követelményei",
      hint: "Csak azt, ami a munkakörhöz ténylegesen szükséges.",
      lines: [
        "Végzettség: ……………………………………",
        "Szakmai tapasztalat: ……………………………………",
        "Szakmai ismeretek, rendszerek: ……………………………………",
        "Nyelvtudás, jogosítvány (ha releváns): ……………………………………",
        "Személyes kompetenciák: ……………………………………",
      ],
    },
    {
      title: "9. Teljesítménymutatók, elvárt eredmények",
      hint: "2–4 mérőszám vagy konkrét elvárás, amelyből látszik, hogy a munkakör betöltője jól végzi a munkáját.",
      lines: [
        "1. ……………………………………",
        "2. ……………………………………",
        "3. ……………………………………",
      ],
    },
    {
      title: "10. Munkakörülmények",
      hint: "Munkarend, műszak, utazás, fizikai terhelés, eszközök – ha a munkakörnél lényeges.",
      lines: ["……………………………………"],
    },
    {
      title: "11. Záradék",
      hint: "A munkaköri leírás a munkaszerződés melléklete. A munkáltató a munkakör lényegének megtartásával módosíthatja; a módosításról a munkavállalót írásban tájékoztatja.",
      lines: [
        "Kelt: ……………………………………",
        "Munkáltató képviselője: ……………………………………",
        "A munkaköri leírást megismertem és átvettem. Munkavállaló: ……………………………………",
      ],
    },
  ],
};

/** Egyszerű szöveges változat vágólapra és letöltéshez. */
export function toPlainText() {
  const t = JOB_DESCRIPTION_TEMPLATE;
  const out: string[] = [t.title.toUpperCase(), "=".repeat(t.title.length), ""];
  for (const s of t.sections) {
    out.push(s.title, "-".repeat(s.title.length), `(${s.hint})`, "");
    out.push(...s.lines, "");
  }
  out.push("Forrás: O2 Tanácsadó – https://o2tanacsado.hu/munkakori-leiras-minta/");
  return out.join("\n");
}
