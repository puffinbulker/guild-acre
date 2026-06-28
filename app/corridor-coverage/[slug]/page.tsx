import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { getPropertiesByAreaSlug } from "@/lib/queries";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const AREA_INSIGHTS: Record<
  string,
  { title: string; summary: string; caution: string }
> = {
  "gurgaon-ncr": {
    title: "Anchor market for selective NCR land advisory",
    summary:
      "Gurgaon NCR is shown publicly as an anchor market for serious land buyers. Exact pocket interpretation and buyer-specific direction are handled privately.",
    caution:
      "Public scarcity narratives do not replace private buyer-fit review.",
  },
  pataudi: {
    title: "Spillover growth requires private judgement",
    summary:
      "Pataudi is covered as a long-horizon growth belt. Detailed suitability and movement logic are shared only inside accepted mandates.",
    caution:
      "The public overview is not an acquisition recommendation.",
  },
  farrukhnagar: {
    title: "Logistics interest requires private fit review",
    summary:
      "Farrukhnagar is covered for logistics and industrial-interest mandates where practical suitability is buyer-specific.",
    caution:
      "Operational fit and acquisition direction remain confidential.",
  },
  rewari: {
    title: "Industrial influence needs private interpretation",
    summary:
      "Rewari is covered for disciplined land-bank and industrial-growth interest, with desk-level review reserved for serious briefs.",
    caution:
      "Area interest alone is not a mandate direction.",
  },
  narnaul: {
    title: "Long-horizon logistics logic requires patience",
    summary:
      "Narnaul is covered for patient capital and long-horizon thinking, with suitability shaped around the buyer's actual horizon.",
    caution:
      "Public context should not be treated as a public thesis.",
  },
  mahendergarh: {
    title: "Selective land banking depends on liquidity realism",
    summary:
      "Mahendergarh is covered selectively for long-term land-bank interest where expectations, patience, and buyer profile matter.",
    caution:
      "Deeper review stays inside confidential mandate conversations.",
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
      `Review ${area.title} with private buyer-fit guidance, corridor orientation, and mandate-specific next steps.`,
    path: `/corridor-coverage/${slug}`,
  });
}

export default async function CorridorAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = await getPropertiesByAreaSlug(slug);

  if (!area) {
    notFound();
  }

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
            `Review public corridor orientation in ${area.title}. Deeper suitability and direction are shared privately after mandate fit.`}
        </p>
        <div className="page-intro__metrics">
          <span>Private matching available on enquiry</span>
          <span>Private mandate review available</span>
          <span>Public overview; private direction</span>
        </div>
      </section>

      <div className="area-page__actions">
        <Link href="/intelligence-reports" className="button">
          Review report access model
        </Link>
        <Link href="/corridor-coverage" className="button button--ghost">
          Back to corridor coverage
        </Link>
        <Link href="/acquisition-desk" className="collection-tab">
          Request private note
        </Link>
        <Link href="/due-diligence-framework" className="collection-tab">
          Private diligence
        </Link>
        <Link href="/ncr-land-intelligence" className="collection-tab">
          NCR intelligence
        </Link>
      </div>

      <div className="area-page__layout">
        <section className="area-page__content">
          <div className="area-page__service-grid">
            <article className="card area-page__service-card">
              <span className="section-tag">Buyer fit</span>
              <h3>Buyer fit before exposure</h3>
              <p>Clarify use case, capital range, timing, and fit before any deeper movement.</p>
            </article>
            <article className="card area-page__service-card">
              <span className="section-tag">Diligence</span>
              <h3>Private diligence orientation</h3>
              <p>The deeper review method is shared only inside accepted private mandates.</p>
            </article>
            <article className="card area-page__service-card">
              <span className="section-tag">Corridor logic</span>
              <h3>Corridor context and buyer fit</h3>
              <p>Read the area privately against the buyer's actual objective and horizon.</p>
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
                  <span>Buyer fit matters more than generic location buzz</span>
                </div>
                <div>
                  <strong>Key caution</strong>
                  <span>{AREA_INSIGHTS[slug].caution}</span>
                </div>
              </div>
            </section>
          ) : null}

          <div className="card area-page__empty">
            <span className="section-tag">Acquisition desk</span>
            <h2>Corridor notes are shared privately, not browsed publicly.</h2>
            <p>
              If you are evaluating land in {area.title}, send the brief so the
              response can be shaped around fit, timing, and private mandate direction.
            </p>
          </div>
        </section>

        <aside className="area-page__sidebar">
          <LeadForm />
        </aside>
      </div>
    </main>
    </>
  );
}




