import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dwarka Expressway vs Golf Course Extension Road | Guild Acre",
  description:
    "A practical comparison of Dwarka Expressway and Golf Course Extension Road for Gurgaon buyers deciding between growth momentum and premium family positioning.",
};

export default function CorridorComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
          Corridor Comparison
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Dwarka Expressway vs Golf Course Extension Road
        </h1>
        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          These two Gurgaon corridors attract very different buyer mindsets.
          One is often driven by growth momentum and infrastructure narrative.
          The other tends to appeal more to premium-family buyers and upgrade-led
          decision making.
        </p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">Dwarka Expressway is usually a momentum story first</h2>
            <p className="mt-3 leading-8">
              Buyers are often attracted to Dwarka Expressway because of scale,
              visibility, and corridor-led appreciation logic. It can make sense
              for investors and buyers willing to think in terms of growth
              cycles, entry timing, and longer-range upside.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Golf Course Extension Road is usually a premium-livability story first</h2>
            <p className="mt-3 leading-8">
              Golf Course Extension Road is often easier to position for buyers
              who care about family use, premium launches, larger-format homes,
              and long-term corridor relevance beyond near-term excitement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">The wrong comparison creates confusion</h2>
            <p className="mt-3 leading-8">
              Problems begin when buyers compare the two only on price or only
              on appreciation talk. The more useful comparison is this: are you
              buying for momentum, or for a premium end-use and upgrade story?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Better corridor choices start with buyer intent</h2>
            <p className="mt-3 leading-8">
              Investors, launch-stage entrants, and growth-seeking buyers may
              lean toward Dwarka Expressway. Premium upgrade buyers and
              livability-focused families may find Golf Course Extension Road
              easier to defend in practice.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
