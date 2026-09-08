"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CtaLink } from "./CtaLink";
import { FORM_ANCHOR } from "@/lib/site";
import styles from "./MobileCta.module.css";

/**
 * Mobilon rögzített "Ajánlatot kérek" sáv. Elrejtjük, amíg az ajánlatkérő
 * űrlap látható, hogy ne takarja azt; a body alsó kitöltése a tartalmat védi.
 * A pathname kulcsként szolgál, így oldalváltáskor az állapot alaphelyzetbe áll.
 */
export function MobileCta() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("has-mobile-cta");
    return () => document.body.classList.remove("has-mobile-cta");
  }, []);

  return <MobileCtaBar key={pathname} />;
}

function MobileCtaBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const form = document.getElementById(FORM_ANCHOR);
    if (!form || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => setHidden(entries.some((e) => e.isIntersecting)),
      { threshold: 0.05 },
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.bar} data-hidden={hidden} aria-hidden={hidden}>
      <CtaLink className={styles.btn} />
    </div>
  );
}
