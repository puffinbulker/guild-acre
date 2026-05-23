import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Guild Acre | Private Land Intelligence Office",
  description:
    "Learn how Guild Acre operates as a private land intelligence office for strategic acquisition advisory across Gurgaon NCR, Sohna, and the Aravali Belt.",
  path: "/about",
});

export default function AboutPage() {
  const principles = [
    {
      title: "Intelligence before exposure",
      text: "The work begins with geography, records, access, policy context, and buyer intent before any site movement or negotiation pressure.",
    },
    {
      title: "Capital-fit discipline",
      text: "A mandate is judged by purpose, holding period, liquidity, and risk tolerance rather than headline pricing or market excitement.",
    },
    {
      title: "Private office cadence",
      text: "Serious buyers receive quiet, relevant, and structured input. The process is intentionally selective and low-noise.",
    },
  ];

  const strengths = [
    "Gurgaon NCR and southern corridor reading",
    "Land, farmhouse, plotted, and strategic acreage evaluation",
    "Title, access, zoning, and environmental sensitivity orientation",
    "Founder-led judgement before deeper capital movement",
  ];

  const faqs = [
    {
      question: "What is Guild Acre?",
      answer:
        "Guild Acre is a private land intelligence office for select NCR buyers who need strategic acquisition clarity before committing time, capital, or reputation to a land-led opportunity.",
    },
    {
      question: "Who is the work designed for?",
      answer:
        "The work suits HNI buyers, family offices, founders, and serious investors evaluating Gurgaon NCR, Sohna, Aravali-adjacent belts, and emerging growth corridors.",
    },
    {
      question: "How does the process begin?",
      answer:
        "It begins with a confidential brief: capital range, geography, acquisition logic, timing, and known concerns. The next step is shaped around diligence direction and mandate fit.",
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <main className="min-h-screen bg-[#050505] text-[#f4ead8]">
        <section className="border-b border-[#2d2a22] bg-[#050505]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-32">
            <div>
              <p className="text-xs uppercase text-[#b9a46d]">About Guild Acre</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f4ead8] sm:text-6xl lg:text-7xl">
                A private land intelligence office for strategic NCR acquisition.
              </h1>
            </div>

            <div className="flex flex-col justify-end text-lg leading-9 text-[#cfc5b3]">
              <p>
                Guild Acre helps serious buyers understand land-led opportunities
                before the market becomes noisy. The focus is on judgement,
                discretion, and acquisition logic across Gurgaon NCR, Sohna,
                Aravali-adjacent terrain, and emerging growth corridors.
              </p>
              <p className="mt-6">
                The office is not built around public browsing behavior. It is
                built around selective briefs, corridor intelligence, diligence
                orientation, and the decision quality required before capital
                moves.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-xs uppercase text-[#b9a46d]">Operating principles</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Quiet process. Stronger judgement. Fewer false signals.
            </h2>
          </div>

          <div className="grid gap-px border border-[#2d2a22] bg-[#2d2a22]">
            {principles.map((item) => (
              <article
                key={item.title}
                className="bg-[#0b0b0a] p-7 transition duration-500 hover:bg-[#11100d] sm:p-9"
              >
                <h3 className="text-3xl font-semibold leading-tight text-[#f4ead8]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#b8ad9b]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#2d2a22] bg-[#0b0b0a]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#b9a46d]">Founder-led office</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
                Built around field memory and institutional discipline.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#cfc5b3]">
                Led by Sandeep Kumar, Guild Acre combines more than a decade of
                Gurgaon market experience with a private-office approach to land
                evaluation. The advisory posture is intentionally calm,
                evidence-aware, and selective.
              </p>
            </div>

            <div className="grid gap-px border border-[#2d2a22] bg-[#2d2a22] sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="bg-[#10100e] p-6 text-base leading-7 text-[#d5cab8] sm:p-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#b9a46d]">About FAQ</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f4ead8] sm:text-6xl">
              Questions before a private mandate.
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
