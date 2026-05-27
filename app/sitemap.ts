import type { MetadataRoute } from "next";
import { getCorridorCoveragePages } from "@/lib/queries";
import { getCanonicalSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getCanonicalSiteUrl();
  const areas = await getCorridorCoveragePages();
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now
    },
    {
      url: `${baseUrl}/corridor-coverage`,
      lastModified: now
    },
    {
      url: `${baseUrl}/ncr-land-intelligence`,
      lastModified: now
    },
    {
      url: `${baseUrl}/due-diligence-framework`,
      lastModified: now
    },
    {
      url: `${baseUrl}/intelligence-reports`,
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
      url: `${baseUrl}/acquisition-desk`,
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
      url: `${baseUrl}/insights/dwarka-expressway-vs-golf-course-extension-road`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/plotted-land-risk-signals-near-gurgaon`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/title-checks-before-buying-farmhouse-land`,
      lastModified: now
    },
    {
      url: `${baseUrl}/insights/corridor-coverage-comparison-for-serious-buyers`,
      lastModified: now
    },
    ...areas.map((area) => ({
      url: `${baseUrl}/corridor-coverage/${area.slug}`,
      lastModified: now
    }))
  ];
}
