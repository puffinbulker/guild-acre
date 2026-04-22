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
