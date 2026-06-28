import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dwarka Expressway vs Golf Course Extension Road | Guild Acre",
  description:
    "A high-level Guild Acre note on why Gurgaon corridor choices should be shaped around private buyer intent.",
  path: "/insights/dwarka-expressway-vs-golf-course-extension-road",
});

export default function CorridorComparisonPage() {
  return (
    <main className="min-h-screen bg-[#02070d] text-[#f2efe7]">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs uppercase text-[#86b8c8]">
          Corridor Orientation
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Dwarka Expressway vs Golf Course Extension Road
        </h1>
        <p className="mt-6 text-base leading-8 text-[#b9cbd2] sm:text-lg">
          These Gurgaon corridors attract different buyer mindsets. Public
          comparison can provide orientation, but the right decision depends on
          private buyer intent, timing, capital range, and holding horizon.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Corridor reputation is only the starting point</h2>
            <p className="mt-3 leading-8">
              A known corridor name can create confidence too early. Serious
              buyers should treat the public story as context, not as a decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Buyer purpose should lead the comparison</h2>
            <p className="mt-3 leading-8">
              End-use, investment, family upgrade, and long-horizon allocation
              can produce different answers. The sharper judgement belongs
              inside a confidential brief.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Guild Acre keeps corridor direction private</h2>
            <p className="mt-3 leading-8">
              Internal notes, suitability thinking, and movement direction are
              not published as open comparison tables. They are shared only when
              a buyer's mandate is accepted.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
