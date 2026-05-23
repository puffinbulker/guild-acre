import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Corridor Coverage | Guild Acre",
  description:
    "Private corridor intelligence for select buyers evaluating Gurgaon NCR, Sohna, Aravali-adjacent belts, and emerging strategic growth corridors.",
  path: "/gurgaon",
});

export default function GurgaonPage() {
  const faqs = [
    {
      question: "Which Gurgaon corridors require deeper intelligence?",
      answer:
        "Sohna, SPR, Dwarka Expressway, Golf Course Extension, New Gurgaon, and Aravali-adjacent pockets all require different checks around access, policy direction, demand depth, and exit audience.",
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
      title: "Sohna Corridor",
      tag: "Growth Belt",
      text: "Parcel quality, approach road reality, policy momentum, and buyer depth need to be read together before conviction is formed.",
    },
    {
      title: "Aravali Belt",
      tag: "Sensitivity Zone",
      text: "Environmental context, use restrictions, terrain, water bodies, and documentation friction are central to any responsible review.",
    },
    {
      title: "Golf Course Extension",
      tag: "Premium Expansion",
      text: "Demand quality remains strong, but entry discipline, product maturity, and exact pocket continue to shape the acquisition thesis.",
    },
    {
      title: "Dwarka Expressway",
      tag: "Infrastructure Watch",
      text: "Growth expectation must be tested against delivery timelines, access quality, competing supply, and realistic exit logic.",
    },
    {
      title: "Southern Peripheral Road",
      tag: "Transition Axis",
      text: "Commercial pressure, residential absorption, and connectivity improvements create different readings by parcel and micro-location.",
    },
    {
      title: "New Gurgaon",
      tag: "Demand Migration",
      text: "Family-led migration, improving social infrastructure, and edge-market pricing need to be assessed with patience.",
    },
  ];

  const lenses = [
    "Ownership and title continuity",
    "Access and approach integrity",
    "Zoning and CLU relevance",
    "Environmental sensitivity",
    "Infrastructure probability",
    "Liquidity and exit logic",
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Corridor Coverage", path: "/gurgaon" },
        ])}
      />
      <main className="min-h-screen bg-[#050505] text-[#f4ead8]">
        <section className="border-b border-[#2d2a22] bg-[#050505]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <p className="text-xs uppercase text-[#b9a46d]">
              Gurgaon NCR intelligence
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f4ead8] sm:text-6xl lg:text-7xl">
              Corridor intelligence for selective land acquisition.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[#cfc5b3]">
              Gurgaon is no longer one market. Each belt requires its own view
              on access, policy, demand depth, infrastructure probability, and
              the quality of exit that a buyer can realistically expect.
            </p>

            <div className="mt-14 grid gap-px border border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-3">
              {[
                ["Coverage", "Gurgaon NCR and southern belts"],
                ["Method", "Private brief and diligence orientation"],
                ["Best for", "HNI buyers, founders, and family offices"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#0b0b0a] p-6 sm:p-7">
                  <p className="text-xs uppercase text-[#9d927f]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold text-[#f4ead8]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#b9a46d]">
              Corridor watch
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Strategic belts are evaluated by risk, timing, and liquidity.
            </h2>
          </div>

          <div className="mt-14 grid gap-px border border-[#2d2a22] bg-[#2d2a22] md:grid-cols-2 xl:grid-cols-3">
            {corridorCards.map((item) => (
              <article
                key={item.title}
                className="group min-h-[260px] bg-[#0b0b0a] p-7 transition duration-500 hover:bg-[#11100d] sm:p-8"
              >
                <p className="text-xs uppercase text-[#b9a46d]">{item.tag}</p>
                <h3 className="mt-8 text-3xl font-semibold leading-tight text-[#f4ead8]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#afa492] transition duration-500 group-hover:text-[#d5cab8]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#2d2a22] bg-[#0b0b0a]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#b9a46d]">
                Intelligence lenses
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
                The question is not where to buy. It is what can be proven.
              </h2>
            </div>

            <div className="grid gap-px border border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-2">
              {lenses.map((item) => (
                <div key={item} className="bg-[#10100e] p-6 text-base leading-7 text-[#d5cab8] transition duration-500 hover:bg-[#17150f] sm:p-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-10 border border-[#2d2a22] bg-[#0b0b0a] p-7 sm:p-9 lg:grid-cols-[0.78fr_1.22fr] lg:p-12">
            <div>
              <p className="text-xs uppercase text-[#b9a46d]">
                Request corridor brief
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-5xl">
                Need a private Gurgaon intelligence note?
              </h2>
            </div>
            <div>
              <p className="text-lg leading-9 text-[#cfc5b3]">
                Share the target belt, capital range, intended hold period, and
                known constraints. Guild Acre will respond with the most useful
                next step for a disciplined acquisition review.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-full border border-[#bda56a]/55 bg-[#f4ead8]/[0.025] px-6 py-4 text-center text-sm font-medium text-[#f4ead8] transition duration-500 hover:border-[#d4c083] hover:bg-[#bda56a]/10"
                >
                  Request Private Consultation
                </a>
                <a
                  href="https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20a%20private%20Gurgaon%20land%20intelligence%20brief."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#efe7d6]/15 px-6 py-4 text-center text-sm font-medium text-[#cfc5b3] transition duration-500 hover:border-[#bda56a] hover:text-[#f4ead8]"
                >
                  Access Intelligence Brief
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#b9a46d]">Gurgaon FAQ</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Questions before corridor commitment.
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="border border-[#2d2a22] bg-[#0b0b0a] p-6 transition duration-500 hover:border-[#bda56a]/45 sm:p-8"
              >
                <h3 className="text-2xl font-semibold text-[#f4ead8]">
                  {item.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#b8ad9b]">
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
