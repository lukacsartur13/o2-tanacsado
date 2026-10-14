import Link from "next/link";
import { ArrowRight } from "./Icons";
import { CTA_LABEL, FORM_ANCHOR } from "@/lib/site";

interface Props {
  /** Ha az adott oldalon van űrlap, elég a horgony. */
  local?: boolean;
  variant?: "primary" | "ghost" | "white";
  size?: "sm";
  className?: string;
  children?: React.ReactNode;
}

export function ctaHref(local?: boolean) {
  return `${local ? "" : "/kapcsolat/"}#${FORM_ANCHOR}`;
}

export function CtaLink({ local, variant = "primary", size, className, children }: Props) {
  const cls = ["btn", `btn--${variant}`, size ? `btn--${size}` : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <Link href={ctaHref(local)} className={cls}>
      {children ?? CTA_LABEL}
      <ArrowRight />
    </Link>
  );
}
