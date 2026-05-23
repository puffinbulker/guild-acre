import Image from "next/image";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { getMarketGuideForArea } from "@/lib/market-intel";
import { getPropertyBySlug } from "@/lib/queries";
import { JsonLd, breadcrumbSchema, createPageMetadata, propertySchema } from "@/lib/seo";
import {
  formatPhotoRightsLabel,
  formatPrice,
  formatPropertyStatusLabel,
  formatPropertyTypeLabel,
  formatSourceLabel,
  parseJsonArray
} from "@/lib/utils";

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

  return createPageMetadata({
    title: `${property.title} | Guild Acre Intelligence Record`,
    description: property.description,
    path: `/properties/${slug}`,
    image: parseJsonArray(property.imageUrls)[0] || "/logo.png",
  });
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const images = parseJsonArray(property.imageUrls);
  const amenities = parseJsonArray(property.amenities);
  const primaryImage = images[0] || "/logo.png";
  const supportingImages = images.slice(1, 5);
  const marketGuide = getMarketGuideForArea(property.sector) || getMarketGuideForArea(property.location);
  const propertyRate = property.areaSqft ? Math.round(property.priceInr / property.areaSqft) : 0;
  const pricePosition = marketGuide ? classifyPricePosition(propertyRate, marketGuide.avgPricePerSqft) : null;

  return (
    <>
    <JsonLd
      data={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Strategic Opportunities", path: "/listings" },
          { name: property.title, path: `/properties/${slug}` },
        ]),
        propertySchema(property),
      ]}
    />
    <main className="container page-shell property-detail">
      <section className="property-detail__intro">
        <div>
          <span className="section-tag">Reference record</span>
          <h1>{property.title}</h1>
          <p className="property-detail__summary">
            A public reference record for early context. Deeper movement should
            follow title, access, use-case, and corridor-specific review.
          </p>
        </div>
        <div className="property-detail__intro-card">
          <span className="eyebrow">{formatPropertyTypeLabel(property.type)}</span>
          <strong>{formatPrice(property.priceInr)}</strong>
          <p>{formatPropertyStatusLabel(property.status)}</p>
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
          <span className="section-tag">Visual Context</span>
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
          <h3>Visual context before diligence</h3>
          <p>
            The visuals provide first-pass context only. Acquisition conviction
            should be formed through documentation, access, and use-case review.
          </p>
            <div className="property-detail__gallery-meta">
              <span>{images.length} visuals</span>
              <span>{formatPropertyStatusLabel(property.status)}</span>
              <span>{formatPropertyTypeLabel(property.type)}</span>
            </div>
          </div>
        </div>

      <div className="property-detail__content">
        <section className="property-detail__main card">
          <div className="property-detail__chips">
            <span className="pill pill--light">{formatPropertyTypeLabel(property.type)}</span>
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
              <strong>{formatPropertyStatusLabel(property.status)}</strong>
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
              <strong>Private review</strong>
              <span>Structured for serious buyers and investors</span>
            </div>
            <div>
              <strong>Diligence direction</strong>
              <span>Records, access, zoning, and exit logic before movement</span>
            </div>
          </div>

          <div className="property-market-compare">
            <div className="property-market-compare__head">
                <span className="section-tag">Record transparency</span>
                <h3>Source and display rights</h3>
            </div>
            <div className="property-market-compare__stats">
              <div>
                <strong>{formatSourceLabel(property.sourcePlatform || property.sourceType)}</strong>
                <span>Source platform</span>
              </div>
              <div>
                <strong>{property.priceLastVerified || "Recently added"}</strong>
                <span>Price last verified</span>
              </div>
              <div>
                <strong>{formatPhotoRightsLabel(property.photoRightsStatus)}</strong>
                <span>Visual rights status</span>
              </div>
            </div>
            <p>
              Guild Acre only displays record facts and visuals that are owned, licensed,
              AI-generated, or explicitly approved for use.
            </p>
            {property.sourceUrl ? (
              <a
                className="property-market-compare__source"
                href={property.sourceUrl}
                target="_blank"
                rel="noreferrer"
              >
                View original record source
              </a>
            ) : null}
          </div>

          {marketGuide ? (
            <div className="property-market-compare">
              <div className="property-market-compare__head">
                <span className="section-tag">Market Reference</span>
                <h3>{marketGuide.title} benchmark</h3>
              </div>
              <div className="property-market-compare__stats">
                <div>
                  <strong>INR {propertyRate.toLocaleString("en-IN")}</strong>
                  <span>This record / sq.ft.</span>
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
                deal value depends on access, frontage, registry position, seller urgency,
                development stage, and diligence outcome.
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
    </>
  );
}

function classifyPricePosition(pricePerSqft: number, avgPricePerSqft: number) {
  const delta = pricePerSqft / avgPricePerSqft;

  if (delta >= 1.2) return "Above market average";
  if (delta <= 0.8) return "Below market average";
  return "Near market average";
}
