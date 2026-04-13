import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { LeadForm } from "@/components/lead-form";
import { getMarketGuideBySlug, PROPERTY_VISUAL_CATEGORIES } from "@/lib/market-intel";
import { getPropertiesByAreaSlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = await getPropertiesByAreaSlug(slug);

  if (!area) {
    return {};
  }

  return {
    title: `${area.title} Properties in Gurgaon`,
    description:
      area.summary ||
      `Browse property opportunities in ${area.title}, Gurgaon across buy, rent, lease, resale, and fresh inventory.`
  };
}

export default async function GurgaonAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = await getPropertiesByAreaSlug(slug);
  const marketGuide = getMarketGuideBySlug(slug);

  if (!area) {
    notFound();
  }

  const areaQuery = encodeURIComponent(area.title);
  const areaCount = area.properties.length;

  return (
    <main className="container page-shell area-page">
      <section className="page-intro page-intro--listing">
        <span className="section-tag">
          Gurgaon {area.kind === "sector" ? "Sector Page" : "Locality Page"}
        </span>
        <h1>{area.title}</h1>
        <p>
          {area.summary ||
            `Browse curated opportunities in ${area.title}, Gurgaon for buying, selling, rent, lease, resale, fresh booking, commercial, and land-led requirements.`}
        </p>
        <div className="page-intro__metrics">
          <span>{areaCount} live listing{areaCount === 1 ? "" : "s"}</span>
          <span>Buy, rent, lease, resale, and fresh inventory</span>
          <span>Plots, floors, villa, kothi, apartment, flat, and land</span>
        </div>
      </section>

      <div className="area-page__actions">
        <Link href={`/listings?location=${areaQuery}`} className="button">
          View all in {area.title}
        </Link>
        <Link href="/gurgaon" className="button button--ghost">
          Back to Gurgaon hub
        </Link>
        <Link href={`/listings?location=${areaQuery}&collection=COMMERCIAL`} className="collection-tab">
          Commercial
        </Link>
        <Link href={`/listings?location=${areaQuery}&collection=LAND`} className="collection-tab">
          Plots / Land
        </Link>
        <Link href={`/listings?location=${areaQuery}&collection=FARMLAND`} className="collection-tab">
          Farm Land
        </Link>
      </div>

      <div className="area-page__layout">
        <section className="area-page__content">
          {marketGuide ? (
            <section className="area-market card">
              <div className="area-market__intro">
                <span className="section-tag">Market Snapshot</span>
                <h2>{marketGuide.title} price benchmark</h2>
                <p>{marketGuide.outlook}</p>
              </div>
              <div className="area-market__stats">
                <div>
                  <strong>INR {marketGuide.avgPricePerSqft.toLocaleString("en-IN")}</strong>
                  <span>Indicative avg / sq.ft.</span>
                </div>
                <div>
                  <strong>{marketGuide.indicativeRange}</strong>
                  <span>Observed public range</span>
                </div>
                <div>
                  <strong>{marketGuide.movement}</strong>
                  <span>Current reference note</span>
                </div>
              </div>
              <a href={marketGuide.sourceUrl} target="_blank" rel="noreferrer" className="area-market__source">
                Source: {marketGuide.sourceLabel}
              </a>
            </section>
          ) : null}

          <div className="area-page__service-grid">
            <article className="card area-page__service-card">
              <span className="section-tag">For Buyers</span>
              <h3>Primary, resale, and luxury shortlisting</h3>
              <p>Choose from fresh booking, ready-to-move, or resale inventory with guided negotiation support.</p>
            </article>
            <article className="card area-page__service-card">
              <span className="section-tag">For Owners</span>
              <h3>Sell, rent, lease, or mandate your property</h3>
              <p>We can position apartments, floors, villa, kothi, plots, and commercial assets for serious enquiries.</p>
            </article>
            <article className="card area-page__service-card">
              <span className="section-tag">For Land Deals</span>
              <h3>Plots, farm land, and agriculture land</h3>
              <p>Use this page as an enquiry gateway even if your exact match is not listed yet.</p>
            </article>
          </div>

          <div className="area-visual-grid">
            {PROPERTY_VISUAL_CATEGORIES.slice(0, 4).map((category) => (
              <article className="card area-visual-grid__card" key={category.slug}>
                <strong>{category.title}</strong>
                <p>{category.description}</p>
              </article>
            ))}
          </div>

          {areaCount ? (
            <div className="property-grid">
              {area.properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="card area-page__empty">
              <span className="section-tag">Inventory Desk</span>
              <h2>No live listing card here yet</h2>
              <p>
                This Gurgaon page is ready for sector-wise discovery. If you are looking to buy,
                sell, rent, lease, or source land in {area.title}, send your requirement and we can
                line up matching options directly.
              </p>
            </div>
          )}
        </section>

        <aside className="area-page__sidebar">
          <LeadForm compact />
        </aside>
      </div>
    </main>
  );
}
