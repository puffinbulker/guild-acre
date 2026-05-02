import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gurgaon Corridor Comparison for Serious Buyers | Guild Acre",
  description:
    "A practical comparison of Gurgaon corridors for premium-family buyers, investors, and land-led enquiries.",
};

export default function GurgaonCorridorComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          Gurgaon Comparison
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Gurgaon corridor comparison for serious buyers
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          Gurgaon is not one single market. Buyers often make weaker decisions
          when they compare corridors only through price or hype instead of
          asking what each corridor is actually best suited for.
        </p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">Golf Course Road tends to anchor the luxury conversation</h2>
            <p className="mt-3 leading-8">
              This corridor often suits buyers who care about address quality,
              premium positioning, and established high-end residential stock.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Golf Course Extension Road often suits premium upgrade buyers</h2>
            <p className="mt-3 leading-8">
              Buyers looking for larger-format family living, newer launches,
              and premium but still evolving corridor strength often compare
              here more seriously.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Dwarka Expressway is usually read through growth and momentum</h2>
            <p className="mt-3 leading-8">
              This corridor often appeals to investors and buyers who are more
              comfortable with infrastructure-led narratives, launch-stage
              decisions, and longer-range appreciation logic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Sohna Road and adjoining belts need more use-case clarity</h2>
            <p className="mt-3 leading-8">
              These corridors can work well, but buyers usually benefit from
              being much clearer about whether they want practical end use,
              broader value, or land-led positioning rather than a trophy-market
              story.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
