/**
 * Welcome e-mail sorozat az önellenőrző kérdéssor kitöltőinek, az
 * „O2web: welcome email sorozat” dokumentum (2026. október 14.) szerint,
 * átírás nélkül.
 *
 * Az 1. levél (az eredmény) a kitöltéskor azonnal kimegy az /api/kerdessor
 * útvonalon. A 2–5. levél időzített kiküldéséhez e-mail-automatizáló
 * szolgáltatás kell (a weboldalnak nincs ütemezője és leiratkozáskezelése);
 * a szövegük itt van, onnan tölthető fel.
 *
 * Jelölők: {{keresztnév}}, {{pontszám}}, {{eredmény_link}}, {{értékelés}},
 * {{kapcsolat_link}}, {{kérdéssor_link}}.
 */
import { escapeHtml } from "./mail";

export interface WelcomeEmail {
  /** A kitöltés utáni nap, amikor a levél kimegy (0 = azonnal). */
  day: number;
  /** Tárgy 1 és Tárgy 2 (A/B változat). */
  subjects: [string, string];
  preheader: string;
  greeting?: string;
  paragraphs: string[];
  signature: string;
  ps: string;
}

export const WELCOME_SERIES: WelcomeEmail[] = [
  {
    day: 0,
    subjects: ["{{keresztnév}}, itt az eredményed", "{{pontszám}} pont a 36-ból: mit jelent ez a cégeden?"],
    preheader: "Az értékelésed és egy állítás, amin érdemes elidőzni.",
    greeting: "Szia {{keresztnév}},",
    paragraphs: [
      "köszönjük, hogy kitöltötted a kérdéssort. {{pontszám}} pontot értél el a 36-ból. Az értékelésed itt találod: {{eredmény_link}}",
      "{{értékelés}}",
      "Egy dolgot érdemes megnézned: melyik állításnál jelöltél 3 pontot. Valószínűleg ez az ügy viszi el a leginkább az energiádat.",
      "Tibor és Ádám vagyunk. 25 éve vezetjük együtt a saját informatikai cégünket, ahol a tulajdonosok napi jelenléte nélkül is jól megy a munka. Cégtulajdonos vezetőkkel dolgozunk azon, hogy náluk is így legyen.",
      "Ha szeretnéd átbeszélni az eredményedet, ülj le velünk egy egy-másfél órás, díjmentes beszélgetésre. Elköteleződés nélkül, és közösen eldöntjük, van-e értelme együtt dolgozni: {{kapcsolat_link}}",
    ],
    signature: "Üdvözlettel: Tibor és Ádám",
    ps: "Ui.: Amit elmondasz nekünk, az közöttünk marad.",
  },
  {
    day: 2,
    subjects: ["Három hét nyaralás, és egyszer sem hívtak", "Mi történik, ha elmész három hétre?"],
    preheader: "2019 nyara, és amit akkor megtudtam a cégről.",
    paragraphs: [
      "2019 nyarán, a Covid előtt elmentem három hétre nyaralni.",
      "Egyszer sem hívott senki. Mire visszajöttem, minden rendben ment tovább.",
      "Akkor jöttem rá, hogy a cég nélkülem is megy, a kollégáim pedig szinte minden helyzetben jól döntenek önállóan. Ez nem egy hét alatt alakult ki. Az Onlinet-et 25 éve vezetjük hárman, és ennyi idő alatt kialakítottuk a kommunikáció, a döntések és a heti meetingek rendjét. Ezt adjuk tovább azoknak a cégvezetőknek, akikkel dolgozunk.",
      "A kérdéssor, amit kitöltöttél, azt nézi meg, hol függ a cég tőled, és hol megy már nélküled is. Bármi lett az eredményed, valószínűleg van néhány pont, ahol érdemes elindulni.",
      "Ha szeretnéd, ezt a te cégedre vetítve is megnézzük. Egy egy-másfél órás, díjmentes beszélgetésen kezdhetjük: {{kapcsolat_link}}",
    ],
    signature: "Tibor",
    ps: "Ui.: Gondold végig, mi állna le a cégedben, ha holnap elmennél három hétre. Ha van kedved, írd meg válaszban, szívesen elolvasom.",
  },
  {
    day: 5,
    subjects: ["Mi van, ha a kollégák hibáznak?", "Három kérdés a beszélgetés előtt"],
    preheader: "A hibákról, az időről és a díjról, egyenesen.",
    greeting: "Szia {{keresztnév}},",
    paragraphs: [
      "ha olvastad az előző levelet, lehet, hogy az jutott eszedbe: Tibornál ez működik, de nálam nem így lenne. Gyakran halljuk ezt, ezért három kérdésre előre válaszolunk, mielőtt leülnénk beszélgetni.",
      "Nem fognak nagyot hibázni, ha átadom a döntést? Hibázni fognak, és a kezdeti lassabb döntéseknek is ára van. Ezt nem szépítjük. Ezért nem egyszerre adunk át mindent. A felhatalmazás folyamat, amit lépésről lépésre, a te tempódban csinálunk végig.",
      "Mennyi idő, mire hátrébb léphetek? Az első látható változásokra 3–6 hónap után lehet számítani, a fokozatos hátrébb lépés nagyjából 1–1,5 év. Cégenként más, ezért a beszélgetésen a te cégedre vetítve nézzük meg.",
      "Mennyibe kerül? A havi együttműködés 490 000 Ft nettótól indul, a havi óraszámtól és a bevont vezetők számától függően. A céges diagnózis díjáról a személyes beszélgetések után adunk ajánlatot. Garanciát nem tudunk adni, mert az eredmény nagy része rajtad múlik. Cserébe a megállapodás előtt legalább két-három beszélgetést tartunk, hogy mindkét oldalon látszódjon, jó-e a közös munka.",
      "Ha ezek után is van kérdésed, vagy szeretnél leülni velünk: {{kapcsolat_link}}",
    ],
    signature: "Üdvözlettel: Tibor és Ádám",
    ps: "Ui.: Egyszerre legfeljebb 12–15 állandó megbízóval dolgozunk, mert a munka személyes jelenlétet igényel. Ezért fontos, hogy a beszélgetés elején kölcsönösen eldöntsük, van-e értelme a közös munkának.",
  },
  {
    day: 8,
    subjects: ["Egy negyedévbe telt, mire észrevettem", "Hol tarthatsz másfél év múlva?"],
    preheader: "2018, egy hatalmas projekt, és amit a heti üléseken nem kérdeztem meg.",
    paragraphs: [
      "Egy teljes negyedévbe telt, mire észrevettem.",
      "2018-ban megnyertünk egy hatalmas projektet, és az egyik vezető kollégánkra bíztuk, hogy vigye végig. A heti vezetői üléseken rendre beszámolt az állásról, nekem pedig nem volt több kérdésem. Egy negyedévnek kellett eltelnie, mire észrevettem, hogy mindent kézben tart, és mindenben önállóan tud dönteni.",
      "A cégvezetők gyakran nem látják, mi megy már nélkülük, mert a kollégák ritkán jeleznek vissza a főnöküknek. Ezért érdemes néha kívülről ránézni a cégre.",
      "Gondolj bele, hol tarthatsz másfél év múlva. A kollégák a mindennapi kérdéseket maguk viszik, a vezetői értekezleten döntések születnek, te pedig a stratégiával, az üzletfejlesztéssel vagy azzal foglalkozol, amire eddig nem jutott időd. Hogy mennyit lépsz hátrébb, te döntöd el: lehet teljes átadás vagy generációváltás, de lehet kisebb lépés is.",
      "Ha nem változtatsz, valószínűleg ugyanezek a kérdések érkeznek hozzád jövőre is. Egyedül is meg lehet csinálni, csak lassabb, és magányosabb, mert a cégben nincs kivel megbeszélni a nehézségeket.",
      "Pontosan ezért kezdünk mindig beszélgetéssel. Megnézzük, hol tart a te cégedben ez a folyamat, és mi lenne az első lépés: {{kapcsolat_link}}",
    ],
    signature: "Ádám",
    ps: "Ui.: A beszélgetés díjmentes, és elköteleződéssel nem jár. Amit elmondasz, az közöttünk marad.",
  },
  {
    day: 12,
    subjects: ["Ez az utolsó levél ebből a sorozatból", "{{keresztnév}}, ha később lesz aktuális"],
    preheader: "Egy-másfél óra, elköteleződés nélkül, amikor te szeretnéd.",
    greeting: "Szia {{keresztnév}},",
    paragraphs: [
      "ez az utolsó levél ebből a sorozatból. Ha gondolkodsz rajta, itt a lehetőség: egy egy-másfél órás, díjmentes beszélgetés, amiből közösen eldöntjük, van-e értelme együtt dolgozni: {{kapcsolat_link}}",
      "Ha ma nem aktuális, semmi gond. A kérdéssort bármikor újra kitöltheted, és megnézheted, mennyit változott az eredményed: {{kérdéssor_link}}",
      "Köszönjük, hogy időt szántál rá.",
    ],
    signature: "Üdvözlettel: Tibor és Ádám",
    ps: "Ui.: Ha nem szeretnél több levelet kapni tőlünk, a levél alján leiratkozhatsz.",
  },
];

export interface WelcomeVars {
  firstName: string;
  score: number;
  resultUrl: string;
  contactUrl: string;
  selfCheckUrl: string;
  /** Az eredménysávhoz tartozó értékelés: cím és bekezdések. */
  evaluation: { title: string; paragraphs: string[] };
}

const LINK_TOKENS = ["{{eredmény_link}}", "{{kapcsolat_link}}", "{{kérdéssor_link}}"] as const;

/** Egy levél kitöltése: tárgy (1. változat), előnézeti szöveg, szöveges és HTML törzs. */
export function renderWelcomeEmail(mail: WelcomeEmail, v: WelcomeVars) {
  const links: Record<(typeof LINK_TOKENS)[number], string> = {
    "{{eredmény_link}}": v.resultUrl,
    "{{kapcsolat_link}}": v.contactUrl,
    "{{kérdéssor_link}}": v.selfCheckUrl,
  };
  const fill = (s: string) =>
    s.replaceAll("{{keresztnév}}", v.firstName).replaceAll("{{pontszám}}", String(v.score));

  const textBlocks: string[] = [];
  const htmlBlocks: string[] = [];
  const p = (inner: string, style = "") => `<p style="margin:0 0 16px;${style}">${inner}</p>`;

  if (mail.greeting) {
    textBlocks.push(fill(mail.greeting));
    htmlBlocks.push(p(escapeHtml(fill(mail.greeting))));
  }

  for (const raw of mail.paragraphs) {
    if (raw === "{{értékelés}}") {
      textBlocks.push([v.evaluation.title, ...v.evaluation.paragraphs].join("\n\n"));
      htmlBlocks.push(
        `<div style="margin:0 0 16px;padding:16px 18px;background:#e4f6f5;border-radius:12px">` +
          p(`<strong>${escapeHtml(v.evaluation.title)}</strong>`, "color:#04504e") +
          v.evaluation.paragraphs.map((x) => p(escapeHtml(x))).join("") +
          `</div>`,
      );
      continue;
    }
    let text = fill(raw);
    let html = escapeHtml(fill(raw));
    for (const token of LINK_TOKENS) {
      const url = links[token];
      text = text.replaceAll(token, url);
      html = html.replaceAll(token, `<a href="${escapeHtml(url)}" style="color:#077a76">${escapeHtml(url)}</a>`);
    }
    textBlocks.push(text);
    htmlBlocks.push(p(html));
  }

  textBlocks.push(mail.signature, mail.ps);
  htmlBlocks.push(p(escapeHtml(mail.signature)), p(escapeHtml(mail.ps), "color:#5a6683"));

  return {
    subject: fill(mail.subjects[0]),
    preheader: mail.preheader,
    text: textBlocks.join("\n\n"),
    html:
      `<div style="font-family:system-ui,sans-serif;font-size:16px;line-height:1.6;color:#0b1a3a;max-width:600px">` +
      `<span style="display:none;max-height:0;overflow:hidden">${escapeHtml(mail.preheader)}</span>` +
      htmlBlocks.join("") +
      `</div>`,
  };
}
