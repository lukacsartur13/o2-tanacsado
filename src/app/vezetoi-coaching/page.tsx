import { ServicePage } from "@/components/ServicePage";
import { pageMetadata } from "@/lib/seo";
import { SERVICE_BY_SLUG } from "@/lib/services";

const page = SERVICE_BY_SLUG["vezetoi-coaching"];

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
});

export default function Page() {
  return <ServicePage page={page} />;
}
