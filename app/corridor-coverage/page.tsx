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
        "Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh all require different checks around access, CLU, land use, title chain, policy direction, infrastructure probability, and exit audience.",
    },
    {
      question: "Can Guild Acre compare corridors privately?",
      answer:
        "Yes. Corridor comparison is handled through a private brief so the analysis can be aligned with capital range, holding period, use case, and risk tolerance.",
    },
    {
      question: "Why avoid open comparison tables?",
      answer:
        "Land decisions can be distorted by headline pricing. A serious review needs micro-pocket context, title and access reality, environmental sensitivity, and liquidity logic.",
    },
  ];

  const corridorCards = [
    {
      title: "Gurgaon NCR",
      tag: "HNI Advisory",
      text: "Plotted development, farmhouse evaluation, and strategic land acquisition require title clarity, zoning fit, and entry discipline.",
    },
    {
      title: "Pataudi",
      tag: "Spillover Growth",
      text: "Highway-led residential and plotted opportunity must be tested through CLU, controlled-area context, access, and acquisition risk.",
    },
    {
      title: "Farrukhnagar",
      tag: "Logistics Corridor",
      text: "Warehousing and industrial expansion potential depends on zoning, road width, land use, and title-chain continuity.",
    },
    {
      title: "Rewari",
      tag: "Industrial Influence",
      text: "Bawal-Dharuhera-Manesar influence is reviewed alongside mutation, registry chain, and master-plan alignment.",
    },
    {
      title: "Narnaul",
      tag: "Freight Corridor Watch",
      text: "Long-term logistics potential must be read through project timeline, water, power, access quality, and resale liquidity.",
    },
    {
      title: "Mahendergarh",
      tag: "Land Banking",
      text: "Selective long-term land banking depends on liquidity, infrastructure availability, clear title, and realistic exit audience.",
    },
  ];

  const lenses = [
    "Ownership and title continuity",
    "Access and approach integrity",
    "Zoning, CLU, and controlled-area relevance",
    "Water, power, and infrastructure availability",
    "Infrastructure probability",
    "Liquidity and exit logic",
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
              Corridor intelligence for selective land acquisition.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#b9cbd2]">
              Haryana land is not one market. Each belt requires its own view
              on access, policy, title, CLU, infrastructure probability, and the
              quality of exit that a buyer can realistically expect.
            </p>

            <div className="mt-14 grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-3">
              {[
                ["Coverage", "Gurgaon NCR and emerging Haryana growth corridors"],
                ["Method", "Private brief and diligence orientation"],
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
              Strategic belts are evaluated by risk, timing, and liquidity.
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
                The question is not where to buy. It is what can be proven.
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
