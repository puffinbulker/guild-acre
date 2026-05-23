import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Land Intelligence Notes | Guild Acre",
  description:
    "Read private-office style notes on Gurgaon NCR land diligence, corridor intelligence, title checks, and acquisition risk.",
  path: "/insights",
});

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
    <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
    <main className="min-h-screen bg-[#050505] text-[#f4ead8]">
      <section className="border-b border-[#2d2a22] bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase text-[#b9a46d]">
            Guild Acre intelligence notes
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Editorial notes for serious land acquisition decisions.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#cfc5b3] sm:text-lg sm:leading-8">
            These notes help buyers think more clearly about land, title,
            access, farmhouse decisions, and corridor-level tradeoffs before
            deeper diligence or negotiation begins.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="border border-[#2d2a22] bg-[#0b0b0a] p-6 transition duration-500 hover:border-[#bda56a]/45 hover:bg-[#11100d] sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-[#f4ead8]">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#b8ad9b]">
                {article.summary}
              </p>
              <div className="mt-6 text-sm font-semibold text-[#d4c083]">
                Read note
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
