import AcquisitionDeskClient from "@/components/acquisition-desk-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Acquisition Desk | Guild Acre",
  description:
    "Submit a confidential acquisition brief for private land intelligence and strategic advisory across NCR corridors, Sohna, and the Aravali Belt.",
  path: "/acquisition-desk",
});

export default function AcquisitionDeskPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Acquisition Desk", path: "/acquisition-desk" },
        ])}
      />
      <AcquisitionDeskClient />
    </>
  );
}
