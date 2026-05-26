import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Guild Acre | Private Land Investment Intelligence Desk",
  description:
    "Learn how Guild Acre operates as a private land investment intelligence desk for Gurgaon NCR and emerging Haryana growth corridors.",
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
    "Gurgaon NCR and emerging Haryana corridor mapping",
    "Land, farmhouse, plotted, and strategic acreage evaluation",
    "Title, access, zoning, CLU, and acquisition risk orientation",
    "Founder-led judgement before deeper capital movement",
  ];

  const faqs = [
    {
      question: "What is Guild Acre?",
      answer:
        "Guild Acre is a Private Land Investment Intelligence Desk for Gurgaon NCR & Emerging Haryana Growth Corridors, built for buyers who need strategic clarity before committing time, capital, or reputation.",
    },
    {
      question: "Who is the work designed for?",
      answer:
        "The work suits HNI buyers, family offices, founders, and serious investors evaluating Gurgaon NCR, Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh.",
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
      <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-32">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">About Guild Acre</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-[#f2efe7] sm:text-6xl lg:text-7xl">
                A private land investment intelligence desk for strategic Haryana corridor acquisition.
              </h1>
            </div>

            <div className="flex flex-col justify-end text-lg leading-9 text-[#b9cbd2]">
              <p>
                Guild Acre helps serious buyers understand land-led opportunities
                before the market becomes noisy. The focus is on judgement,
                discretion, and acquisition logic across Gurgaon NCR, Pataudi,
                Farrukhnagar, Rewari, Narnaul, and Mahendergarh.
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
            <p className="text-xs uppercase text-[#86b8c8]">Operating principles</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Quiet process. Stronger judgement. Fewer false signals.
            </h2>
          </div>

          <div className="grid gap-px border border-[#16344a] bg-[#16344a]">
            {principles.map((item) => (
              <article
                key={item.title}
                className="bg-[#081725] p-7 transition duration-500 hover:bg-[#10283b] sm:p-9"
              >
                <h3 className="text-3xl font-semibold leading-tight text-[#f2efe7]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#93aab6]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#16344a] bg-[#081725]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Founder-led office</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Built around field memory and institutional discipline.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#b9cbd2]">
                Led by Sandeep Kumar, Guild Acre combines more than a decade of
                Gurgaon market experience with a private-office approach to land
                evaluation. The advisory posture is intentionally calm,
                evidence-aware, and selective.
              </p>
            </div>

            <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="bg-[#0d2030] p-6 text-base leading-7 text-[#c7d8de] sm:p-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase text-[#86b8c8]">About FAQ</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
              Questions before a private mandate.
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
