import HomePageClient from "@/components/home-page-client";
import { JsonLd, breadcrumbSchema, createPageMetadata, organizationSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guild Acre | Private Land Intelligence for Select NCR Buyers",
  description:
    "AI-assisted corridor intelligence and private land acquisition advisory across Gurgaon NCR, Sohna, Naugaon, and emerging growth corridors.",
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
