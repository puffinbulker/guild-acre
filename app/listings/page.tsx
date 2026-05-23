import ListingsClient from "@/components/listings-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Curated Property Listings in Gurgaon & NCR | Guild Acre",
  description:
    "Browse approved public property opportunities from Guild Acre, or share a requirement for a private shortlist across Gurgaon, Sohna, Naugaon, and NCR growth corridors.",
  path: "/listings",
});

export default function ListingsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Listings", path: "/listings" },
        ])}
      />
      <ListingsClient />
    </>
  );
}
