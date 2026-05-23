import ContactClient from "@/components/contact-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Acquisition Desk | Guild Acre",
  description:
    "Submit a confidential acquisition brief for private land intelligence and strategic advisory across Gurgaon NCR, Sohna, and the Aravali Belt.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Acquisition Desk", path: "/contact" },
        ])}
      />
      <ContactClient />
    </>
  );
}
