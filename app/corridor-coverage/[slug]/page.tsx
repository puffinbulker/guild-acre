import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/property-card";
import { LeadForm } from "@/components/lead-form";
import { getMarketGuideBySlug, PROPERTY_VISUAL_CATEGORIES } from "@/lib/market-intel";
import { getPropertiesByAreaSlug } from "@/lib/queries";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { formatRecordCount } from "@/lib/utils";

export const dynamic = "force-dynamic";

const AREA_INSIGHTS: Record<
  string,
  { title: string; summary: string; caution: string }
> = {
  "gurgaon-ncr": {
    title: "Anchor market for selective NCR land advisory",
    summary:
      "Gurgaon NCR is reviewed for HNI land advisory, plotted development, farmhouse evaluation, and strategic acquisition where scarcity, access, legal continuity, and buyer depth must be read together.",
    caution:
      "Scarcity does not remove risk. Exact pocket, title continuity, access integrity, and entry discipline still decide whether a parcel deserves capital.",
  },
  pataudi: {
    title: "Spillover growth requires controlled-area discipline",
    summary:
      "Pataudi is tracked for Gurgaon spillover growth, highway-led residential movement, and plotted opportunity where CLU probability, controlled-area status, and access-road legality need early review.",
    caution:
      "The corridor should be filtered for CLU relevance, road access, ownership chain, and acquisition risk before pricing momentum is taken seriously.",
  },
  farrukhnagar: {
    title: "Logistics potential depends on land-use clarity",
    summary:
      "Farrukhnagar is evaluated for logistics, warehousing, and industrial expansion potential. Zoning, road width, land-use fit, and title-chain continuity shape the investment case.",
    caution:
      "Operational narratives can overrun documentation. Road width, permitted use, access control, and clean transferability must be established.",
  },
  rewari: {
    title: "Industrial influence needs registry-chain comfort",
    summary:
      "Rewari is read through transport-linked growth and Bawal-Dharuhera-Manesar influence, with attention to mutation, registry chain, master-plan alignment, and sector-level suitability.",
    caution:
      "Industrial adjacency is not enough. The parcel must fit land-use, title, access, and liquidity conditions for the buyer's intended holding period.",
  },
  narnaul: {
    title: "Long-horizon logistics logic requires patience",
    summary:
      "Narnaul is monitored for freight corridor probability and Nangal Chaudhary logistics hub influence, with conservative review of project timelines, water, power, access, and resale liquidity.",
    caution:
      "This is a long-hold market. Infrastructure delivery, utilities, and exit depth should be treated as core risks rather than background details.",
  },
  mahendergarh: {
    title: "Selective land banking depends on liquidity realism",
    summary:
      "Mahendergarh is reviewed for long-term land banking, education-linked demand, agri-support use cases, and logistics-support potential where title clarity and infrastructure availability are defensible.",
    caution:
      "The strongest opportunities here are selective. Liquidity, infrastructure, clear title, and buyer-fit discipline matter more than broad corridor storytelling.",
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
    title: `${area.title} Corridor Intelligence | Guild Acre`,
    description:
      area.summary ||
      `Review ${area.title} with buyer-fit guidance, title and CLU review, corridor mapping, and acquisition risk screening.`,
    path: `/corridor-coverage/${slug}`,
  });
}

export default async function CorridorAreaPage({ params }: Props) {
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
        { name: "Corridor Coverage", path: "/corridor-coverage" },
        { name: area.title, path: `/corridor-coverage/${slug}` },
      ])}
    />
    <main className="container page-shell area-page">
      <section className="page-intro page-intro--record">
        <span className="section-tag">
          Corridor intelligence record
        </span>
        <h1>{area.title}</h1>
        <p>
            {area.summary ||
            `Review private acquisition context in ${area.title} for land-led requirements, corridor fit, and diligence direction.`}
        </p>
        <div className="page-intro__metrics">
          <span>
            {areaCount
              ? `${formatRecordCount(areaCount)} public reference records`
              : "Private matching available on enquiry"}
          </span>
          <span>Verified Opportunity Desk review available</span>
          <span>Land thesis, access, zoning, and exit logic</span>
        </div>
      </section>

      <div className="area-page__actions">
        <Link href={`/strategic-opportunities?location=${areaQuery}`} className="button">
          Review intelligence context
        </Link>
        <Link href="/corridor-coverage" className="button button--ghost">
          Back to corridor coverage
        </Link>
        <Link href={`/strategic-opportunities?location=${areaQuery}&collection=COMMERCIAL`} className="collection-tab">
          Commercial context
        </Link>
        <Link href={`/strategic-opportunities?location=${areaQuery}&collection=LAND`} className="collection-tab">
          Land / plotted context
        </Link>
        <Link href={`/strategic-opportunities?location=${areaQuery}&collection=FARMLAND`} className="collection-tab">
          Farm land context
        </Link>
      </div>

      <div className="area-page__layout">
        <section className="area-page__content">
          {marketGuide ? (
            <section className="area-market card">
              <div className="area-market__intro">
                <span className="section-tag">Corridor benchmark</span>
                <h2>{marketGuide.title} intelligence benchmark</h2>
                <p>{marketGuide.outlook}</p>
              </div>
              <div className="area-market__stats">
                <div>
                  <strong>
                    {marketGuide.avgPricePerSqft
                      ? `INR ${marketGuide.avgPricePerSqft.toLocaleString("en-IN")}`
                      : "Private review"}
                  </strong>
                  <span>Indicative benchmark</span>
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
                <span className="section-tag">Market Intelligence Note</span>
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
