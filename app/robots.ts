import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/contact", "/listings", "/gurgaon", "/insights", "/properties/", "/privacy-policy", "/cookie-notice"],
      disallow: ["/admin", "/api/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
