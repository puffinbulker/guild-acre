import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Insights | Gurgaon, Sohna & Land Advisory Guides | Guild Acre",
  description:
    "Read practical guides on Gurgaon property, land due diligence, farmhouse buying, and corridor comparison for serious NCR buyers and investors.",
};

const articles = [
  {
    href: "/insights/verify-land-title-near-gurgaon",
    title: "How to verify land title before buying near Gurgaon",
    summary:
      "A practical checklist for buyers evaluating land-led opportunities around Gurgaon, Sohna, and nearby belts.",
  },
  {
    href: "/insights/sohna-vs-naugaon-farmhouse-investment",
    title: "Sohna vs Naugaon for farmhouse investment",
    summary:
      "A buyer-focused comparison of two very different land and lifestyle narratives for NCR buyers.",
  },
  {
    href: "/insights/dwarka-expressway-vs-golf-course-extension-road",
    title: "Dwarka Expressway vs Golf Course Extension Road",
    summary:
      "A corridor comparison for buyers deciding between growth momentum and premium-family positioning in Gurgaon.",
  },
  {
    href: "/insights/red-flags-in-plotted-land-deals-near-gurgaon",
    title: "Red flags in plotted land deals near Gurgaon",
    summary:
      "A practical guide to the warning signs buyers should notice before treating a plotted deal as serious.",
  },
  {
    href: "/insights/title-checks-before-buying-farmhouse-land",
    title: "Title checks before buying farmhouse land",
    summary:
      "A simpler way to think about ownership, use-case risk, and diligence questions before moving deeper into a farmhouse land deal.",
  },
  {
    href: "/insights/gurgaon-corridor-comparison-for-serious-buyers",
    title: "Gurgaon corridor comparison for serious buyers",
    summary:
      "A high-level comparison of how Gurgaon corridors differ for premium-family buyers, investors, and land-led enquiries.",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Guild Acre Insights
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Practical property guides for serious Gurgaon and NCR buyers.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            These guides are designed to help buyers think more clearly about
            land, plotted opportunities, farmhouse decisions, and corridor-level
            tradeoffs before moving deeper into site visits or negotiations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.07] sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {article.summary}
              </p>
              <div className="mt-6 text-sm font-semibold text-cyan-300">
                Read guide
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
