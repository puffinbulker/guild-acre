import Link from "next/link";
import { GURGAON_MARKET_GUIDES } from "@/lib/market-intel";
import { getGurgaonAreaPages } from "@/lib/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Gurgaon Area Hub",
  description: "Browse Gurgaon property opportunities by sector, corridor, and locality."
};

const collectionLinks = [
  { label: "Buy Homes", href: "/listings?collection=BUY" },
  { label: "Rent", href: "/listings?collection=RENT" },
  { label: "Lease", href: "/listings?collection=LEASE" },
  { label: "New Launch", href: "/listings?collection=NEW_LAUNCH" },
  { label: "Commercial", href: "/listings?collection=COMMERCIAL" },
  { label: "Plots / Land", href: "/listings?collection=LAND" },
  { label: "Farm Land", href: "/listings?collection=FARMLAND" },
  { label: "Builder Floors", href: "/listings?collection=FLOORS" }
];

export default async function GurgaonHubPage() {
  const areas = await getGurgaonAreaPages();
  const localities = areas.filter((item) => item.kind === "location");
  const sectors = areas.filter((item) => item.kind === "sector");

  return (
    <main className="container page-shell gurgaon-hub">
      <section className="page-intro page-intro--listing">
        <span className="section-tag">Gurgaon Portal Hub</span>
        <h1>Sector-wise and locality-wise Gurgaon property discovery</h1>
        <p>
          Browse Gurgaon like a focused portal built for buying, selling, rent, lease, resale,
          fresh booking, commercial, plots, villa, kothi, and farm land requirements.
        </p>
      </section>

      <section className="hub-links">
        {collectionLinks.map((item) => (
          <Link key={item.href} href={item.href} className="collection-tab">
            {item.label}
          </Link>
        ))}
      </section>

      <section className="hub-grid">
        <article className="card hub-panel">
          <span className="section-tag">Prime Localities</span>
          <h2>Browse by Gurgaon corridor</h2>
          <div className="hub-panel__grid">
            {localities.map((item) => (
              <Link key={item.slug} href={`/gurgaon/${item.slug}`} className="locality-chip-card">
                <strong>{item.title}</strong>
                <span>{item.count} listing{item.count === 1 ? "" : "s"}</span>
                <em>{item.summary || "Curated Gurgaon inventory and advisory support."}</em>
              </Link>
            ))}
          </div>
        </article>

        <article className="card hub-panel">
          <span className="section-tag">Sector Pages</span>
          <h2>Browse by Gurgaon sector</h2>
          <div className="hub-panel__grid">
            {sectors.map((item) => (
              <Link key={item.slug} href={`/gurgaon/${item.slug}`} className="locality-chip-card">
                <strong>{item.title}</strong>
                <span>{item.count} listing{item.count === 1 ? "" : "s"}</span>
                <em>{item.summary || "Sector-level property discovery for serious buyers and investors."}</em>
              </Link>
            ))}
          </div>
        </article>
      </section>

      <section className="market-intel">
        <div className="section-head">
          <div>
            <span className="section-tag">All Sector Benchmarks</span>
            <h2>Indicative Gurgaon price map for sectors and corridors</h2>
          </div>
          <span className="eyebrow">Built from current public trend references</span>
        </div>
        <div className="market-intel__grid">
          {GURGAON_MARKET_GUIDES.map((guide) => (
            <article className="market-intel__card" key={guide.slug}>
              <div className="market-intel__body">
                <div className="market-intel__price">
                  <strong>INR {guide.avgPricePerSqft.toLocaleString("en-IN")} / sq.ft.</strong>
                  <span>{guide.title}</span>
                </div>
                <div className="market-intel__meta">
                  <span>{guide.indicativeRange}</span>
                  <span>{guide.movement}</span>
                </div>
                <p>{guide.outlook}</p>
                <div className="market-intel__footer">
                  <a href={guide.sourceUrl} target="_blank" rel="noreferrer">
                    {guide.sourceLabel}
                  </a>
                  <Link href={`/gurgaon/${guide.slug}`}>Open page</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
