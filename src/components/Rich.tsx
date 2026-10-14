/**
 * Szöveg a forrásdokumentum kiemeléseivel: a **...** közötti rész félkövér.
 * Így a tartalom egyszerű string marad (adatfájlban, JSON-LD-ben is).
 */
export function Rich({ text }: { text: string }) {
  return text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

/** A kiemelés jelölése nélküli változat (meta, JSON-LD, e-mail). */
export function plain(text: string) {
  return text.replaceAll("**", "");
}
