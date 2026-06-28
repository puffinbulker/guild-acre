import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Corridor Coverage | Guild Acre",
  description:
    "Private corridor intelligence for Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, Mahendergarh, and emerging Haryana growth corridors.",
  path: "/corridor-coverage",
});

export default function CorridorCoveragePage() {
  const faqs = [
    {
      question: "Which NCR corridors require deeper intelligence?",
      answer:
        "Guild Acre publicly names Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh so buyers understand coverage. Private comparison and micro-pocket judgement are not published online.",
    },
    {
      question: "Can Guild Acre compare corridors privately?",
      answer:
        "Yes. Corridor comparison is handled through a private brief so the analysis can be aligned with capital range, holding period, use case, and risk tolerance.",
    },
    {
      question: "Why avoid open comparison tables?",
      answer:
        "Generic tables create false confidence. Serious land decisions need buyer-specific context, and that context belongs inside a private mandate.",
    },
  ];

  const corridorCards = [
    {
      title: "Gurgaon NCR",
      tag: "HNI Advisory",
      text: "Publicly covered as an anchor market for strategic land, plotted, farmhouse, and long-term acquisition interest.",
    },
    {
      title: "Pataudi",
      tag: "Spillover Growth",
      text: "Tracked as an emerging belt where long-horizon interest requires private suitability review before movement.",
    },
    {
      title: "Farrukhnagar",
      tag: "Logistics Corridor",
      text: "Covered for logistics and industrial-interest mandates where practical fit is reviewed privately.",
    },
    {
      title: "Rewari",
      tag: "Industrial Influence",
      text: "Monitored for disciplined land-bank and transport-linked buyer interest inside confidential mandates.",
    },
    {
      title: "Narnaul",
      tag: "Freight Corridor Watch",
      text: "Tracked for patient capital and long-horizon thinking, not quick public conviction.",
    },
    {
      title: "Mahendergarh",
      tag: "Land Banking",
      text: "Covered selectively for long-term land-bank interest where buyer fit and expectations matter.",
    },
  ];

  const lenses = [
    "Public corridor coverage",
    "Private buyer-fit review",
    "Confidential intelligence note",
    "Mandate-specific next step",
    "No public scorecards",
    "No open acquisition playbook",
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Corridor Coverage", path: "/corridor-coverage" },
        ])}
      />
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#86b8c8]">
              Corridor coverage intelligence
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
              Corridor coverage for selective land acquisition.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              Haryana land is not one market. Guild Acre publicly identifies the corridors we track while keeping deeper filters, comparisons, and acquisition direction private.
            </p>

            <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-3">
              {[
                ["Coverage", "Gurgaon NCR and emerging Haryana growth corridors"],
                ["Method", "Public orientation and private mandate review"],
                ["Best for", "HNI buyers, founders, and family offices"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#081725] p-6 sm:p-7">
                  <p className="text-xs uppercase text-[#738a99]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#f2efe7]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">
              Corridor watch
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Strategic belts are introduced publicly and interpreted privately.
            </h2>
          </div>

          <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] md:grid-cols-2 xl:grid-cols-3">
            {corridorCards.map((item) => (
              <article
                key={item.title}
                className="group min-h-[260px] bg-[#081725] p-7 transition duration-500 hover:bg-[#10283b] sm:p-8"
              >
                <p className="text-xs uppercase text-[#86b8c8]">{item.tag}</p>
                <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#f2efe7]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#899eaa] transition duration-500 group-hover:text-[#c7d8de]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#16344a] bg-[#081725]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">
                Intelligence lenses
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                The public site should not become a public operating manual.
              </h2>
            </div>

            <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
              {lenses.map((item) => (
                <div key={item} className="bg-[#0d2030] p-6 text-base leading-7 text-[#c7d8de] transition duration-500 hover:bg-[#173850] sm:p-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 border border-[#16344a] bg-[#081725] p-7 sm:p-9 lg:grid-cols-[0.78fr_1.22fr] lg:p-12">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">
                Request corridor brief
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-5xl">
                Need a private corridor intelligence note?
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-[#b9cbd2]">
                Share the target belt, capital range, intended hold period, and
                known constraints. Guild Acre will respond with the most useful
                next step for a disciplined acquisition review.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/acquisition-desk"
                  className="rounded-full border border-[#7aaec1]/55 bg-[#f2efe7]/[0.025] px-6 py-4 text-center text-sm font-medium text-[#f2efe7] transition duration-500 hover:border-[#a9d4df] hover:bg-[#7aaec1]/10"
                >
                  Request Private Consultation
                </a>
                <a
                  href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20a%20private%20Gurgaon%20land%20intelligence%20brief."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#e8f0f2]/15 px-6 py-4 text-center text-sm font-medium text-[#b9cbd2] transition duration-500 hover:border-[#7aaec1] hover:text-[#f2efe7]"
                >
                  Access Intelligence Brief
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">
              Corridor coverage FAQ
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Questions before corridor commitment.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="border border-[#16344a] bg-[#081725] p-6 transition duration-500 hover:border-[#7aaec1]/45 sm:p-8"
              >
                <h3 className="text-2xl font-semibold text-[#f2efe7]">
                  {item.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#93aab6]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}


