import HomePageClient from "@/components/home-page-client";
import { JsonLd, breadcrumbSchema, createPageMetadata, organizationSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guild Acre | Private Land Intelligence & Acquisition Desk",
  description:
    "Private land intelligence and acquisition advisory for Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, Mahendergarh, and emerging Haryana corridors.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Home", path: "/" }])]} />
      <HomePageClient />
    </>
  );
}
