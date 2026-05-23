import ContactClient from "@/components/contact-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Guild Acre | Private Property Advisory in Gurgaon",
  description:
    "Contact Guild Acre to discuss land, farmhouse, plotted, and premium property requirements across Gurgaon, Sohna, Naugaon, and Delhi NCR.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactClient />
    </>
  );
}
