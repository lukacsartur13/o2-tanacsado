import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import { SELF_CHECK_NAME } from "@/lib/self-check";
import { SELF_CHECK_PATH } from "@/lib/site";
import { ResultFromLink } from "./ResultFromLink";
import styles from "../page.module.css";

/** Az 1. welcome levél „Az értékelésed itt találod” linkje ide mutat (?v= a válaszokkal). */
export const metadata = {
  ...pageMetadata({
    title: `Az értékelés – ${SELF_CHECK_NAME} | O2 Tanácsadó`,
    description: SELF_CHECK_NAME,
    path: `${SELF_CHECK_PATH}eredmeny/`,
  }),
  robots: { index: false, follow: true },
};

export default function ResultPage() {
  return (
    <>
      <section className={styles.head} aria-labelledby="result-h1">
        <div className={`container ${styles.headInner}`}>
          <p className="eyebrow">Önellenőrző kérdéssor</p>
          <h1 id="result-h1">{SELF_CHECK_NAME}</h1>
        </div>
      </section>
      <section className={`section ${styles.main}`} aria-labelledby="result-h1">
        <div className="container">
          <Suspense fallback={null}>
            <ResultFromLink />
          </Suspense>
        </div>
      </section>
    </>
  );
}
