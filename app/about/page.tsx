import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Guild Acre | Premium Real Estate Advisory in Gurgaon",
  description:
    "Learn how Guild Acre approaches land, farmhouse, plotted, and selective premium property advisory across Gurgaon, Sohna, and Naugaon.",
};

export default function AboutPage() {
  const strengths = [
    "12+ years of Gurgaon market experience",
    "Focused on land, farmhouse, and plotted opportunities",
    "Private advisory for serious buyers and investors",
    "Clearer filtering before deeper engagement",
  ];

  const approach = [
    {
      title: "We narrow the noise first",
      text: "Most buyers do not need more listings. They need a cleaner way to decide what deserves attention and what should be ignored early.",
    },
    {
      title: "We think in use cases, not just categories",
      text: "An investor, a farmhouse lifestyle buyer, and a family-led upgrade buyer may all look at the same geography very differently. The advisory approach changes with the objective.",
    },
    {
      title: "We stay closer to judgment than hype",
      text: "Corridor stories, pricing narratives, and growth claims matter, but they only help when they are matched to product quality, buyer fit, and practical reality.",
    },
  ];

  const faqs = [
    {
      question: "What makes Guild Acre different from a typical broker-led experience?",
      answer:
        "Guild Acre is positioned as an advisory-led real estate business rather than a volume-led brokerage. The focus is on filtering, judgment, and cleaner shortlisting before deeper engagement.",
    },
    {
      question: "Who usually works with Guild Acre?",
      answer:
        "Serious buyers, investors, and selective NCR professionals who want stronger filtering, more thoughtful guidance, and fewer low-quality options.",
    },
    {
      question: "Which markets do you focus on most actively?",
      answer:
        "Guild Acre is most active across Gurgaon, Sohna, and Naugaon, with a particular focus on land, farmhouse, plotted, and selected premium property requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,#020617_0%,#071728_42%,#06111d_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
                About Guild Acre
              </p>

              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:mt-4 sm:text-5xl lg:text-6xl">
                Premium real estate advisory built for buyers who want better judgment, not more noise.
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                Guild Acre is a Gurgaon-focused advisory business helping serious
                buyers and investors think more clearly about land, farmhouse,
                plotted, and selective premium property opportunities across
                Gurgaon, Sohna, and Naugaon.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
                The goal is not to overwhelm you with inventory. The goal is to
                help you evaluate what deserves attention, what should be
                filtered out, and where conviction actually makes sense.
              </p>
            </div>

            <div className="rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 via-white/5 to-sky-400/10 p-6 sm:rounded-[32px] sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.3em]">
                Positioning
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
                Advisory-led, corridor-aware, and buyer-fit focused
              </h2>

              <div className="mt-5 space-y-4 text-slate-300 sm:mt-6 sm:space-y-5">
                <p className="leading-7 sm:leading-8">
                  With 12+ years in Gurgaon real estate, Guild Acre is built on
                  practical market understanding rather than volume-driven
                  brokerage behavior.
                </p>

                <p className="leading-7 sm:leading-8">
                  The focus stays strongest where judgment matters most: land,
                  farmhouse, plotted opportunities, and selective premium
                  requirements that need cleaner shortlisting.
                </p>

                <p className="leading-7 sm:leading-8">
                  We work best with buyers who value discretion, sharper
                  filtering, and a more thoughtful decision process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80 sm:text-xs sm:tracking-[0.28em]">
              Core Strengths
            </p>
            <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80 sm:text-xs sm:tracking-[0.28em]">
              Why Clients Work With Us
            </p>

            <div className="mt-5 space-y-5 sm:mt-6">
              {approach.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-10">
        <div className="rounded-[28px] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-white/5 to-sky-400/10 p-6 sm:rounded-[32px] sm:p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            Founder
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
            Advisory led by Sandeep Kumar
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            With 12+ years of Gurgaon market experience, Sandeep Kumar focuses
            on helping serious buyers and investors make clearer, more
            defensible decisions in land, farmhouse, plotted, and selective
            premium property opportunities.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            The operating principle is simple: understand deals carefully,
            filter more honestly, and create better decision conditions before a
            buyer commits capital or time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            About FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
            Questions people often ask before working with Guild Acre.
          </h2>
        </div>

        <div className="mt-8 space-y-4 sm:mt-10">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-7"
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
