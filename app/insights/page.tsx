import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Land Intelligence Notes | Guild Acre",
  description:
    "Read high-level Guild Acre notes on land decision-making, corridor orientation, and private mandate discipline.",
  path: "/insights",
});

const articles = [
  {
    href: "/insights/verify-land-title-near-gurgaon",
    title: "Why title comfort matters before buying near Gurgaon",
    summary:
      "A high-level note on why ownership comfort should be settled before a buyer moves deeper.",
  },
  {
    href: "/insights/dwarka-expressway-vs-golf-course-extension-road",
    title: "Dwarka Expressway vs Golf Course Extension Road",
    summary:
      "A corridor comparison for buyers deciding between growth momentum and premium-family positioning in NCR.",
  },
  {
    href: "/insights/plotted-land-risk-signals-near-gurgaon",
    title: "Plotted land risk signals near Gurgaon",
    summary:
      "A high-level note on why polished plotted-land narratives still need private review.",
  },
  {
    href: "/insights/title-checks-before-buying-farmhouse-land",
    title: "Title checks before buying farmhouse land",
    summary:
      "A simple orientation on why lifestyle appeal should not outrun private review.",
  },
  {
    href: "/insights/corridor-coverage-comparison-for-serious-buyers",
    title: "Corridor coverage comparison for serious buyers",
    summary:
      "A high-level note on why corridor comparison should be shaped around private mandate fit.",
  },
];

export default function InsightsPage() {
  return (
    <>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="border-b border-[#16344a] bg-[#02070d]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs uppercase text-[#86b8c8]">
            Guild Acre intelligence notes
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Editorial notes for serious land acquisition decisions.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#b9cbd2] sm:text-lg sm:leading-8">
            These notes are intentionally high-level. They help buyers think clearly without publishing Guild Acre's internal checklists, scorecards, or acquisition playbook.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="border border-[#16344a] bg-[#081725] p-6 transition duration-500 hover:border-[#7aaec1]/45 hover:bg-[#10283b] sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-[#f2efe7]">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#93aab6]">
                {article.summary}
              </p>
              <div className="mt-6 text-sm font-semibold text-[#a9d4df]">
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


