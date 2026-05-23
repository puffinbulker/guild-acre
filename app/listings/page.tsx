import ListingsClient from "@/components/listings-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Strategic Opportunities | Guild Acre",
  description:
    "Review limited public opportunity records from Guild Acre, or request a private intelligence note for Gurgaon NCR, Sohna, Aravali Belt, and emerging growth corridors.",
  path: "/listings",
});

export default function ListingsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Strategic Opportunities", path: "/listings" },
        ])}
      />
      <ListingsClient />
    </>
  );
}
