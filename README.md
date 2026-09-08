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

| Útvonal | Tartalom | SEO-szándék |
| --- | --- | --- |
| `/` | Főoldal: országos fókusz, 9 szolgáltatási alap, ügyfélhelyzetek, alapítók, tapasztalat-blokk, blog, űrlap | márka + „hr tanácsadás kkv” |
| `/szolgaltatasok/` | Hub: négy terület horgonnyal (`#hr-strategia`, `#toborzas`, `#munkakorok`, `#szervezetfejlesztes`), a részletes oldalakra mutató linkekkel | áttekintő, belső linkelés |
| `/szervezetfejlesztes/` | Országos szolgáltatási oldal | „szervezetfejlesztés” |
| `/hr-tanacsadas-kkv-knak/` | Országos szolgáltatási oldal, `#hr-outsourcing` blokkal | „hr tanácsadó” |
| `/vezetoi-trening/` | Országos szolgáltatási oldal | „vezetői tréning” |
| `/vezetoi-coaching/` | Országos szolgáltatási oldal | „vezetői coaching” |
| `/team-coaching/` | Országos szolgáltatási oldal | „team coaching” |
| `/munkakori-leiras-minta/` | Másolható, letölthető minta + útmutató + szolgáltatás | „munkaköri leírás (minta)” |
| `/munkaero-megtartas/` | Témaoldal: fluktuáció, megtartás, ösztönzés | „munkaerő-megtartás” |
| `/blog/` és `/blog/<slug>/` | 8 induló cikk (`src/lib/blog.ts`) | információs forgalom, konzultációs lead |
| `/rolunk/` | Alapítók, szemlélet, tapasztalat-blokk, cégadatok | E-E-A-T |
| `/kapcsolat/` | Elérhetőség és űrlap | konverzió |
| `/hr-tanacsadas-budapest/`, `-gyor/`, `-szeged/` | Korábbi térségi landingek (láblécből és a főoldalról elérhetők) | lokális, csak dokumentálható térségre |

A szolgáltatási oldalak tartalma `src/lib/services.ts`-ben van, a sablon
`src/components/ServicePage.tsx` (Service + FAQPage + BreadcrumbList schema). A tapasztalat-blokk
(`src/components/Experience.tsx`) a `src/lib/site.ts` `EXPERIENCE` konstansából dolgozik: a
szervezetek neve csak szövegesen jelenik meg, logó csak dokumentált engedéllyel kerülhet ki.

A letölthető munkaköri leírás mintát (`public/letoltes/munkakori-leiras-minta.txt`) a
`scripts/write-template.mjs` generálja a `src/lib/job-description.ts` forrásból; a `prebuild`
lépés automatikusan futtatja.

Lokális SEO: nem készülnek automatikusan megyei oldalak. Új térségi oldal csak valós, dokumentálható
helyi tevékenységre (helyszíni működés, esemény, partner, publikálható referencia) készülhet.

## Ajánlatkérő űrlap

- Kliens: `src/components/QuoteForm.tsx` (validáció, betöltési/siker/hiba állapot, dupla
  beküldés elleni védelem, honeypot).
- Szerver: `src/app/api/ajanlatkeres/route.ts` → `src/lib/mail.ts`.
- Előválasztás: `/kapcsolat/?terulet=toborzas#ajanlatkeres` (több érték vesszővel). Az érdeklődési
  területek a kilenc szolgáltatási alap (`INTEREST_OPTIONS` a `src/lib/content.ts`-ben).
- Sikert csak tényleges e-mail-küldés után jelez. Küldési beállítás nélkül a szerver 503-at ad,
  és a felület hibát mutat a kitöltött adatok megőrzésével.

Küldési beállítások (`.env.local`): `RESEND_API_KEY` **vagy** `SMTP_HOST`, `SMTP_PORT`,
`SMTP_USER`, `SMTP_PASS` (+ `SMTP_SECURE`), valamint `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

## Indexelés

Csak `NEXT_PUBLIC_SITE_ENV=production` (vagy Vercel production) esetén engedélyezett az
indexelés. Minden más környezet `noindex` metát, `X-Robots-Tag` fejlécet és tiltó
`robots.txt`-t kap. A canonical URL-ek mindig a `https://o2tanacsado.hu` domainre mutatnak.
