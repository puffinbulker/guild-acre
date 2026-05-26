import StrategicOpportunitiesClient from "@/components/strategic-opportunities-client";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Strategic Opportunities | Guild Acre",
  description:
    "Review selected strategic opportunity records from Guild Acre, or request a private intelligence note for Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh.",
  path: "/strategic-opportunities",
});

export default function StrategicOpportunitiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Strategic Opportunities", path: "/strategic-opportunities" },
        ])}
      />
      <StrategicOpportunitiesClient />
    </>
  );
}
