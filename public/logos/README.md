# Partnerlogók a „Vállalati tapasztalat” blokkhoz

A blokk (`src/components/Experience.tsx`) minden szervezetnél megnézi, létezik-e itt a
`src/lib/site.ts` EXPERIENCE listájában megadott fájl. Ha igen, logót mutat, ha nem, a nevet
szövegesen.

Jelenlegi fájlok (160 px magas, körbevágott, átlátszó hátterű PNG-k):
spar.png, hbo.png, prangl.png, audi.png, isg.png, gablini.png, dr-oetker.png, rbl.png, oeconomus.png

Az eredeti, feldolgozatlan fájlok a projekt gyökerében lévő `logos-source/` mappában vannak
(nem kerülnek az oldalra). Új logó cseréjekor: tegye ide a fájlt, és a `site.ts`-ben állítsa be a nevét.

A logóhasználati engedélyeket érdemes ebben a mappában dokumentálni (kitől, mikor, milyen feltétellel).
