import type { Metadata } from "next";
import { getCanonicalSiteUrl } from "@/lib/site";
import { SOCIAL_PROFILE_URLS } from "@/lib/social-links";

const siteName = "Guild Acre";
const phone = "+91 97116 67782";
const email = "hello@guildacre.com";
const address = {
  addressLocality: "Gurgaon",
  addressRegion: "Haryana",
  addressCountry: "IN",
};

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const baseUrl = getCanonicalSiteUrl();
  return path.startsWith("http") ? path : `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/logo.png",
  noIndex = false,
}: SeoOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Guild Acre private land intelligence office",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: siteName,
    url: getCanonicalSiteUrl(),
    logo: absoluteUrl("/guild-acre-logo.png"),
    image: absoluteUrl("/logo.png"),
    telephone: phone,
    email,
    address,
    areaServed: [
      "Gurgaon NCR",
      "Pataudi",
      "Farrukhnagar",
      "Rewari",
      "Narnaul",
      "Mahendergarh",
      "Haryana"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: SOCIAL_PROFILE_URLS,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
