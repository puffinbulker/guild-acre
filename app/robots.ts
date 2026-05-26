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
        "/strategic-opportunities",
        "/corridor-coverage",
        "/ncr-land-intelligence",
        "/due-diligence-framework",
        "/intelligence-reports",
        "/insights",
        "/properties/",
        "/privacy-policy",
        "/cookie-notice"
      ],
      disallow: ["/admin", "/api/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
