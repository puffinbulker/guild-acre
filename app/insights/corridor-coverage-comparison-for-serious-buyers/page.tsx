import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Corridor Coverage Comparison for Serious Buyers | Guild Acre",
  description:
    "A high-level Guild Acre note on why corridor comparison should be shaped around private mandate fit.",
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
          NCR is not one single market. Public comparison can orient a buyer,
          but serious corridor selection should be shaped around private buyer
          intent, capital range, and holding horizon.
        </p>

        <div className="mt-10 space-y-8 text-[#b9cbd2]">
          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Established corridors and emerging corridors behave differently</h2>
            <p className="mt-3 leading-8">
              Some buyers want established address quality. Others want
              long-horizon positioning. The public page can name the difference,
              but the decision belongs inside a private review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Buyer intent matters more than a generic ranking</h2>
            <p className="mt-3 leading-8">
              A public ranking would make the wrong promise. Serious buyers need
              a mandate-specific conversation before treating any corridor as
              suitable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f2efe7]">Guild Acre keeps comparison notes private</h2>
            <p className="mt-3 leading-8">
              Internal filters, corridor notes, and movement direction are not
              published as open tables. They are shared only when the buyer's
              brief is accepted.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
