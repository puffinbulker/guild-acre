import Image from "next/image";
import Link from "next/link";
import { formatCompactPrice, formatPrice, formatPricePerSqft, humanizeToken, parseJsonArray } from "@/lib/utils";
import type { PropertyRecord } from "@/types";

export function PropertyCard({ property }: { property: PropertyRecord }) {
  const images = parseJsonArray(property.imageUrls);
  const ratePerSqft = formatPricePerSqft(property.priceInr, property.areaSqft);
  const shortDescription =
    property.description.length > 120
      ? `${property.description.slice(0, 117).trim()}...`
      : property.description;
  const typeLabel = humanizeToken(property.type);
  const statusLabel = humanizeToken(property.status);
  const sourceLabel = property.sourceType ? humanizeToken(property.sourceType) : "Curated listing";
  const roleLabel = property.listingContactRole ? humanizeToken(property.listingContactRole) : sourceLabel;

  return (
    <article className="property-card">
      <div className="property-card__image">
        <Image
          src={images[0]}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <div className="property-card__image-overlay" />
        <div className="property-card__image-top">
          <span className="pill">{typeLabel}</span>
          {property.featured ? <span className="pill pill--premium">Featured</span> : null}
        </div>
        <div className="property-card__image-bottom">
          <span className="property-card__chip">{property.location}</span>
          <span className="property-card__chip property-card__chip--muted">{property.sector}</span>
        </div>
      </div>

      <div className="property-card__body">
        <div className="property-card__row">
          <span className="eyebrow">{statusLabel}</span>
          <span className="eyebrow">{roleLabel}</span>
        </div>
        <h3>{property.title}</h3>
        <p>{shortDescription}</p>
        <div className="property-card__rateband">
          <strong>{formatCompactPrice(property.priceInr)}</strong>
          <span>{ratePerSqft || "Call for rate insight"}</span>
        </div>
        <div className="property-card__meta">
          <span>{property.areaSqft.toLocaleString("en-IN")} sq.ft.</span>
          <span>{property.bedrooms ? `${property.bedrooms} BHK` : "Flexible use"}</span>
          <span>{property.bathrooms ? `${property.bathrooms} Bath` : "Site-specific"}</span>
        </div>
        <div className="property-card__portal-line">
          <span>{sourceLabel}</span>
          <span>{property.featured ? "Priority showcase" : "Standard inventory"}</span>
        </div>
        <div className="property-card__footer">
          <div className="property-card__price-block">
            <strong>{formatPrice(property.priceInr)}</strong>
            <span>{statusLabel} in {property.location}</span>
          </div>
          <Link href={`/properties/${property.slug}`} className="button button--compact">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
