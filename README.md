# O2 Tanácsadó – weboldal

Next.js 16 (App Router, TypeScript) alapú, statikusan generált, konverzióközpontú weboldal az
[o2tanacsado.hu](https://o2tanacsado.hu/) számára.

## Fejlesztés

```bash
npm install
cp .env.example .env.local   # töltse ki a küldési beállításokat
npm run dev                  # http://localhost:3000
```

Ellenőrzések:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Oldalak

A szövegek forrása az „O2 Tanácsadó – weboldal szövegei” (2026. október) és az azt kiegészítő
O2web_02–04 dokumentumok; a megjelölt oldalak szövege ezekből szó szerint került át (tegezés).
A dokumentum által javasolt új URL-ek (/havi-egyuttmukodes, /ceges-diagnozis) csak javaslatok,
az útvonalak a régiek maradtak.

| Útvonal | Tartalom | Szöveg |
| --- | --- | --- |
| `/` | Főoldal: nyitó, kapcsolódás, kérdéssor + személyes beszélgetés, bio, értéküzenet, névtelen példa, mi változik, szolgáltatások, kinek való | új |
| `/szolgaltatasok/` | Céges diagnózis, havi együttműködés, 360 fokos értékelés, döntési térkép (`#ceges-diagnozis`, `#havi-egyuttmukodes`, `#ertekeles-360`, `#dontesi-terkep`) | új |
| `/hr-tanacsadas-kkv-knak/` | Havi együttműködés | új |
| `/szervezetfejlesztes/` | Céges diagnózis | új |
| `/vezetoi-coaching/`, `/team-coaching/` | Vezetői coaching, team coaching | új |
| `/rolunk/` | Bio, alapítók személyes mondatai és történetei, megkülönböztető, módszer | új |
| `/kapcsolat/` | Elérhetőség, első beszélgetés, titoktartás, űrlap | új |
| `/onellenorzo-kerdessor/` | Opt-in oldal és a 12 állításos önellenőrző kérdéssor | új |
| `/onellenorzo-kerdessor/eredmeny/?v=…` | Az 1. welcome levélből linkelt értékelés (noindex, a linkben csak a válaszok vannak) | új |
| `/vezetoi-trening/`, `/munkaero-megtartas/`, `/munkakori-leiras-minta/` | Országos téma- és szolgáltatási oldalak | eredeti (magázó) |
| `/blog/` és `/blog/<slug>/` | 8 induló cikk (`src/lib/blog.ts`) | eredeti (magázó) |
| `/hr-tanacsadas-budapest/`, `-gyor/`, `-szeged/` | Korábbi térségi landingek (a láblécből érhetők el) | eredeti (magázó) |
| `/adatkezelesi-tajekoztato/` | Saját adatkezelési tájékoztató (a helyőrzőket élesítés előtt ki kell tölteni) | eredeti |

Az új szövegű szolgáltatási oldalak tartalma `src/lib/offers.ts`-ben van, a sablon
`src/components/OfferPage.tsx`; a szövegben a `**…**` jelölés félkövér (`src/components/Rich.tsx`).
Az eredeti szövegű szolgáltatási oldalak tartalma `src/lib/services.ts`-ben van, a sablon
`src/components/ServicePage.tsx` (Service + FAQPage + BreadcrumbList schema). Az új szövegű oldalakon
nincs tapasztalat-blokk, mert a szövegdokumentum szerint ügyfélnév vagy logó nem szerepelhet. A tapasztalat-blokk
(`src/components/Experience.tsx`) a `src/lib/site.ts` `EXPERIENCE` konstansából dolgozik: a
szervezetek logója jelenik meg (`showLogos: true`; a megbízó 2026-09-08-án jelezte, hogy a
logóhasználati engedély rendelkezésre áll). Ha egy fájl hiányzik a `public/logos/` mappából, a
blokk szöveges felsorolásra vált; részletek a mappa README-jében.
A helyi oldalak (`src/lib/local.ts`) térségi állításai szándékosan óvatos, nem statisztikai
megfogalmazásúak; új térségi oldal csak igazolható, egyedi helyi értékkel készülhet.

A letölthető munkaköri leírás mintát (`public/letoltes/munkakori-leiras-minta.txt`) a
`scripts/write-template.mjs` generálja a `src/lib/job-description.ts` forrásból; a `prebuild`
lépés automatikusan futtatja.

Lokális SEO: nem készülnek automatikusan megyei oldalak. Új térségi oldal csak valós, dokumentálható
helyi tevékenységre (helyszíni működés, esemény, partner, publikálható referencia) készülhet.

## Kapcsolatfelvételi űrlap

- Mezők a Kapcsolat-szöveg szerint: név, cégnév, e-mail-cím, telefonszám, szabad szöveg
  („Röviden: mi az, ami most a legtöbb energiát viszi el a cégnél?”), hozzájárulás. A korábbi
  érdeklődésiterület-választó megszűnt.
- Kliens: `src/components/QuoteForm.tsx` (validáció, betöltési/siker/hiba állapot, dupla
  beküldés elleni védelem, honeypot). Szerver: `src/app/api/ajanlatkeres/route.ts` → `src/lib/mail.ts`.
- A „Beszéljünk” gombok a `/kapcsolat/#ajanlatkeres` űrlapra visznek.
- Sikert csak tényleges e-mail-küldés után jelez. Küldési beállítás nélkül a szerver 503-at ad,
  és a felület hibát mutat a kitöltött adatok megőrzésével.

## Önellenőrző kérdéssor és welcome sorozat

- Tartalom: `src/lib/self-check.ts` (állítások, pontozás, három értékelés, közös záró).
- Folyamat (`src/components/SelfCheck.tsx`): keresztnév, e-mail-cím, hozzájárulás → 12 állítás
  egy oldalon → az értékelés azonnal megjelenik.
- `src/app/api/kerdessor/route.ts`: a kitöltő megkapja a welcome sorozat **1. levelét** (az
  értékeléssel és az eredményoldal linkjével), az O2 értesítést kap a pontszámmal és a válaszokkal.
  Statikus tárhelyen (GitHub Pages) nincs szerveroldali küldés: ott az értékelés csak az oldalon
  jelenik meg, és a felület jelzi, hogy az e-mail nem ment ki.
- A sorozat mind az 5 levele (tárgyak, előnézeti szöveg, törzs) `src/lib/welcome-series.ts`-ben
  van. **A 2–5. levél (2., 5., 8., 12. nap) automatikus kiküldéséhez e-mail-automatizáló
  szolgáltatás kell** (ütemezés, leiratkozás); ennek bekötése még nyitott.
- Az adatkezelési tájékoztatóban a kérdéssor adatkezelését (cél, megőrzés, hírlevél) még rögzíteni kell.

Küldési beállítások (`.env.local`): `RESEND_API_KEY` **vagy** `SMTP_HOST`, `SMTP_PORT`,
`SMTP_USER`, `SMTP_PASS` (+ `SMTP_SECURE`), valamint `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

## Élesítési ellenőrzőlista

- `NEXT_PUBLIC_SITE_ENV=production` az éles domainen (enélkül `noindex` és tiltó `robots.txt`).
- GitHub Pages saját domainen: a workflow-ban `NEXT_PUBLIC_BASE_PATH` üres, `NEXT_PUBLIC_SITE_ENV`
  `production`, CNAME beállítva.
- Search Console: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (HTML-meta), vagy DNS-rekord, vagy a
  Google HTML-fájlja a `public/` mappában. Sitemap: `https://o2tanacsado.hu/sitemap.xml`.
- Az adatkezelési tájékoztató helyőrzői (cégjegyzékszám, adószám, tárhely- és e-mail-szolgáltató)
  kitöltve, a szöveg jogi ellenőrzés után.
- E-mail-küldés beállítva (`RESEND_API_KEY` vagy `SMTP_*`), ha nem statikus tárhelyen fut az oldal.
- Minden oldalon önmagára mutató canonical, egyedi title és description (ellenőrizve).

## Indexelés

Csak `NEXT_PUBLIC_SITE_ENV=production` (vagy Vercel production) esetén engedélyezett az
indexelés. Minden más környezet `noindex` metát, `X-Robots-Tag` fejlécet és tiltó
`robots.txt`-t kap. A canonical URL-ek mindig a `https://o2tanacsado.hu` domainre mutatnak.
