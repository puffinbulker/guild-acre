import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Due Diligence Framework | Guild Acre",
  description:
    "Guild Acre's institutional due diligence framework for title visibility, litigation checks, zoning, access, infrastructure, and acquisition structuring.",
  path: "/due-diligence-framework",
});

const pillars = [
  {
    title: "Chain of Title Verification",
    text: "A minimum thirty-year ownership view is tested for missing links, succession issues, mutation gaps, and seller authority.",
  },
  {
    title: "Encumbrance & Litigation Audit",
    text: "Revenue court, civil court, lender charge, family dispute, and institutional lien signals are reviewed before movement.",
  },
  {
    title: "Zonal & Regulatory Assessment",
    text: "Master plan status, CLU feasibility, RERA relevance, environmental restrictions, and PLPA sensitivity are mapped.",
  },
  {
    title: "Infrastructure & Valuation Benchmarking",
    text: "Asking price is stress-tested against verified micro-market transactions and realistic infrastructure timelines.",
  },
  {
    title: "Access-Road Legality",
    text: "Approach roads are checked for legal standing, revenue-map visibility, physical usability, and informal dependency risk.",
  },
  {
    title: "Acquisition Structuring",
    text: "Payment milestones, possession logic, entity structure, documentation sequence, and post-acquisition controls are planned.",
  },
];

const sampleLens = [
  ["Parcel profile", "3.2-acre agricultural parcel on an emerging Haryana growth corridor."],
  ["Developer affiliation", "None. Treated as buyer-side land diligence, not a project purchase."],
  ["Primary concern", "Title continuity, CLU relevance, access-road legality, land-use fit, and long-horizon liquidity."],
  ["Advisory position", "Proceed only if revenue records, legal access, zoning context, and infrastructure availability are independently confirmed."],
];

export default function DueDiligenceFrameworkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Due Diligence Framework", path: "/due-diligence-framework" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">Methodology</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              The Guild Acre due diligence framework.
            </h1>
            <p className="mt-8 max-w-3xl border-l border-[#7fb7ca]/45 pl-5 text-lg leading-9 text-[#b9cbd2]">
              Institutional-grade risk filtering for private land acquisitions.
              Disciplined selection and rigorous vetting matter more than
              transaction volume.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-px border border-[#16344a] bg-[#16344a] md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((item, index) => (
              <article
                key={item.title}
                className="min-h-[300px] bg-[#081725] p-7 transition duration-500 hover:bg-[#10283b] sm:p-8"
              >
                <p className="font-[var(--font-editorial)] text-4xl text-[#7fb7ca]/45">
                  0{index + 1}
                </p>
                <h2 className="mt-10 text-3xl font-semibold leading-tight text-[#f2efe7]">
                  {item.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#899eaa]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#16344a] bg-[#081725]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.84fr_1.16fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Guild Acre research desk</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Example evaluation lens.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#93aab6]">
                This illustrates the structure used to evaluate a representative
                land opportunity. It is not an active public listing.
              </p>
            </div>

            <div className="border border-[#16344a] bg-[#0d2030] p-6 sm:p-8">
              <p className="text-xs uppercase text-[#86b8c8]">
                Sample opportunity
              </p>
              <div className="mt-8 divide-y divide-[#16344a]">
                {sampleLens.map(([label, value]) => (
                  <div key={label} className="grid gap-4 py-6 sm:grid-cols-[0.34fr_0.66fr]">
                    <h3 className="text-lg font-semibold text-[#f2efe7]">{label}</h3>
                    <p className="text-sm leading-7 text-[#93aab6]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 border border-[#16344a] bg-[#081725] p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Advisory position</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-5xl">
                Risk should surface before capital is committed.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-[#b9cbd2]">
                Guild Acre does not treat land acquisition as a simple
                introduction. Each dimension requires field record access, legal
                interpretation, and buyer-specific judgement.
              </p>
              <Link
                href="/acquisition-desk"
                className="mt-8 inline-flex rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#f2efe7]/[0.04]"
              >
                Mitigate Acquisition Risk
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
