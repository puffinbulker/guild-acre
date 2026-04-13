import Image from "next/image";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { getMarketGuideForArea } from "@/lib/market-intel";
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
  const primaryImage = images[0];
  const supportingImages = images.slice(1, 5);
  const marketGuide = getMarketGuideForArea(property.sector) || getMarketGuideForArea(property.location);
  const propertyRate = Math.round(property.priceInr / property.areaSqft);
  const pricePosition = marketGuide ? classifyPricePosition(propertyRate, marketGuide.avgPricePerSqft) : null;

  return (
    <main className="container page-shell property-detail">
      <section className="property-detail__intro">
        <div>
          <span className="section-tag">{property.location}</span>
          <h1>{property.title}</h1>
          <p className="property-detail__summary">
            A more immersive presentation of this opportunity, with sharper visual storytelling,
            luxury positioning, and the key details surfaced before the first conversation.
          </p>
        </div>
        <div className="property-detail__intro-card">
          <span className="eyebrow">{property.type.replaceAll("_", " ")}</span>
          <strong>{formatPrice(property.priceInr)}</strong>
          <p>{property.status.replaceAll("_", " ")}</p>
        </div>
      </section>

      <div className="property-detail__gallery">
        <div className="property-detail__gallery-shell">
          <div className="property-detail__hero-image">
            <Image
              src={primaryImage}
              alt={property.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              style={{ objectFit: "cover" }}
            />
            <div className="property-detail__hero-overlay" />
            <div className="property-detail__hero-caption">
              <span className="section-tag">Signature View</span>
              <strong>{property.location}</strong>
              <p>{property.sector}, {property.city}</p>
            </div>
          </div>
          <div className="property-detail__thumbs">
            {supportingImages.map((image, index) => (
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
        <div className="property-detail__gallery-note card">
          <span className="section-tag">Visual Brief</span>
          <h3>Luxury presentation, faster buyer conviction</h3>
          <p>
            The gallery is arranged to make the property feel editorial, polished, and easier to
            evaluate on mobile as well as desktop.
          </p>
          <div className="property-detail__gallery-meta">
            <span>{images.length} visuals</span>
            <span>{property.status.replaceAll("_", " ")}</span>
            <span>{property.type.replaceAll("_", " ")}</span>
          </div>
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

          {marketGuide ? (
            <div className="property-market-compare">
              <div className="property-market-compare__head">
                <span className="section-tag">Comparative Market Price</span>
                <h3>{marketGuide.title} benchmark</h3>
              </div>
              <div className="property-market-compare__stats">
                <div>
                  <strong>INR {propertyRate.toLocaleString("en-IN")}</strong>
                  <span>This listing / sq.ft.</span>
                </div>
                <div>
                  <strong>INR {marketGuide.avgPricePerSqft.toLocaleString("en-IN")}</strong>
                  <span>Area avg / sq.ft.</span>
                </div>
                <div>
                  <strong>{pricePosition}</strong>
                  <span>Position vs area average</span>
                </div>
              </div>
              <p>
                Indicative public range for {marketGuide.title}: {marketGuide.indicativeRange}. Final
                deal value depends on tower, facing, floor, builder, registry, and finish level.
              </p>
              <a
                className="property-market-compare__source"
                href={marketGuide.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                Source: {marketGuide.sourceLabel}
              </a>
            </div>
          ) : null}
        </section>

        <aside className="property-detail__sidebar">
          <LeadForm propertyId={property.id} compact />
        </aside>
      </div>
    </main>
  );
}

function classifyPricePosition(pricePerSqft: number, avgPricePerSqft: number) {
  const delta = pricePerSqft / avgPricePerSqft;

  if (delta >= 1.2) return "Above market average";
  if (delta <= 0.8) return "Below market average";
  return "Near market average";
}
