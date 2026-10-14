import { OfferPage } from "@/components/OfferPage";
import { plain } from "@/components/Rich";
import { OFFER_BY_SLUG } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

const page = OFFER_BY_SLUG["ceges-diagnozis"];

export const metadata = pageMetadata({
  title: page.title,
  description: plain(page.lead),
  path: page.path,
});

export default function Page() {
  return <OfferPage page={page} />;
}
