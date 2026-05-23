import HomePageClient from "@/components/home-page-client";
import { JsonLd, breadcrumbSchema, createPageMetadata, organizationSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guild Acre | Private Land Intelligence for Select NCR Buyers",
  description:
    "Strategic acquisition advisory across Gurgaon NCR, Sohna, the Aravali Belt, and emerging growth corridors for select buyers and investors.",
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
