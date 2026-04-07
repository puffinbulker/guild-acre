import Image from "next/image";
import Link from "next/link";
import { formatPrice, parseJsonArray } from "@/lib/utils";
import type { PropertyRecord } from "@/types";

export function PropertyCard({ property }: { property: PropertyRecord }) {
  const images = parseJsonArray(property.imageUrls);
  const shortDescription =
    property.description.length > 120
      ? `${property.description.slice(0, 117).trim()}...`
      : property.description;

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
          <span className="pill">{property.type.replaceAll("_", " ")}</span>
          {property.featured ? <span className="pill pill--premium">Featured</span> : null}
        </div>
      </div>

      <div className="property-card__body">
        <div className="property-card__row">
          <span className="eyebrow">{property.location}</span>
          <span className="eyebrow">{property.status.replaceAll("_", " ")}</span>
        </div>
        <h3>{property.title}</h3>
        <p>{shortDescription}</p>
        <div className="property-card__meta">
          <span>{property.areaSqft.toLocaleString("en-IN")} sq.ft.</span>
          <span>{property.bedrooms ? `${property.bedrooms} BHK` : "Flexible use"}</span>
          <span>{property.sector}</span>
        </div>
        <div className="property-card__footer">
          <div className="property-card__price-block">
            <strong>{formatPrice(property.priceInr)}</strong>
            <span>Premium match for serious buyers</span>
          </div>
          <Link href={`/properties/${property.slug}`} className="button button--compact">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
