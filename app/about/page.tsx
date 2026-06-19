import { JsonLd, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Guild Acre | Private Land Intelligence & Acquisition Desk",
  description:
    "Learn how Guild Acre operates as a private land intelligence and acquisition desk for Gurgaon NCR and emerging Haryana growth corridors.",
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
    "Founder and co-founder judgement before deeper capital movement",
  ];

  const founders = [
    {
      name: "Harvinder Yadav",
      role: "Founder",
      text: "Sets Guild Acre's buyer-side discipline, corridor selection standards, and private mandate logic. His focus is simple: stronger decisions before capital, time, or reputation moves.",
      focus: "Mandate strategy / buyer discipline / corridor selection",
    },
    {
      name: "Sunny Yadav",
      role: "Co-Founder",
      text: "Leads the desk's market visibility, client coordination, and opportunity intake rhythm. He helps keep each brief selective, confidential, and aligned with the buyer's long-term purpose.",
      focus: "Client coordination / opportunity intake / private access",
    },
  ];

  const clientFeedback = [
    {
      quote:
        "Guild Acre helped us slow down at the right moment. The clarity on access, title context, and exit depth changed our decision.",
      label: "NRI investor, Dubai",
    },
    {
      quote:
        "The strongest part was discretion. No public listing pressure, no noisy follow-ups, just a clear view of what deserved our time.",
      label: "Family office, Delhi NCR",
    },
    {
      quote:
        "They rejected more options than they showed us. That made the final shortlist feel far more serious.",
      label: "Private land buyer, Gurgaon",
    },
    {
      quote:
        "The conversation moved beyond price per acre. We understood road access, use-case risk, and the holding logic before visiting.",
      label: "Strategic investor, NCR",
    },
    {
      quote:
        "Their framework caught risks that were not visible in the seller narrative. That saved us from a weak acquisition.",
      label: "HNI buyer, Haryana",
    },
    {
      quote:
        "We appreciated the calm process. The desk did not push urgency where the land did not justify it.",
      label: "Founder-investor, Gurugram",
    },
    {
      quote:
        "The briefing was compact but sharp. It helped our family compare two corridors without getting pulled into market noise.",
      label: "Private family mandate",
    },
    {
      quote:
        "Guild Acre treated confidentiality as part of the work, not as an afterthought. That mattered to us.",
      label: "NRI family, Singapore",
    },
    {
      quote:
        "The value was in the questions they asked before showing anything. It made the search feel more disciplined.",
      label: "Long-horizon buyer, NCR",
    },
  ];

  const faqs = [
    {
      question: "What is Guild Acre?",
      answer:
        "Guild Acre is a Private Land Intelligence & Acquisition Desk for Gurgaon NCR and emerging Haryana growth corridors, built for buyers who need strategic clarity before committing time, capital, or reputation.",
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
                A private land intelligence and acquisition desk for strategic Haryana corridor acquisition.
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
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
            <div>
              <p className="text-xs uppercase text-[#86b8c8]">Company leadership</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                Founder-led, discreet, and built around private mandate quality.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#b9cbd2]">
                Guild Acre is led by Harvinder Yadav, Founder, with Sunny Yadav
                as Co-Founder. The company is built for buyers who value
                judgement, confidentiality, and disciplined land evaluation over
                public listings or volume-led brokerage.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                {founders.map((founder) => (
                  <article
                    key={founder.name}
                    className="border border-[#16344a] bg-[#02070d] p-7 transition duration-500 hover:border-[#7aaec1]/55 hover:bg-[#0d2030] sm:p-8"
                  >
                    <p className="text-xs uppercase text-[#86b8c8]">
                      {founder.role}
                    </p>
                    <h3 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7]">
                      {founder.name}
                    </h3>
                    <p className="mt-3 text-xs uppercase text-[#738a99]">
                      {founder.focus}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-[#93aab6]">
                      {founder.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-px border border-[#16344a] bg-[#16344a] sm:grid-cols-2">
                {strengths.map((item) => (
                  <div key={item} className="bg-[#0d2030] p-6 text-base leading-7 text-[#c7d8de] sm:p-7">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#16344a] bg-[#02070d]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-xs uppercase text-[#86b8c8]">
                  Private client feedback
                </p>
                <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#f2efe7] sm:text-6xl">
                  What serious buyers notice when the process is quiet.
                </h2>
                <p className="mt-7 text-base leading-8 text-[#93aab6]">
                  These are anonymized feedback themes from private
                  conversations, shared without client names or transaction
                  details.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {clientFeedback.map((item) => (
                  <article
                    key={item.quote}
                    className="min-h-[290px] border border-[#16344a] bg-[#081725] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#7aaec1]/55 hover:bg-[#10283b] sm:p-8"
                  >
                    <span className="font-serif text-6xl leading-none text-[#7aaec1]/55" aria-hidden="true">
                      &quot;
                    </span>
                    <p className="mt-6 text-[1.35rem] font-semibold leading-8 text-[#f2efe7]">
                      {item.quote}
                    </p>
                    <div className="mt-7 h-px bg-[#16344a]" />
                    <p className="mt-5 text-xs uppercase text-[#738a99]">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
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
