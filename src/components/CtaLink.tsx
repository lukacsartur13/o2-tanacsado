import Link from "next/link";
import { ArrowRight } from "./Icons";
import { CTA_LABEL, FORM_ANCHOR } from "@/lib/site";

interface Props {
  /** Előre kiválasztandó érdeklődési terület(ek) az űrlapon. */
  service?: string | string[];
  /** Ha az adott oldalon van űrlap, elég a horgony. */
  local?: boolean;
  variant?: "primary" | "ghost" | "white";
  size?: "sm";
  className?: string;
  children?: React.ReactNode;
}

export function ctaHref(service?: string | string[], local?: boolean) {
  const base = local ? "" : "/kapcsolat/";
  const list = service ? (Array.isArray(service) ? service : [service]) : [];
  const q = list.length ? `?terulet=${list.map(encodeURIComponent).join(",")}` : "";
  return `${base}${q}#${FORM_ANCHOR}`;
}

export function CtaLink({ service, local, variant = "primary", size, className, children }: Props) {
  const cls = ["btn", `btn--${variant}`, size ? `btn--${size}` : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <Link href={ctaHref(service, local)} className={cls}>
      {children ?? CTA_LABEL}
      <ArrowRight />
    </Link>
  );
}
