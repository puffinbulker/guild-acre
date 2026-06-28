import Link from "next/link";
import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Private Diligence Orientation | Guild Acre",
  description:
    "Guild Acre explains its diligence posture without publishing proprietary checklists, scoring logic, or acquisition playbooks.",
  path: "/due-diligence-framework",
});

const publicSignals = [
  {
    title: "What We Show Publicly",
    text: "The website explains Guild Acre's role, covered corridors, buyer suitability, and why disciplined land evaluation matters before capital moves.",
  },
  {
    title: "What Stays Private",
    text: "Detailed checklists, scorecards, source logic, document sequencing, seller-screening notes, and negotiation direction are not published online.",
  },
  {
    title: "How Access Begins",
    text: "A buyer brief is reviewed confidentially. Deeper diligence orientation is shared only when the mandate is accepted and relevant.",
  },
];

const privateBoundaries = [
  "Internal scorecards and risk notes",
  "Document review sequence and escalation logic",
  "Micro-pocket interpretation and source intelligence",
  "Buyer-specific negotiation and acquisition direction",
  "Private reports, notes, and shortlist reasoning",
  "Commercial terms discussed inside an accepted mandate",
];

export default function DueDiligenceFrameworkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Private Diligence Orientation", path: "/due-diligence-framework" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">Private methodology boundary</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              The diligence posture is public. The operating system is private.
            </h1>
            <p className="mt-8 max-w-3xl border-l border-[#7fb7ca]/45 pl-5 text-lg leading-9 text-[#b9cbd2]">
              Guild Acre gives buyers enough public context to understand our
              discipline, but the deeper framework is protected for accepted
              private mandates.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-px border border-[#16344a] bg-[#16344a] md:grid-cols-3">
            {publicSignals.map((item, index) => (
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
              <p className="text-xs uppercase text-[#86b8c8]">Confidential material</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Private mandate material is not a public checklist.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#93aab6]">
                This protects the buyer, the desk, and the quality of decision
                making. Serious land work should not be reduced to copyable
                website formulas.
              </p>
            </div>

            <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
              {privateBoundaries.map((item) => (
                <div key={item} className="bg-[#0d2030] p-6 text-base leading-7 text-[#c7d8de]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 border border-[#16344a] bg-[#081725] p-7 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Advisory position</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-5xl">
                Public clarity. Private execution.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-[#b9cbd2]">
                If a buyer has a defined requirement, Guild Acre can review the
                brief privately and decide whether a deeper diligence direction
                is appropriate.
              </p>
              <Link
                href="/acquisition-desk"
                className="mt-8 inline-flex rounded-[2px] border border-[#7fb7ca]/45 px-7 py-4 text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#f2efe7]/[0.04]"
              >
                Submit Private Brief
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
