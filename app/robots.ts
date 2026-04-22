import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/listings", "/gurgaon", "/properties/"],
      disallow: ["/admin", "/dealers/dashboard", "/dealers/login", "/dealers/join", "/api/"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
