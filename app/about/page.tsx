export default function AboutPage() {
  const strengths = [
    "12+ years of deep Gurgaon market experience",
    "Specialization in land, farmhouse, and plotted opportunities",
    "Buyer-first advisory for HNI buyers and serious investors",
    "Focused only on genuine opportunities and long-term trust",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
              About Guild Acre
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:mt-4 sm:text-4xl lg:text-6xl">
              Premium land advisory built on market depth, trust, and genuine guidance.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              Guild Acre is a premium real estate advisory focused on curated land,
              farmhouse, and plotted opportunities across Gurgaon and nearby
              growth corridors.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
              We work with clients who value better filtering, stronger credibility,
              and more thoughtful decision-making before committing capital.
            </p>
          </div>

          <div className="rounded-[28px] border border-cyan-300/15 bg-gradient-to-br from-cyan-400/10 via-white/5 to-sky-400/10 p-6 sm:rounded-[32px] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.3em]">
              Experience & Positioning
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
              Trusted advisory for premium buyers in Gurgaon
            </h2>

            <div className="mt-5 space-y-4 text-slate-300 sm:mt-6 sm:space-y-5">
              <p className="leading-7 sm:leading-8">
                With 12+ years in Gurgaon real estate, Guild Acre is built on deep
                understanding of land, farmhouse, and plotted investment opportunities.
              </p>

              <p className="leading-7 sm:leading-8">
                We help HNI buyers, investors, and Delhi NCR professionals make
                cleaner, more confident real estate decisions.
              </p>

              <p className="leading-7 sm:leading-8">
                Our strength lies in understanding deals deeply, filtering seriously,
                and guiding clients honestly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:rounded-[28px] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80 sm:text-xs sm:tracking-[0.28em]">
              What sets us apart
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
              Why clients work with us
            </p>

            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                We don’t operate like brokers pushing random inventory. We operate
                like advisors who understand land, pricing, legal layers, and
                market cycles deeply.
              </p>

              <p>
                Every opportunity is filtered before it reaches you — so you only
                evaluate what actually makes sense.
              </p>

              <p>
                The result is a more premium, more focused, and more trustworthy
                experience for serious buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-cyan-300/15 bg-gradient-to-r from-cyan-400/10 via-white/5 to-sky-400/10 p-6 sm:mt-14 sm:rounded-[32px] sm:p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-300/80 sm:text-xs sm:tracking-[0.32em]">
            Founder
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl lg:text-4xl">
            Sandeep Kumar
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
            With 12+ years of experience in Gurgaon real estate, I focus on
            helping serious buyers and investors make clear, high-conviction
            decisions in land and farmhouse opportunities.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            I understand deals deeply, focus on genuine properties, and guide
            clients honestly. Guild Acre is built on that principle — premium
            advisory with stronger filtering and long-term trust.
          </p>
        </div>
      </section>
    </main>
  );
}