import HomePageClient from "@/components/home-page-client";
import { JsonLd, breadcrumbSchema, createPageMetadata, organizationSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guild Acre | Private Land Advisory & Real Estate Intelligence",
  description:
    "Private land and premium real estate intelligence advisory for HNI buyers and serious investors evaluating Gurgaon, Sohna, and Naugaon opportunities.",
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
