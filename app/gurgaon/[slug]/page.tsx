import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { LeadForm } from "@/components/lead-form";
import { getMarketGuideBySlug, PROPERTY_VISUAL_CATEGORIES } from "@/lib/market-intel";
import { getPropertiesByAreaSlug } from "@/lib/queries";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { formatListingCount } from "@/lib/utils";

export const dynamic = "force-dynamic";

const AREA_INSIGHTS: Record<
  string,
  { title: string; summary: string; caution: string }
> = {
  "golf-course-extension-road": {
    title: "Why buyers track this corridor closely",
    summary:
      "Golf Course Extension Road suits premium upgrade buyers, newer-launch seekers, and families looking for larger-format homes with long-term relevance. The corridor performs best when buyers compare product quality and positioning carefully rather than assuming every project commands the same premium.",
    caution:
      "This market rewards selective shortlisting. Product quality, exact pocket, and pricing discipline matter more here than generic corridor branding.",
  },
  "dwarka-expressway": {
    title: "Why investors keep returning to this belt",
    summary:
      "Dwarka Expressway continues to attract buyers looking for infrastructure-led upside, launch-stage positioning, and high-visibility residential or plotted opportunities. It works best for buyers who are clear about entry level, holding horizon, and the difference between momentum and durable value.",
    caution:
      "Do not treat every Dwarka Expressway option as equal. Access, project quality, and exit comfort can vary sharply by micro-pocket.",
  },
  "sohna-road": {
    title: "What makes this corridor different",
    summary:
      "Sohna Road is more mixed than trophy-led. It suits buyers who want practical connectivity, everyday livability, and a broader spread of residential and commercial demand rather than a purely luxury narrative.",
    caution:
      "The right fit here depends heavily on whether you are buying for end use, rental practicality, or land-led positioning around the wider belt.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = await getPropertiesByAreaSlug(slug);

  if (!area) {
    return {};
  }

  return createPageMetadata({
    title: `${area.title} Property in Gurgaon | Prices, Insights & Curated Options | Guild Acre`,
    description:
      area.summary ||
      `Explore ${area.title} property in Gurgaon with price context, buyer-fit guidance, and curated options across luxury, plotted, and land-led requirements.`,
    path: `/gurgaon/${slug}`,
  });
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
    <>
    <JsonLd
      data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Gurgaon", path: "/gurgaon" },
        { name: area.title, path: `/gurgaon/${slug}` },
      ])}
    />
    <main className="container page-shell area-page">
      <section className="page-intro page-intro--listing">
        <span className="section-tag">
          Gurgaon {area.kind === "sector" ? "Sector Page" : "Locality Page"}
        </span>
        <h1>{area.title}</h1>
        <p>
          {area.summary ||
            `Explore curated opportunities in ${area.title}, Gurgaon for buying, selling, rent, lease, resale, fresh booking, commercial, and land-led requirements.`}
        </p>
        <div className="page-intro__metrics">
          <span>
            {areaCount
              ? `${formatListingCount(areaCount)} currently visible`
              : "Private matching available on enquiry"}
          </span>
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
              <p>Use this page to request filtered options even when the most suitable match is discussed privately.</p>
            </article>
          </div>

          {AREA_INSIGHTS[slug] ? (
            <section className="area-market card">
              <div className="area-market__intro">
                <span className="section-tag">Local Buyer Insight</span>
                <h2>{AREA_INSIGHTS[slug].title}</h2>
                <p>{AREA_INSIGHTS[slug].summary}</p>
              </div>
              <div className="area-market__stats">
                <div>
                  <strong>Buyer fit</strong>
                  <span>Use case matters more than generic location buzz</span>
                </div>
                <div>
                  <strong>Key caution</strong>
                  <span>{AREA_INSIGHTS[slug].caution}</span>
                </div>
              </div>
            </section>
          ) : null}

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
              <h2>Curated opportunities are often shared privately here</h2>
              <p>
                If you are looking to buy, sell, rent, lease, or source land in{" "}
                {area.title}, send your requirement and we can help shortlist
                relevant options directly based on fit, availability, and timing.
              </p>
            </div>
          )}
        </section>

        <aside className="area-page__sidebar">
          <LeadForm compact />
        </aside>
      </div>
    </main>
    </>
  );
}
