import Image from "next/image";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { getPropertyBySlug } from "@/lib/queries";
import { formatPrice, parseJsonArray } from "@/lib/utils";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {};
  }

  return {
    title: property.title,
    description: property.description
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const images = parseJsonArray(property.imageUrls);
  const amenities = parseJsonArray(property.amenities);

  return (
    <main className="container page-shell property-detail">
      <section className="property-detail__intro">
        <div>
          <span className="section-tag">{property.location}</span>
          <h1>{property.title}</h1>
          <p className="property-detail__summary">
            A more visual, premium presentation of this opportunity with key information surfaced
            before the first conversation.
          </p>
        </div>
        <div className="property-detail__intro-card">
          <span className="eyebrow">{property.type.replaceAll("_", " ")}</span>
          <strong>{formatPrice(property.priceInr)}</strong>
          <p>{property.status.replaceAll("_", " ")}</p>
        </div>
      </section>

      <div className="property-detail__gallery">
        <div className="property-detail__hero-image">
          <Image
            src={images[0]}
            alt={property.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="property-detail__thumbs">
          {images.slice(1).map((image, index) => (
            <div className="property-detail__thumb" key={image}>
              <Image
                src={image}
                alt={`${property.title} ${index + 2}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="property-detail__content">
        <section className="property-detail__main card">
          <div className="property-detail__chips">
            <span className="pill pill--light">{property.type.replaceAll("_", " ")}</span>
            <span className="pill pill--light">{property.sector}</span>
            <span className="pill pill--light">{property.city}</span>
          </div>
          <div className="detail-price">{formatPrice(property.priceInr)}</div>
          <p>{property.description}</p>

          <div className="detail-specs">
            <div>
              <strong>{property.bedrooms || "-"}</strong>
              <span>Bedrooms</span>
            </div>
            <div>
              <strong>{property.bathrooms || "-"}</strong>
              <span>Bathrooms</span>
            </div>
            <div>
              <strong>{property.areaSqft.toLocaleString("en-IN")}</strong>
              <span>Sq.ft.</span>
            </div>
            <div>
              <strong>{property.status.replaceAll("_", " ")}</strong>
              <span>Status</span>
            </div>
          </div>

          <div className="amenity-list">
            {amenities.map((amenity) => (
              <span className="pill pill--light" key={amenity}>
                {amenity}
              </span>
            ))}
          </div>

          <div className="property-detail__trust-band">
            <div>
              <strong>Premium curation</strong>
              <span>Shortlisted for serious end users and investors</span>
            </div>
            <div>
              <strong>Fast advisor response</strong>
              <span>Designed for WhatsApp-first buyer conversations</span>
            </div>
          </div>
        </section>

        <aside className="property-detail__sidebar">
          <LeadForm propertyId={property.id} compact />
        </aside>
      </div>
    </main>
  );
}
