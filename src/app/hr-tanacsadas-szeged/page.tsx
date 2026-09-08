import { LocalLanding } from "@/components/LocalLanding";
import { LOCAL_BY_SLUG } from "@/lib/local";
import { pageMetadata } from "@/lib/seo";

const page = LOCAL_BY_SLUG["hr-tanacsadas-szeged"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function Page() {
  return <LocalLanding page={page} />;
}
