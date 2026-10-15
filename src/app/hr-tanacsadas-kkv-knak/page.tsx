import { OfferPage } from "@/components/OfferPage";
import { OFFER_BY_SLUG } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

const page = OFFER_BY_SLUG["havi-egyuttmukodes"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function Page() {
  return <OfferPage page={page} />;
}
