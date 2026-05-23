import type { Metadata } from "next";
import { getCanonicalSiteUrl } from "@/lib/site";
import type { PropertyRecord } from "@/types";
import { formatPrice, parseJsonArray } from "@/lib/utils";

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
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    name: siteName,
    url: getCanonicalSiteUrl(),
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    telephone: phone,
    email,
    address,
    areaServed: ["Gurgaon", "Sohna", "Naugaon", "Delhi NCR"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [],
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

export function propertySchema(property: PropertyRecord) {
  const images = parseJsonArray(property.imageUrls).map((image) => absoluteUrl(image));

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.title,
    url: absoluteUrl(`/properties/${property.slug}`),
    description: property.description,
    image: images,
    datePosted: property.createdAt,
    offers: {
      "@type": "Offer",
      price: property.priceInr,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    floorSize: property.areaSqft
      ? {
          "@type": "QuantitativeValue",
          value: property.areaSqft,
          unitText: "SQFT",
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressRegion: property.city,
      addressCountry: "IN",
    },
    provider: {
      "@type": "ProfessionalService",
      name: siteName,
      telephone: phone,
      url: getCanonicalSiteUrl(),
    },
    priceRange: formatPrice(property.priceInr),
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
