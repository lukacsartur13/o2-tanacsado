"use client";

import { useEffect, useState } from "react";
import { Check } from "./Icons";

/**
 * Vágólapra másolás. Ha a böngésző nem támogatja a Clipboard API-t, a gomb
 * hibaüzenetet ad; a letöltési link ettől függetlenül működik.
 */
export function CopyButton({ text, label = "Másolás vágólapra" }: { text: string; label?: string }) {
  const [state, setState] = useState<"idle" | "done" | "error">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = window.setTimeout(() => setState("idle"), 2500);
    return () => window.clearTimeout(t);
  }, [state]);

  const onClick = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("unsupported");
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <button type="button" className="btn btn--primary" onClick={onClick} aria-live="polite">
      {state === "done" ? (
        <>
          Kimásolva <Check />
        </>
      ) : state === "error" ? (
        "A másolás nem sikerült – használja a letöltést"
      ) : (
        label
      )}
    </button>
  );
}
