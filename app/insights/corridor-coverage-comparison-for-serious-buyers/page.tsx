import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Corridor Coverage Comparison for Serious Buyers | Guild Acre",
  description:
    "A practical comparison of NCR corridors for premium-family buyers, investors, and land-led enquiries.",
  path: "/insights/corridor-coverage-comparison-for-serious-buyers",
});

export default function CorridorComparisonPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Corridor Coverage
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Corridor coverage comparison for serious buyers
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          NCR is not one single market. Buyers often make weaker decisions
          when they compare corridors only through price or hype instead of
          asking what each corridor is actually best suited for.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Golf Course Road tends to anchor the luxury conversation</h2>
            <p className="mt-3 leading-8">
              This corridor often suits buyers who care about address quality,
              premium positioning, and established high-end residential stock.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Golf Course Extension Road often suits premium upgrade buyers</h2>
            <p className="mt-3 leading-8">
              Buyers looking for larger-format family living, newer launches,
              and premium but still evolving corridor strength often compare
              here more seriously.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Dwarka Expressway is usually read through growth and momentum</h2>
            <p className="mt-3 leading-8">
              This corridor often appeals to investors and buyers who are more
              comfortable with infrastructure-led narratives, launch-stage
              decisions, and longer-range appreciation logic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Emerging Haryana corridors need stricter risk screening</h2>
            <p className="mt-3 leading-8">
              Pataudi, Farrukhnagar, Rewari, Narnaul, and Mahendergarh require
              corridor-specific reading around title, CLU, access, infrastructure
              timing, liquidity depth, and realistic exit audience.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
