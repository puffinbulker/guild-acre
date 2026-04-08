import type { MetadataRoute } from "next";
import { getAllProperties } from "@/lib/data-store";
import { getGurgaonAreaPages } from "@/lib/queries";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const [properties, areas] = await Promise.all([getAllProperties(), getGurgaonAreaPages()]);
  const publicProperties = properties.filter((property) => property.approvalStatus === "APPROVED");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/gurgaon`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/dealers/join`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/dealers/login`,
      lastModified: new Date()
    },
    ...areas.map((area) => ({
      url: `${baseUrl}/gurgaon/${area.slug}`,
      lastModified: new Date()
    })),
    ...publicProperties.map((property) => ({
      url: `${baseUrl}/properties/${property.slug}`,
      lastModified: new Date(property.updatedAt)
    }))
  ];
}
