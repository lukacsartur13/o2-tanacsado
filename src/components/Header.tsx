"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "./Logo";
import { CtaLink } from "./CtaLink";
import { NAV } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="O2 Tanácsadó – főoldal">
          <Logo className={styles.logo} />
        </Link>

        <nav className={styles.nav} aria-label="Fő navigáció">
          <ul className={styles.list}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <CtaLink size="sm" className={styles.cta} />
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? "Menü bezárása" : "Menü megnyitása"}</span>
            <span className={styles.burgerLines} data-open={open} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div id={menuId} className={styles.mobile} hidden={!open}>
        <nav aria-label="Mobil navigáció" className="container">
          <ul className={styles.mobileList}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta} onClick={close}>
            <CtaLink />
          </div>
        </nav>
      </div>
    </header>
  );
}
