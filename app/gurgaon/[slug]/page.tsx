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
      "This market rewards selective evaluation discipline. Product quality, exact pocket, and pricing discipline matter more here than generic corridor branding.",
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
    title: `${area.title} Land Intelligence in Gurgaon | Guild Acre`,
    description:
      area.summary ||
      `Review ${area.title} with price context, buyer-fit guidance, and corridor intelligence for selective land-led requirements.`,
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
        { name: "Corridor Coverage", path: "/gurgaon" },
        { name: area.title, path: `/gurgaon/${slug}` },
      ])}
    />
    <main className="container page-shell area-page">
      <section className="page-intro page-intro--listing">
        <span className="section-tag">
          Corridor intelligence record
        </span>
        <h1>{area.title}</h1>
        <p>
          {area.summary ||
            `Review private acquisition context in ${area.title}, Gurgaon for land-led requirements, corridor fit, and diligence direction.`}
        </p>
        <div className="page-intro__metrics">
          <span>
            {areaCount
              ? `${formatListingCount(areaCount)} public reference records`
              : "Private matching available on enquiry"}
          </span>
          <span>Reference visibility and private review available</span>
          <span>Land thesis, access, zoning, and exit logic</span>
        </div>
      </section>

      <div className="area-page__actions">
        <Link href={`/listings?location=${areaQuery}`} className="button">
          Review public reference records
        </Link>
        <Link href="/gurgaon" className="button button--ghost">
          Back to corridor coverage
        </Link>
        <Link href={`/listings?location=${areaQuery}&collection=COMMERCIAL`} className="collection-tab">
          Commercial context
        </Link>
        <Link href={`/listings?location=${areaQuery}&collection=LAND`} className="collection-tab">
          Land / plotted context
        </Link>
        <Link href={`/listings?location=${areaQuery}&collection=FARMLAND`} className="collection-tab">
          Farm land context
        </Link>
      </div>

      <div className="area-page__layout">
        <section className="area-page__content">
          {marketGuide ? (
            <section className="area-market card">
              <div className="area-market__intro">
                <span className="section-tag">Corridor benchmark</span>
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
              <span className="section-tag">Buyer fit</span>
              <h3>Acquisition thesis before exposure</h3>
              <p>Study use case, capital range, timing, and fit before moving toward any public or private record.</p>
            </article>
            <article className="card area-page__service-card">
              <span className="section-tag">Diligence</span>
              <h3>Title, access, and use-case review</h3>
              <p>Frame the key questions around records, approach, boundaries, zoning, and practical usability.</p>
            </article>
            <article className="card area-page__service-card">
              <span className="section-tag">Corridor logic</span>
              <h3>Market context and exit quality</h3>
              <p>Read the area through demand depth, infrastructure probability, and realistic liquidity.</p>
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
            <section className="area-page__records">
              <div>
                <span className="section-tag">Visible reference records</span>
                <h2>Records for orientation, not open-market browsing.</h2>
              </div>
              <div className="property-grid">
                {area.properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </section>
          ) : (
            <div className="card area-page__empty">
              <span className="section-tag">Acquisition desk</span>
              <h2>Relevant opportunities are often reviewed privately here</h2>
              <p>
                If you are evaluating land in {area.title}, send the brief so
                the response can be shaped around fit, availability, timing, and
                diligence direction.
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
