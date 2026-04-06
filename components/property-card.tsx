import Image from "next/image";
import Link from "next/link";
import { formatPrice, parseJsonArray } from "@/lib/utils";
import type { PropertyRecord } from "@/types";

export function PropertyCard({ property }: { property: PropertyRecord }) {
  const images = parseJsonArray(property.imageUrls);

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
        <span className="pill">{property.type.replaceAll("_", " ")}</span>
      </div>

      <div className="property-card__body">
        <div className="property-card__row">
          <span className="eyebrow">{property.location}</span>
          <span className="eyebrow">{property.status.replaceAll("_", " ")}</span>
        </div>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
        <div className="property-card__meta">
          <span>{property.areaSqft.toLocaleString("en-IN")} sq.ft.</span>
          <span>{property.bedrooms ? `${property.bedrooms} BHK` : "Flexible use"}</span>
          <span>{property.sector}</span>
        </div>
        <div className="property-card__footer">
          <strong>{formatPrice(property.priceInr)}</strong>
          <Link href={`/properties/${property.slug}`} className="button">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
