"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "@/components/Icons";
import { SelfCheckResult } from "@/components/SelfCheckResult";
import { decodeAnswers } from "@/lib/self-check";
import { SELF_CHECK_PATH } from "@/lib/site";

/** A linkben kapott válaszokból (?v=, 12 számjegy) újraszámolt értékelés. */
export function ResultFromLink() {
  const answers = decodeAnswers(useSearchParams().get("v"));

  if (!answers) {
    return (
      <div>
        <p className="lead">Ehhez a linkhez nem tartozik értékelés.</p>
        <Link href={SELF_CHECK_PATH} className="btn btn--primary">
          Megnyitom a kérdéssort <ArrowRight />
        </Link>
      </div>
    );
  }

  return <SelfCheckResult answers={answers} />;
}
