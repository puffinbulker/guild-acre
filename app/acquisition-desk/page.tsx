import AcquisitionDeskClient from "@/components/acquisition-desk-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Acquisition Desk | Guild Acre",
  description:
    "Submit a confidential acquisition brief to the Guild Acre private land intelligence and acquisition desk for Gurgaon NCR and emerging Haryana growth corridors.",
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
