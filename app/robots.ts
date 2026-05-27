import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/about",
        "/acquisition-desk",
        "/corridor-coverage",
        "/ncr-land-intelligence",
        "/due-diligence-framework",
        "/intelligence-reports",
        "/insights",
        "/privacy-policy",
        "/cookie-notice"
      ],
      disallow: ["/admin", "/api/", "/listings", "/properties/", "/strategic-opportunities"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
