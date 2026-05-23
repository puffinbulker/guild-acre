import type { MetadataRoute } from "next";
import { getAllProperties } from "@/lib/data-store";
import { getGurgaonAreaPages } from "@/lib/queries";
import { getCanonicalSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getCanonicalSiteUrl();
  const [properties, areas] = await Promise.all([getAllProperties(), getGurgaonAreaPages()]);
  const publicProperties = properties.filter((property) => property.approvalStatus === "APPROVED");
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: now
    },
    {
      url: `${baseUrl}/gurgaon`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: now
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now
    },
    {
      url: `${baseUrl}/cookie-notice`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/verify-land-title-near-gurgaon`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/sohna-vs-naugaon-farmhouse-investment`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/dwarka-expressway-vs-golf-course-extension-road`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/red-flags-in-plotted-land-deals-near-gurgaon`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/title-checks-before-buying-farmhouse-land`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/gurgaon-corridor-comparison-for-serious-buyers`,
      lastModified: now
    },
    ...areas.map((area) => ({
      url: `${baseUrl}/gurgaon/${area.slug}`,
      lastModified: now
    })),
    ...publicProperties.map((property) => ({
      url: `${baseUrl}/properties/${property.slug}`,
      lastModified: new Date(property.updatedAt)
    }))
  ];
}
