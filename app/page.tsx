import HomePageClient from "@/components/home-page-client";
import { JsonLd, breadcrumbSchema, createPageMetadata, organizationSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guild Acre | Private Land Investment Intelligence for Haryana Corridors",
  description:
    "Private land investment intelligence for Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, Mahendergarh, and emerging Haryana corridors.",
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
